import styled from "styled-components";

export const Container = styled.div`
    margin: 3rem auto;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 1.5rem;
    color: ${props => props.theme.primary}
`;
export const ProfilePhoto = styled.img`
    border-radius: 50%;
    width: 200px;
`;
export const FlexGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const Body = styled.div`
  font-family: Lato, sans-serif;
  text-align: center;
  width: 100%;
  background-color: ${props => props.theme.background}
`;