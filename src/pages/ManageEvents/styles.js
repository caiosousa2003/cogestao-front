import { styled } from 'styled-components';

export const ContainerMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
`;

export const Title = styled.h1`
    font-size: 36px;
    font-weight: bold;
`;

export const Line = styled.hr`
    width: 65rem;
    margin-top: 10px;
    margin-bottom: 30px;
    background-color: #ffd599;
    height: 2px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-width: 800px;
    width: 60vw;
    height: 100%;
    margin-bottom: 40px;;
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
`;

export const Icon = styled.div`
    display: flex;
    flex-direction: row;
    align-items: end;
    width: 18px;
    height: 18px;
`;

export const Input = styled.input`
    border-radius: 5px;
    width: 100%;
    height: 40px;
    background-color: transparent;
    border: ${(props) => (props?.borda ? "2px solid red" : "2px solid white")};
    font-size: 18px;
    &:focus {
        outline: none;
        border: 2px solid gray;
    }
`;

export const ContainerSelect = styled.div`
    width: 300px;
    height: 100%;
`;

export const Button = styled.button`
    background-color: #f19709;
    padding: 20px 60px 20px 60px;
    color: white;
    font-size: 28px;
    border: none;
    border-radius: 10px;
    margin-top: 20px;
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
`;