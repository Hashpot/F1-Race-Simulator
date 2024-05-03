import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import noProfile from "../img/noPic.png";
import { SCUDERIA_COLOR, DEFAULT_COLOR } from "../utils/utils";
import { useEmitter } from "../context/Emitter";
import { DriverInfoContainer, DriverName,ConstructorName,ConstructorColor,ProfileImage,DriverCode,
  } from '../StyledComponents/Driver_info_styling';
  import { fetchDriverImage, fetchConstructorInfo } from '../component/DriverAPI';

  function DriverInfo({ driver }) {
    const [searchParams] = useSearchParams();
    const [profileImage, setProfileImage] = useState(noProfile);
    const [constructor, setConstructor] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { setDataEvent } = useEmitter();
  
    useEffect(() => {
      setLoading(true);
      fetchDriverImage(driver.url)
        .then((imgSource) => {
          setProfileImage(imgSource);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    }, [driver.url]);
  
    useEffect(() => {
      const year = searchParams.get("year");
      const race = searchParams.get("race");
      if (year && race && driver.driverId) {
        fetchConstructorInfo(year, race, driver.driverId)
          .then((value) => {
            setConstructor(value);
            setDataEvent(SCUDERIA_COLOR[value.constructorId] || DEFAULT_COLOR);
          })
          .catch(setError);
      }
    }, [searchParams, driver.driverId, setDataEvent]);
  
    if (loading) return <p>Loading...</p>;
   
  
    return (
      <DriverInfoContainer>
        <DriverName>
          <h2>
            {driver.givenName} {driver.familyName}
          </h2>
          <ConstructorName>{constructor.name}</ConstructorName>
          <ConstructorColor
            style={{
              backgroundColor: SCUDERIA_COLOR[constructor.constructorId] || DEFAULT_COLOR,
            }}
          />
        </DriverName>
        <ProfileImage
          src={profileImage}
          alt={`${driver.givenName} ${driver.familyName}`}
          style={{
            borderColor: SCUDERIA_COLOR[constructor.constructorId] || DEFAULT_COLOR,
          }}
        />
        <DriverCode>{driver.code || driver.familyName}</DriverCode>
      </DriverInfoContainer>
    );
  }

export default DriverInfo;
