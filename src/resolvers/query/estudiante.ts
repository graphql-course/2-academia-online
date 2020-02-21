import { IResolvers } from 'graphql-tools';
import { database } from './../../data/data.store';

const queryEstudiante : IResolvers = {
    Query: {
        estudiantes(): any {
            return database.estudiantes;
        },
        estudiante(__: void, { id }): any {
            const resultado = database.estudiantes.filter(estudiante => estudiante.id === id) [0];
            if (resultado === undefined) {
                return {
                    id: '-1',
                    name: `No se ha encontrado el estudiante con el ID ${id}`,
                    email: '',
                    courses: []
                }
            }
            return resultado;
        }
    }
}

export default queryEstudiante;