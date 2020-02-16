import styled from "styled-components";

export const Container = styled.div`
    margin: 3rem auto;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.primary}
`;
export const ProfilePhoto = styled.img`
    border-radius: 50%;
    width: 200px;
`;