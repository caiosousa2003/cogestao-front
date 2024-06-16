import {
    ModalStyle,
    ModalBtn,
    GlobalDiv,
    ModalTlt,
    Text,
} from "./styles";
  
export default function modalConfirm({ isModalOpen, cancel, confirmDelete, item }) {

return (
    <>
    <ModalStyle
        open={isModalOpen}
        onCancel={cancel}
        footer={null}
    >
        <GlobalDiv>
        <ModalTlt>Excluir {item}</ModalTlt>
        <Text>Tem certeza que você deseja excluir esse {item}?</Text>
        <ModalBtn onClick={confirmDelete}>EXCLUIR</ModalBtn>
        </GlobalDiv>
    </ModalStyle>
    </>
);
}