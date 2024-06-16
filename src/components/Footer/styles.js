import { styled } from 'styled-components';

export const Logo = styled.img`
  height: 100%;
  margin-top: 6px;
  margin-left: 20px;
  cursor: pointer;
`;

export const ContainerFooter = styled.footer`
  background-color: black;
  height: 120px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 620px) {
    height: 105px;
  }
  @media screen and (max-width: 448px) {
    height: 90px;
  }
  @media screen and (max-width: 318px) {
    height: 75px;
  }
`;

export const ContainerContacts = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  flex-direction: column;
  height: 80%;
  margin-right: 30px;
  gap: 5px;
`;

export const Contact = styled.a`
  color: white;
  text-decoration: none;
  font-size: 23px;
  &:hover{
    text-decoration: underline;
  }
  @media screen and (max-width: 620px) {
    font-size: 20px;
  }
  @media screen and (max-width: 448px) {
    font-size: 16px;
  }
  @media screen and (max-width: 318px) {
    font-size: 12px;
  }
`;