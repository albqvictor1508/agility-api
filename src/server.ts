import fastify from "fastify";
import { type ZodTypeProvider, validatorCompiler, serializerCompiler } from "fastify-type-provider-zod";
import { fastifyCors } from "@fastify/cors";
import chalk from "chalk";

const app = fastify().withTypeProvider<ZodTypeProvider>();
app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.register(fastifyCors, {
  origin: "*"
});

app.get("/health", (): string => {
  return "OK";
});

app.listen({}, () => {
  console.log(chalk.green(`Agility HTTP Server running on ${env.PORT}`));
});
