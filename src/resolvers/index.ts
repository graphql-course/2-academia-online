import { IResolvers } from 'graphql-tools';
import query from './query';
import type from './types';
import mutation from './mutation';

const resolversMap : IResolvers = {
    ...query,
    ...mutation,
    ...type
}

export default resolversMap;