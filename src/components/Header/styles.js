import { styled } from 'styled-components';

export const Logo = styled.img`
  height: 95%;
  margin-top: 6px;
  margin-left: 20px;
  cursor: pointer;
`;

export const ContainerHeader = styled.header`
  background-color: black;
  height: 90px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 620px) {
    height: 75px;
  }
  @media screen and (max-width: 448px) {
    height: 60px;
  }
  @media screen and (max-width: 318px) {
    height: 45px;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 80%;
  width: 358.4px;
  margin-right: 20px;
  justify-content: space-between;
  @media screen and (max-width: 620px) {
    width: 280px;
  }
  @media screen and (max-width: 448px) {
    width: 200px;
  }
  @media screen and (max-width: 318px) {
    width: 130px;
  }
`;

export const Button = styled.button`
  height: 60%;
  width: 45%;
  cursor: pointer;
  border: 1px solid white;
  border-radius: 5px;
  background-color: transparent;
  color: white;
  font-family: "Exo 2", sans-serif;
`;