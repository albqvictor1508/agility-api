import fastify from "fastify";
import { type ZodTypeProvider, validatorCompiler, serializerCompiler } from "fastify-type-provider-zod";
import { fastifyCors } from "@fastify/cors";
import chalk from "chalk";
import { env } from "./utils/env.ts";

const app = fastify().withTypeProvider<ZodTypeProvider>();
app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.register(fastifyCors, {
  origin: "*"
});

app.get("/health", (): string => {
  return "OK";
});

app.listen({ port: Number(env.PORT) ?? 3333 }, () => {
  console.log(chalk.green(`Agility HTTP Server running on ${env.PORT}`));
});
