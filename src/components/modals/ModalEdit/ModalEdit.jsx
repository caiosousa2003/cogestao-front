import {
    ModalStyle,
    ModalBtn,
    GlobalDiv,
    ModalTlt,
    Text,
} from "./styles";
  
export default function modalEdit({ isModalOpen, cancel, event }) {

return (
    <>
    <ModalStyle
        open={isModalOpen}
        onCancel={cancel}
        footer={null}
    >
        <GlobalDiv>
        <ModalTlt>Excluir</ModalTlt>
        <Text>Tem certeza que você deseja excluir esse?</Text>
        <ModalBtn>EXCLUIR</ModalBtn>
        </GlobalDiv>
    </ModalStyle>
    </>
);
}