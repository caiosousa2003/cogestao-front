import { useQueryClient } from "@tanstack/react-query";
import {
    ModalStyle,
    GlobalDiv,
    Text,
    ModalTitle,
    ModalButton,
} from "./Styles";
import PropTypes from 'prop-types';
import { useDeleteEvents } from "../../../hooks/query/Event";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
export default function ModalConfirm({ isModalOpen, setIsModalOpen, setId, id, item }) {

    const queryClient = useQueryClient();

    const { mutate: deleteEvent } = useDeleteEvents({
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["events"]
            });
        },
        onError: (err) => {
            toast.error(err.response.data.message);
        },
    });

    const confirmDelete = () => {
        deleteEvent(id);
        setId(null);
        setIsModalOpen(false);
      }
    
    const cancel = () => {
        setId(null);
        setIsModalOpen(false);
    };

return (
    <>
    <ModalStyle
        open={isModalOpen}
        onCancel={cancel}
        footer={null}
    >
        <GlobalDiv>
        <ModalTitle>Excluir {item}</ModalTitle>
        <Text>Tem certeza que você deseja excluir esse {item}?</Text>
        <ModalButton onClick={confirmDelete}>EXCLUIR</ModalButton>
        </GlobalDiv>
    </ModalStyle>
    </>
);
}

ModalConfirm.propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    setIsModalOpen: PropTypes.func.isRequired,
    setId: PropTypes.func.isRequired,
    id: PropTypes.string,
    item: PropTypes.string.isRequired,
  };