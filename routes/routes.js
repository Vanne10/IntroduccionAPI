// Cargue la conexión del grupo MySQL
const pool = require('../data/config');

// Ruta de la app
const router = app => {
    // Mostrar mensaje de bienvenida de root
    app.get('/', (request, response) => {
        response.send({
            message: 'Bienvenidos a Node.js Express REST API'
        });
    });

}