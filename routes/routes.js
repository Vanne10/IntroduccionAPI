// Cargue la conexion del grupo MsSQL
const pool = require('../data/config');

//Ruta de la app
const router = app => {
    //Mostrar la mensaje de bienvenida de root
    app.get('/',(request,response)=> {
        response.send({
        message: 'Bienvenido a Node.js Express Rest API'
    });

    });
//Mostrar todos los usuario
app.get('/users',(request, response) => {
    pool.query('SELECT * FROM users',(error, result) => {
        if(error) throw error;
        response.send(result.recordset);
    });
});

//Mostrar un solo usaurio por ID
app.get('/users/:id',(request, response) => {
    const id= request.params.id;

    pool.query('SELECT * FROM users WHERE id = ?', id,(error, result) => {
        if(error) throw error;
        response.send(result);
    });
});
 //Agregor un nuevo usuario
 app.post('/users', (request, response) => {
     pool.query('INSERT INTO users SET ?', request.body,(error,result) => {
         if (error) throw error;

         response.status(201).send(`User added with ID: ${result.insertId}`);
     });
 });



 // Actualizar un usuario existente
 app.put('/users/:id', (request, response) =>{
     const id = request.params.id;

     pool.query('UPDATE users SET ? WHERE id = ?', [request.body, id],(error, result) => {
         if(error) throw error;

         response.send('User updated successfully');
     });
 });

 //Eliminar un usuario
  app.delete('/users/:id', (request, response) => {
      const id = request.params.id;

      pool.query('DELETE FROM users WHERE id = ?', id, (error,result) =>{
          if(error) throw error;
          response.send('User deleted.');
      });
  });
    }


//Exportar el router
module.exports = router;