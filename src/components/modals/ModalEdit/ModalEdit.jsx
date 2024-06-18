import { useForm } from "react-hook-form";
import { Alert, Option, Input, Select, ContainerSelect, Icon, ContainerInput, Label, ContainerLabel, Form, ModalStyle, ModalBtn, GlobalDiv, ModalTlt, } from "./styles";
import { AiFillEdit, AiOutlineCopy, AiOutlineAliyun } from "react-icons/ai"; 
import { zodResolver } from "@hookform/resolvers/zod";
import { validador } from "./utils";

export default function modalEdit({ isModalOpen, cancel, event }) {

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(validador) });

return (
    <>
    <ModalStyle
        open={isModalOpen}
        onCancel={cancel}
        footer={null}
    >
        <GlobalDiv>
            <ModalTlt>Editar Informações</ModalTlt>
            <Form>
            <ContainerInput>
                <ContainerLabel>
                    <Label>Título </Label>
                    <Icon><AiFillEdit style={{ height: "100%", width: "100%" }}/></Icon>
                </ContainerLabel>
                <Input placeholder="Mude o título" autocomplete="off" name="title" error={errors} borda ={!!errors?.title?.message} {...register("title")}></Input>
                {!!errors?.title?.message && <Alert>{errors?.title?.message}</Alert>}
            </ContainerInput>
            <ContainerInput>
                <ContainerLabel>
                    <Label>Imagem </Label>
                    <Icon><AiOutlineAliyun style={{ height: "100%", width: "100%" }}/></Icon>
                </ContainerLabel>
                <Input placeholder="Mude a imagem" autocomplete="off" name="image" error={errors} borda ={!!errors?.image?.message} {...register("image")}></Input>
                {!!errors?.image?.message && <Alert>{errors?.image?.message}</Alert>}
            </ContainerInput>
            <ContainerInput>
                <ContainerLabel>
                    <Label>Descrição </Label>
                    <Icon><AiOutlineCopy style={{ height: "100%", width: "100%" }}/></Icon>
                </ContainerLabel>
                <Input placeholder="Mude a descrição" autocomplete="off" name="description" error={errors} borda ={!!errors?.description?.message} {...register("description")}></Input>
                {!!errors?.description?.message && <Alert>{errors?.description?.message}</Alert>}
            </ContainerInput>
            <ContainerSelect>
                <ContainerLabel>
                    <Label>Categoria:</Label>
                </ContainerLabel>
                <Select required name="category" error={errors} defaultValue="" borda ={!!errors?.category?.message} {...register("category")}>
                    <Option value="" disabled hidden>Mude a categoria</Option>
                    <Option value="Pequeno">Pequeno</Option>
                    <Option value="Médio">Médio</Option>
                    <Option value="Grande">Grande</Option>
                </Select>
                {!!errors?.category?.message && <Alert>{errors?.category?.message}</Alert>}
            </ContainerSelect>
            <ModalBtn type="submit">ENVIAR</ModalBtn>
            </Form>
        </GlobalDiv>
    </ModalStyle>
    </>
);
}