import { IResolvers } from 'graphql-tools';
import _ from 'lodash';
import { database } from '../data/data.store';
const mutation : IResolvers = {
    Mutation: {
        cursoNuevo(__:void, { curso }): any {
            const itemCurso = {
                id: String(database.cursos.length + 1),
                title: curso.title,
                description: curso.description,
                clases: curso.clases,
                time: curso.time,
                level: curso.level,
                logo: curso.logo,
                path: curso.path,
                teacher: curso.teacher,
                reviews: []
            }
            if (database.cursos.filter(itemCurs => itemCurs.title === itemCurso.title).length === 0) {
                database.cursos.push(itemCurso);
                return itemCurso;
            }
            
            return {
                id: '-1',
                title: `El curso ya existe con este titulo`,
                description: '',
                clases: -1,
                time: 0.0,
                level: 'TODOS',
                logo: '',
                path: '',
                teacher: '',
                reviews: []
            };
        },
        modificarCurso(__:void, { curso }): any {
            const elemeentoExiste = _.findIndex(database.cursos, function(o) {
                return o.id === curso.id
            });
            if (elemeentoExiste > -1 ) {
                const valoraciones = database.cursos[elemeentoExiste].reviews;
                curso.reviews = valoraciones;
                database.cursos[elemeentoExiste] = curso;
                return curso;
            }

            return {
                id: '-1',
                title: `El curso no existe en la base de datos`,
                description: '',
                clases: -1,
                time: 0.0,
                level: 'TODOS',
                logo: '',
                path: '',
                teacher: '',
                reviews: []
            };
        },
        eliminarCurso(__:void, { id }): any {
            const borraCurso = _.remove(database.cursos, function(curso) {
                return curso.id === id;
            });

            if (borraCurso[0] === undefined) {
                return {
                    id: '-1',
                    title: `El curso no se puede borrar porque no se ha encontrado ningún curso con ese ID`,
                    description: '',
                    clases: -1,
                    time: 0.0,
                    level: 'TODOS',
                    logo: '',
                    path: '',
                    teacher: '',
                    reviews: []
                };
            }
            return borraCurso[0];
        }
    }
}

export default mutation;