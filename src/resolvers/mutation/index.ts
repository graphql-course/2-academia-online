import GMR from "graphql-merge-resolvers";
import mutationCurso from "./curso";

const mutationResolvers = GMR.merge(
    [ mutationCurso ]
);

export default mutationResolvers;