import { Alert, Button, ContainerInput, ContainerLabel, ContainerList, ContainerLoading, ContainerMain, ContainerModalConfirm, ContainerModalEdit, ContainerSelect, Form, Icon, Input, Label, Line, Title } from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Card from "../../components/Card/Card";
import { AiFillEdit, AiOutlineCopy, AiOutlineAliyun } from "react-icons/ai";

function ManageEvents() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm(); // useForm({ resolver: zodResolver(validador) })

  const onSubmit = (data) => {
    // createProjeto(data);
  };

  return (
    <div>
      <ContainerModalConfirm></ContainerModalConfirm>
      <ContainerModalEdit></ContainerModalEdit>
      <ContainerMain>
        <Title>ADICIONAR NOVO EVENTO</Title>
        <Line></Line>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <ContainerInput>
            <ContainerLabel>
              <Label>Título </Label>
              <Icon><AiFillEdit style={{ height: "100%", width: "100%" }}/></Icon>
            </ContainerLabel>
            <Input name="title" error={errors} borda ={!!errors?.nome?.message} {...register("title")}></Input>
            <Alert>ERRO</Alert>
          </ContainerInput>
          <ContainerInput>
            <ContainerLabel>
              <Label>Imagem </Label>
              <Icon><AiOutlineAliyun style={{ height: "100%", width: "100%" }}/></Icon>
            </ContainerLabel>
            <Input name="image" error={errors} borda ={!!errors?.image?.message} {...register("image")}></Input>
            <Alert>ERRO</Alert>
          </ContainerInput>
          <ContainerInput>
            <ContainerLabel>
              <Label>Descrição </Label>
              <Icon><AiOutlineCopy style={{ height: "100%", width: "100%" }}/></Icon>
            </ContainerLabel>
            <Input name="description" error={errors} borda ={!!errors?.description?.message} {...register("description")}></Input>
            <Alert>ERRO</Alert>
          </ContainerInput>
          <ContainerSelect>
            <ContainerLabel>
              <Label>Categoria:</Label>
            </ContainerLabel>
            <Alert>ERRO</Alert>
          </ContainerSelect>
          <Button>ENVIAR</Button>
        </Form>
        <Title>GERENCIAR EVENTOS</Title>
        <Line></Line>
        <ContainerList>
          <ContainerLoading></ContainerLoading>
          <Card></Card>
        </ContainerList>
      </ContainerMain>
    </div>
  );
}

export default ManageEvents;