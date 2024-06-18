import { Alert, Button, ContainerInput, ContainerLabel, ContainerList, ContainerLoading, ContainerMain, ContainerModalConfirm, ContainerModalEdit, ContainerSelect, Select, Form, Icon, Input, Label, Line, Title, Option, LoadIcon } from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CardEvent from "../../components/Card/Card";
import { AiFillEdit, AiOutlineCopy, AiOutlineAliyun } from "react-icons/ai";
import { useQueryClient } from "@tanstack/react-query";
import { useCreateEvents, useDeleteEvents, useGetEvents } from "../../hooks/query/Event";
import { useState } from "react";
import ModalConfirm from "../../components/modals/ModalConfirm/ModalConfirm";
import ModalEdit from "../../components/modals/ModalEdit/ModalEdit";
import { validador } from "./utils";

function ManageEvents() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: zodResolver(validador) });
  const [isModalConfirmOpen, setIsModalConfirmOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [id, setId] = useState();
  const [event, setEvent] = useState();

  const queryClient = useQueryClient();

  const { data: events, isLoading } = useGetEvents({
      onError: (err) => {
          alert(err.response.data.message);
      },
  });

  const { mutate: deleteEvent } = useDeleteEvents({
      onSuccess: () => {
          queryClient.invalidateQueries({
              queryKey: ["events"]
          });
      },
      onError: (err) => {
          alert(err.response.data.message);
      },
  });

  const { mutate: createEvent } = useCreateEvents({
      onSuccess: () => {
          queryClient.invalidateQueries({
              queryKey: ["events"]
          });
          reset();
      },
      onError: (err) => {
          alert(err.response.data.message);
      },
  });

  const onSubmit = (data) => {
    createEvent(data);
  };

  const showModalConfirm = (id_event) => {
    setId(id_event);
    setIsModalConfirmOpen(true);
  };

  const confirmDelete = () => {
    deleteEvent(id);
    setId(null);
    setIsModalConfirmOpen(false);
  }

  const cancel = () => {
    setId(null);
    setIsModalConfirmOpen(false);
    setEvent(null);
    setIsModalEditOpen(false);
  }

  const showModalEdit = (event) => {
    setEvent(event);
    setIsModalEditOpen(true);
  };

  return (
    <div>
      <ContainerModalConfirm>
        <ModalConfirm
          isModalOpen={isModalConfirmOpen}
          cancel={cancel}
          confirmDelete={confirmDelete}
          item="evento"
        ></ModalConfirm>
      </ContainerModalConfirm>
      <ContainerModalEdit>
        <ModalEdit
          isModalOpen={isModalEditOpen}
          cancel={cancel}
          event={event}
        ></ModalEdit>
      </ContainerModalEdit>
      <ContainerMain>
        <Title>ADICIONAR NOVO EVENTO</Title>
        <Line></Line>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <ContainerInput>
            <ContainerLabel>
              <Label>Título </Label>
              <Icon><AiFillEdit style={{ height: "100%", width: "100%" }}/></Icon>
            </ContainerLabel>
            <Input placeholder="Festa" autocomplete="off" name="title" error={errors} borda ={!!errors?.title?.message} {...register("title")}></Input>
            {!!errors?.title?.message && <Alert>{errors?.title?.message}</Alert>}
          </ContainerInput>
          <ContainerInput>
            <ContainerLabel>
              <Label>Imagem </Label>
              <Icon><AiOutlineAliyun style={{ height: "100%", width: "100%" }}/></Icon>
            </ContainerLabel>
            <Input placeholder="https://................" autocomplete="off" name="image" error={errors} borda ={!!errors?.image?.message} {...register("image")}></Input>
            {!!errors?.image?.message && <Alert>{errors?.image?.message}</Alert>}
          </ContainerInput>
          <ContainerInput>
            <ContainerLabel>
              <Label>Descrição </Label>
              <Icon><AiOutlineCopy style={{ height: "100%", width: "100%" }}/></Icon>
            </ContainerLabel>
            <Input placeholder="Descrição curta" autocomplete="off" name="description" error={errors} borda ={!!errors?.description?.message} {...register("description")}></Input>
            {!!errors?.description?.message && <Alert>{errors?.description?.message}</Alert>}
          </ContainerInput>
          <ContainerSelect>
            <ContainerLabel>
              <Label>Categoria:</Label>
            </ContainerLabel>
            <Select required name="category" error={errors} defaultValue="" borda ={!!errors?.category?.message} {...register("category")}>
              <Option value="" disabled hidden>Opções de categoria</Option>
              <Option value="Pequeno">Pequeno</Option>
              <Option value="Médio">Médio</Option>
              <Option value="Grande">Grande</Option>
            </Select>
            {!!errors?.category?.message && <Alert>{errors?.category?.message}</Alert>}
          </ContainerSelect>
          <Button>ENVIAR</Button>
        </Form>
        <Title>GERENCIAR EVENTOS</Title>
        <Line></Line>
        {isLoading && <ContainerLoading>CARREGANDO...<LoadIcon/></ContainerLoading>}
        <ContainerList>
          {events ? 
            events.map((event, index) => (
              <CardEvent key={index} event={event} showModalConfirm={() => showModalConfirm(event?._id)} showModalEdit={() => showModalEdit(event)}></CardEvent>
          ))
          : <Alert>Nenhum evento cadastrado</Alert>
          }
        </ContainerList>
      </ContainerMain>
    </div>
  );
}

export default ManageEvents;