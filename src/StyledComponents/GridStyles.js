import styled from 'styled-components';

export const GridContainer = styled.div`
    display: grid;
    place-items: center;
    width: 100%;
`;

export const Title = styled.h1`
    font-weight: bold;
    font-size: 2rem;
    margin-bottom: 1rem;
    color: white; 
`;
export const Subtitle = styled.h2`
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: white; 
    position: absolute;
    top: 0;
    right: 30px;
`;

export const DriversContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr; 
    gap: 2rem;
`;

export const DriverWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 4rem;
`;

