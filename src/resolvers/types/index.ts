import GMR from "graphql-merge-resolvers";
import typesEstudiante from "./estudiante";
import typesCurso from "./curso";

const typeResolvers = GMR.merge(
    [ typesEstudiante, typesCurso]
);

export default typeResolvers;