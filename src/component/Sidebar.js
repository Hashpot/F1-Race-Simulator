import {faFlagCheckered, faPause, faUndo} from '@fortawesome/free-solid-svg-icons'
import { ButtonContainer, Button, StyledFontAwesomeIcon } from '../StyledComponents/SidebarStyles';


function Sidebar({ isClicked, onClick, setActualLap }) {
    return (
        <ButtonContainer>
            <Button onClick={onClick}>
                {!isClicked ? (
                    <div className="flex place-items-center font-f1 space-x-2">
                        <p>Start</p>
                        <StyledFontAwesomeIcon icon={faFlagCheckered} />
                    </div>
                ) : (
                    <div className="flex place-items-center font-f1 space-x-2">
                        <p>Pause</p>
                        <StyledFontAwesomeIcon icon={faPause} />
                    </div>
                )}
            </Button>

            <Button
                className={isClicked ? 'opacity-50' : ''}
                onClick={() => !isClicked ? setActualLap(0) : 0}
            >
                <div className="flex place-items-center font-f1 space-x-2">
                    <p>Restart</p>
                    <StyledFontAwesomeIcon
                        className={`${isClicked ? '' : 'group-hover:-rotate-[360deg]'}`}
                        icon={faUndo}
                    />
                </div>
            </Button>
        </ButtonContainer>
    );
}

export default Sidebar
