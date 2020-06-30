import 'dotenv/config';
import '@babel/polyfill';
import { resolve } from 'path';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './typeDefs';
import resolvers from './resolvers';

const { PORT = 4000, NODE_ENV = 'development' } = process.env;

const app = express();

// middlewares
app.use(cors());
app.use(helmet());
app.use(compression());

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
    }
});
server.applyMiddleware({ app });

if (NODE_ENV === 'production') {
    app.use(express.static(resolve(__dirname, 'client')));
    app.get('/*', (req, res) => {
        res.sendFile(resolve(__dirname, 'client', 'index.html'));
    })
}

app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
});