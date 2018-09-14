const fs = require('fs');

let listadoporhacer = [];



const guardarDB = (data) => {
    let data2 = JSON.stringify(data)
    fs.writeFile('db/data.json', data2, (error) => {
        // if (error) console.log(error);
        if (error) console.log(error);

        console.log('grabado correctamente')
    })
}

const cargarDB = () => {
    try {
        listadoporhacer = require('../db/data.json');

    } catch (error) {
        console.log(error.message)
        listadoporhacer = []
    }
}


const crear = (descripcion) => {
    let porhacer = {
        descripcion,
        completado: false,
    }
    cargarDB();

    listadoporhacer.push(porhacer);
    guardarDB(listadoporhacer)
    return porhacer;
}

const getlistado = () => {
    return require('../db/data.json');
}

const actualziar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoporhacer.findIndex(tarea => {
        return tarea.descripcion === descripcion
    })

    if (index >= 0) {
        listadoporhacer[index].completado = completado;
        guardarDB(listadoporhacer);
        return true;
    } else {
        return false;
    }

}

const borrar = (descripcion)=>{
    cargarDB();
    let index = listadoporhacer.findIndex(tarea => {
        return tarea.descripcion === descripcion
    })

    if (index >= 0) {
        listadoporhacer.splice(index, 1)
        console.log('borrado correctamente')
        guardarDB(listadoporhacer);
        return true;
    } else {
        return false;
    }
}

module.exports = {
    crear,
    getlistado,
    actualziar,
    borrar
}