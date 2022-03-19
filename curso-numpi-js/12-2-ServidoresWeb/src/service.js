/**
 * Servicio donde se definen las funciones del CRUD
 */

const data = require('./MOCK_DATA.json');

module.exports = {
    getUsers : () => data, // devuelve todos los usuarios
    getUser : (id) => { // devuelve un registro especifico
        let identificador = Number(id);
        let user = data.filter((persona) => persona.id === identificador)[0];
        return user;
    },
    createUser: (dataUser) => { // crea un nuevo usuario
        let newUser = {
            id : data.length + 1,
            ...dataUser  // agrega las propiedades ya existentes del objeto despues del ID
        };
        data.push(newUser);
        return newUser;
    },
    updateUser: (id, newValues) => { // actualiza un usuario
        let identificador = Number(id);
        let idx = data.findIndex(dato => dato.id === identificador);
        data[idx].first_name = newValues.first_name;
        data[idx].last_name = newValues.last_name;
        data[idx].email = newValues.email;
        return data;
    },
    deleteUser: (id) => { // borra un registro
        let identificador = Number(id);
        let idx = data.findIndex(dato => dato.id === identificador);
        data.splice(idx,1);
        return data;
    },
}
