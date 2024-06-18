import { ContainerBackCard, ContainerCard, ContainerIcons, IconEdit, IconTrash, Image } from "./styles";
import PropTypes from 'prop-types';

export default function CardEvent({ event, showModalConfirm, showModalEdit }) {

    return (
      <div>
        <ContainerCard
        cover={
          <Image
            alt="example"
            src={event?.image}
          />
        }
        actions={[
        ]}
      >
        <ContainerBackCard
          title={event?.title}
          description={event?.description}
        />
        <ContainerIcons>
          <IconEdit onClick={showModalEdit}/>
          <IconTrash onClick={showModalConfirm}/>
        </ContainerIcons>
      </ContainerCard>
    </div>
    );
  }

CardEvent.propTypes = {
  event: PropTypes.object.isRequired,
  showModalConfirm: PropTypes.func.isRequired,
  showModalEdit: PropTypes.func.isRequired, 
};