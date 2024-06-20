import { useForm } from "react-hook-form";
import { Alert, Option, Input, Select, ContainerSelect, Icon, ContainerInput, Label, ContainerLabel, Form, ModalStyle, GlobalDiv, ModalTitle, ModalButton, } from "./styles";
import { AiFillEdit, AiOutlineCopy, AiOutlineAliyun } from "react-icons/ai"; 
import { zodResolver } from "@hookform/resolvers/zod";
import { validador } from "./utils";
import PropTypes from 'prop-types';
import { useQueryClient } from "@tanstack/react-query";
import { useUpdateEvents } from "../../../hooks/query/Event";

export default function ModalEdit({ isModalOpen, setIsModalOpen, event, setEvent }) {

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(validador), defaultValues:{
        title: event?.title || '',
        image: event?.image || '',
        description: event?.description || '',
        category: event?.category || '',
    } });

    const queryClient = useQueryClient();

    const { mutate: updateEvent } = useUpdateEvents({
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ["events"],
          });
          alert("Projeto alterado com sucesso!");
        },
        onError: (err) => {
          alert(err.response.data.message);
        },
      });

    const onSubmit = (data) => {
        updateEvent({id: event?._id, body: data});
        setEvent(null);
        setIsModalOpen(false);
      };

    const cancel = () => {
        setEvent(null);
        setIsModalOpen(false);
    };

return (
    <ModalStyle
        open={isModalOpen}
        onCancel={cancel}
        footer={null}
    >
        <GlobalDiv>
            <ModalTitle>Editar Informações</ModalTitle>
            <Form onSubmit={handleSubmit(onSubmit)}>
            <ContainerInput>
                <ContainerLabel>
                    <Label>Título </Label>
                    <Icon><AiFillEdit style={{ height: "100%", width: "100%" }}/></Icon>
                </ContainerLabel>
                <Input placeholder="Mude o título" defaultValue={event?.title} autoComplete="off" name="title" error={errors} border ={!!errors?.title?.message} {...register("title")}></Input>
                {!!errors?.title?.message && <Alert>{errors?.title?.message}</Alert>}
            </ContainerInput>
            <ContainerInput>
                <ContainerLabel>
                    <Label>Imagem </Label>
                    <Icon><AiOutlineAliyun style={{ height: "100%", width: "100%" }}/></Icon>
                </ContainerLabel>
                <Input placeholder="Mude a imagem" defaultValue={event?.image} autoComplete="off" name="image" error={errors} border ={!!errors?.image?.message} {...register("image")}></Input>
                {!!errors?.image?.message && <Alert>{errors?.image?.message}</Alert>}
            </ContainerInput>
            <ContainerInput>
                <ContainerLabel>
                    <Label>Descrição </Label>
                    <Icon><AiOutlineCopy style={{ height: "100%", width: "100%" }}/></Icon>
                </ContainerLabel>
                <Input placeholder="Mude a descrição" defaultValue={event?.description} autoComplete="off" name="description" error={errors} border ={!!errors?.description?.message} {...register("description")}></Input>
                {!!errors?.description?.message && <Alert>{errors?.description?.message}</Alert>}
            </ContainerInput>
            <ContainerSelect>
                <ContainerLabel>
                    <Label>Categoria:</Label>
                </ContainerLabel>
                <Select name="category" error={errors} defaultValue={event?.category} border ={!!errors?.category?.message} {...register("category")}>
                    <Option value="Pequeno">Pequeno</Option>
                    <Option value="Médio">Médio</Option>
                    <Option value="Grande">Grande</Option>
                </Select>
                {!!errors?.category?.message && <Alert>{errors?.category?.message}</Alert>}
            </ContainerSelect>
            <ModalButton type="submit">ENVIAR</ModalButton>
            </Form>
        </GlobalDiv>
    </ModalStyle>
);
}

ModalEdit.propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    setIsModalOpen: PropTypes.func.isRequired,
    setEvent: PropTypes.func.isRequired,
    event: PropTypes.object.isRequired,
  };