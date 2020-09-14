import 'dotenv/config';
import 'colors';
import { ApolloServer } from 'apollo-server';
import { Schema } from './graphql';
import { logger } from './logger';
const server = new ApolloServer(Schema);

server.listen().then(({ url }: any) => {
  logger.info(`🚀  Server ready at ${url}`.yellow.italic);
});
