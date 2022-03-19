/** Creación de servidores 
 * 
 * Punto de partida del app de servidor
 * 
*/

const express = require('express');
const app = express();
const PORT = 3000;
const Service = require('./src/service');

app.use(express.json());

// esencial: los métodos de interacción con el servidor

// GET: usado para obtener datos desde el servidor
app.get('/', function(req, res){
    console.log('GET')
    res.json(
        {
            message : "Lista de usuarios",
            body: Service.getUsers()
        }
    ); // respuesta en el navegador
    res.end(); // fin de ejecución
});

// para retornar un usuario especifico
app.get('/:id', function(req, res){
    let {
        params: {id}
    } = req;
    res.json(
        {
            message : `Usuario: ${id}`,
            body: Service.getUser(id)
        }
    ); // respuesta en el navegador
    res.end(); // fin de ejecución
});

// POST: agregar usuario con este metodo
app.post('/',(req, res) => {
    let {body : newUser} = req;
    res.status(201).json( // 201: creado
        {
            message: "Usuario fue creado",
            body: Service.createUser(newUser),
        }
    );
});

// PUT: actualiza un usuario
app.put('/:id', (req,res) => {
    let {
        params: {id},
        body : newValues
    } = req;
    res.json(
        {
            message : `Actualiza usuario ${id}`,
            body: Service.updateUser(id, newValues),
        }
    );
});

// DELETE: borra un registro
app.delete('/:id', (req,res) => {
    let {
        params: {id}
    } = req;
    res.json(
        {
            message : `Borra usuario ${id}`,
            body: Service.deleteUser(id),
        }
    );
});

// esencial: el servidor debe estar "oyendo" los eventos que le ocurrirán
// en el puerto 3000
app.listen(PORT, () => {
    console.log(`Servidor en puerto ${PORT}`);
});

