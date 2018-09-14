// const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const porhacer = require('./por-hacer/por-hacer')
const colors = require('colors')

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porhacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porhacer.getlistado();

        for (let tarea of listado) {
            console.log('==========PORHACER============='.green);
            console.log(colors.blue('Descripcion', tarea.descripcion));
            console.log(colors.yellow('Estado', tarea.completado));
            console.log('================================'.green);
        }

        break;
    case 'actualizar':
        let actualziado = porhacer.actualziar(argv.descripcion, argv.completado);
        console.log(actualziado);
        break;

    case 'borrar':
        let borrado = porhacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando no reconocido');
        break;
}

// console.log(argv);