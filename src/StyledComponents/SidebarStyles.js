import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start; 
    width: 100%;
    margin-top: 2rem; /
`;

export const Button = styled.button`
    text-align: center;
    border-radius: 5rem;
    color: white;
    transition: all 0.3s;
    width: 8rem;
    padding: 1rem 2rem;
    background: linear-gradient(to right, #3F4163, #8C5DA5);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
    &:hover {
        transform: scale(1.1);
    }
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    transition: all 0.3s;
`;
