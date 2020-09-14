import { typeDefs } from './typedefs';
import { resolvers } from './resolvers';
import errorHandler from '../middleware/error';
const { NODE_ENV } = process.env;

const development = {
  typeDefs: typeDefs,
  resolvers: resolvers,
  playground: false,
  formatError: (error: any) => {
    return errorHandler(error);
  },
};
const production = {
  typeDefs: typeDefs,
  resolvers: resolvers,
  playground: false,
  formatError: (error: any) => {
    return errorHandler(error);
  },
};
const Schema = NODE_ENV === 'development' ? development : production;
export default Schema;
