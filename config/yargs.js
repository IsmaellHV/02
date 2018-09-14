const argv = require('yargs')
    .command('crear', 'Crear un elemnto por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer.'
        }
    })
    .command('actualizar', 'Actualiza el estado completados de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer.'
        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'Marca como completados o pendiente de la tarea.'
        }
    })
        .command('borrar', 'Eliminar un elemento por hacer', {
            descripcion: {
                demand: true,
                alias: 'd',
                desc: 'Descripcion de la tarea por hacer.'
            }
    })
    .help()
    .argv;

module.exports = {
    argv
}