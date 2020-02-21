import GMR from "graphql-merge-resolvers";
import queryEstudiante from "./estudiante";
import queryCurso from "./curso";
const queryResolvers = GMR.merge(
    [ queryEstudiante, queryCurso ]
);

export default queryResolvers;