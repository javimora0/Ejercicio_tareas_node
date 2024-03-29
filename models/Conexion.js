const mysql = require('mysql2');

class Conexion {
    constructor(options) {
        this.connection = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            port: process.env.DB_PORT
        });
    }

    conectar = () => {
        this.connection.connect( (err) => {
            if (err) {
                console.error('Error de conexion: ' + err.stack);
                return;
            }
            console.log('Conectado con el identificador ' + this.connection.threadId);
        });
    }

    desconectar = () => {
        this.connection.end( (err) => {
            if (err) {
                console.error('Error de conexion: ' + err.stack);
                return;
            }
        console.log('Desconectado con éxito');
        });
    }
    
    query = ( sql, values ) => {
        //Devolver una promesa
        return new Promise(( resolve, reject ) => {
            this.connection.query(sql, values, ( err, rows) => {
                if ( err ) {
                    reject( err )
                } else {
                    // console.log('Llego aquí');
                    if (rows.length === 0) {
                        reject(err);
                    }
                    resolve( rows )
                }
                })
            })
        }
    
    insertarTarea = async(descripcion, duracion, dificultad, realizada) => {
        let resultado = 0;
        this.conectar();
        try {
            resultado = await this.query('INSERT INTO tareas VALUES (?, ?, ?, ?, ?)', [null, duracion, dificultad, realizada, descripcion]);
            this.desconectar();
        } catch (error) {
            this.desconectar();
            throw error;
        }
        return resultado;
    }

    getTareas = async () => {
        let resultado = []
        this.conectar();
        try {
            resultado = await this.query('SELECT * FROM tareas')
            this.desconectar();
        } catch (error) {
            this.desconectar();
            throw error;
        }
        return resultado;
    }

    deleteTarea = async (id) => {
        let resultado = 0
        this.conectar();
        try {
            resultado = await this.query('DELETE FROM tareas WHERE id = ?', [id])
            this.desconectar();            
        } catch (error) {
            this.desconectar();
            throw error;
        }
        return resultado;
    }

    updateTarea = async (id, descripcion, duracion, dificultad, realizada) => { 
        let resultado = 0
        this.conectar();
        try {
            resultado = await this.query(`UPDATE tareas SET descripcion = ?, duracion = ?, dificultad = ?, realizada = ? WHERE id = ?`, 
            [descripcion, duracion, dificultad, realizada, id]);
        this.desconectar(); 
        } catch (error) {
            this.desconectar();
            throw error;
        }
        return resultado;
    }

}

module.exports = Conexion;
