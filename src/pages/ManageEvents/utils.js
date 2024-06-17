import { z } from "zod";

export const validador = z.object({
    nome: z
      .string({ required_error: "Insira um nome!" })
      .min(2, {message: "O projeto deve ter no mínimo 2 carácteres!"})
      .max(20, { message: "Limite máximo de carácteres alcançado!" }),
    descricao: z
        .string({ required_error: "Insira uma descrição!" })
        .min(10, {message: "A descrição deve ter no mínimo 10 carácteres!"})
        .max(100, { message: "Limite máximo de carácteres alcançado!" }),
    equipe: z
        .string({ required_error: "Insira a equipe responsável!" })
        .min(2, {message: "O nome da equipe deve ter no mínimo 2 carácteres!"})
        .max(20, { message: "Limite máximo de carácteres alcançado!" }),
  });