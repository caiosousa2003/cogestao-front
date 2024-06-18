import {
    ModalStyle,
    ModalBtn,
    GlobalDiv,
    ModalTlt,
    Text,
} from "./styles";
import PropTypes from 'prop-types';
  
export default function ModalConfirm({ isModalOpen, cancel, confirmDelete, item }) {

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

ModalConfirm.propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    cancel: PropTypes.func.isRequired,
    confirmDelete: PropTypes.func.isRequired,
    item: PropTypes.string.isRequired,
  };