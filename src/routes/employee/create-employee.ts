import { type FastifyPluginAsyncZod } from "fastify-type-provider-zod";

export const createEmployeeRoute: FastifyPluginAsyncZod = async (app): Promise<void> => {
  app.post("/employee", (request, reply) => {
    return reply.status(200).send("salve");
  })
}
