import { IResolvers } from 'graphql-tools';
import { database } from './../../data/data.store';

const queryCurso : IResolvers = {
    Query: {
        cursos(): any {
            return database.cursos;
        },
        curso(__: void, { curso }): any {
            const resultado = database.cursos.filter(curso_ => curso_.id === curso) [0];
            if (resultado === undefined) {
                return {
                    id: '-1',
                    title: `No se ha encontrado el curso con el ID ${curso}`,
                    description: '',
                    clases: -1,
                    time: 0.0,
                    logo: '',
                    level: 'TODOS',
                    path: '',
                    teacher: '',
                    reviews: []
                }
            }
            return resultado;
        }
    }
}

export default queryCurso;