import { z } from "zod";

export const validador = z.object({
    title: z
      .string({ required_error: "Insira um título válido!" })
      .min(1, {message: "Título é um campo obrigatório! Insira um título!"})
      .max(30, { message: "Limite máximo de 30 carácteres alcançado!" }),
    description: z
        .string({ required_error: "Insira uma descrição válida!" })
        .min(1, {message: "Descrição é um campo obrigatório! Insira uma descrição!"})
        .max(80, { message: "Limite máximo de 90 carácteres alcançado!" }),
    category: z
        .string({ required_error: "Escolha uma categoria válida!" })
        .min(1, {message: "Escolha uma categoria válida!"}),
    image: z
        .string({ required_error: "Insira um link válido para a imagem!" })
        .min(1, {message: "Link da imagem é um campo obrigatório! Insira-o!"})
        .url("Insira um link válido para a imagem!"),
  });