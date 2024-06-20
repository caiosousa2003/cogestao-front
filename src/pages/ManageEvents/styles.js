import { styled } from 'styled-components';
import { BiLoaderCircle } from "react-icons/bi";

export const ContainerMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
`;

export const Title = styled.h1`
    font-size: 36px;
    font-weight: bold;
    text-align: center;
    @media screen and (max-width: 756px) {
        font-size: 32px;
    }
    @media screen and (max-width: 644px) {
        font-size: 28px;
    }
    @media screen and (max-width: 544px) {
        font-size: 24px;
        width: 85%;
    }
    @media screen and (max-width: 300px) {
        font-size: 22px;
        width: 90%;
    }
`;

export const Line = styled.hr`
    max-width: 68rem; 
    width: 90%;
    margin-top: 10px;
    margin-bottom: 30px;
    background-color: #ffd599;
    height: 2px;
    @media screen and (max-width: 544px) {
        width: 100%;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-width: 800px;
    width: 100%;
    height: 100%;
    margin-bottom: 40px;
`;

export const ContainerLabel = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 5px;
`;

export const ContainerInput = styled.div`
    width: 100%;
    height: 100%;
`;

export const Label = styled.label`
    color: white;
    font-size: 18px;
    font-weight: bold;
    margin-right: 5px;
    margin-left: 3px;
    @media screen and (max-width: 544px) {
        font-size: 14px;
    }
`;

export const Icon = styled.div`
    display: flex;
    flex-direction: row;
    align-items: end;
    width: 18px;
    height: 18px;
    @media screen and (max-width: 544px) {
        width: 14px;
        height: 14px;
    }
`;

export const Input = styled.input`
    border-radius: 5px;
    width: 100%;
    height: 40px;
    background-color: transparent;
    border: ${(props) => (props?.border ? "2px solid red" : "2px solid white")};
    font-size: 16px;
    padding: 5px;
    color: white;
    &:focus {
        outline: none;
    }
    @media screen and (max-width: 544px) {
        font-size: 12px;
        height: 30px;
    }
`;

export const Select = styled.select`
    border-radius: 5px;
    width: 100%;
    height: 40px;
    background-color: transparent;
    border: ${(props) => (props?.border ? "2px solid red" : "2px solid white")};
    font-size: 16px;
    padding: 5px;
    color: white;
    cursor: pointer;
    &:invalid{
        color: gray;
    }
    &:focus {
        outline: none;
        border: 2px solid gray;
    }
    @media screen and (max-width: 544px) {
        font-size: 12px;
        height: 30px;
    }
`;

export const Option = styled.option`
    color: black;
`;

export const ContainerSelect = styled.div`
    max-width: 300px;
    width: 100%;
    height: 100%;
`;

export const Button = styled.button`
    background-color: #f19709;
    padding: 15px 40px 15px 40px;
    color: white;
    font-size: 26px;
    border: none;
    border-radius: 10px;
    margin-top: 20px;
    cursor: pointer;
    &:hover {
        opacity: 0.9;
    }
    @media screen and (max-width: 544px) {
        padding: 7.5px 20px 7.5px 20px;
        font-size: 18px;
    }
`;

export const Alert = styled.p`
    color: white;
    text-transform: uppercase;
    text-decoration: solid;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 2px;
    margin-left: 3px;
    width: 100%;
`;

export const ContainerList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 400px);
    gap: 20px;

    @media screen and (max-width: 1700px) {
        grid-template-columns: repeat(3, 400px);
    }
    @media screen and (max-width: 1300px) {
        grid-template-columns: repeat(2, 400px);
    }
    @media screen and (max-width: 900px) {
        grid-template-columns: repeat(1, 400px);
    }
    @media screen and (max-width: 544px) {
        grid-template-columns: repeat(2, 200px);
    }
    @media screen and (max-width: 470px) {
        grid-template-columns: repeat(1, 200px);
    }
`;

export const ContainerModalConfirm = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContainerModalEdit = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContainerLoading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 24px; 
    gap: 30px;
`;

export const LoadIcon = styled(BiLoaderCircle)`
    height: 100px;
    width: auto;
`;