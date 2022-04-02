const axios = require('axios');
const { v4 : uuid } = require('uuid');
const fs = require('fs');

const getUsers = async () => {
    const url = "https://randomuser.me/api/";
    try{
        const { response } = await axios.get("https://randomuser.me/api/");
        const user = response.results[0];

        let codigo = uuid().slice(0, 8);
        let roommate = {
            id: codigo,
            nombre: `${user.name.first} ${user.name.last}`,
            debe: 0,
            recibe: 0
        }
        fs.readFileSync(`${__dirname}/data/roommates.json`, "utf8", (error, contenido) => {
            contenido = JSON.parse(contenido);
            contenido.push(roommate);
            contenido = JSON.stringify(contenido, null, 4);

            fs.writeFile(rutaArchivo, contenido, 'utf8');
        })
    }catch(error) {
        return error;
    }
};

module.exports = { getUsers };

