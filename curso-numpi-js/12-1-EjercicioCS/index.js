// inicializacion

const axios = require("axios"); // para peticiones al servidor remoto
const fs = require("fs").promises; // sistema de archivos
const path = require("path"); // ruta de archivos

// uso de axios en el programa

const main = async () => {
  let response = await axios.get("https://rickandmortyapi.com/api/character");
  let {
    data: { results }, // solo obtengo los resultados de todo el conjunto de datos
  } = response;
  
  // cabecera del archivo csv
  let res_headers = Object.keys(results[0]);
  headers = res_headers.slice(0,4);
  headers = headers.join(","); // id,name,status,species
  
  // contenido del archivo csv
  let characters = results
    .map((character) => {
      // extraigo los personajes a partir de los resultados
      return {
        id: character.id,
        name: character.name,
        status: character.status,
        species: character.species,
      };
    })
    .map((character) => Object.values(character).join(",")) // transformación de registros en formato csv
    .join('\n'); // salto de línea entre registro y registro

  let csvContent = headers.concat("\n", characters);

  //console.log(path.join(__dirname,"data.csv")); // creo la ruta para el nuevo archivo
  console.log(csvContent);
  await fs.writeFile(path.join(__dirname,"data.csv"), csvContent); // guardo los personajes en data.csv
  
};

main();
