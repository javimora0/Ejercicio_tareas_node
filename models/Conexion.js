const mysql = require('mysql2');

class Conexion {
    
    constructor(options) {
        this.config = {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            connectionLimit: process.env.DB_MAXCONNECTIONS, //Por defecto son 10.
            port: process.env.DB_PORT
        };
        this.pool = mysql.createPool(this.config);
    }
    
    query = (sql, values) => {
        //Devolver una promesa
        return new Promise((resolve, reject) => {
            this.pool.query(sql, values, (err, rows) => {
                if (err) {
                    reject(err)
                } else {
                    // console.log('Llego aquí');
                    if (rows.length === 0) {
                        reject(err);
                    }
                    resolve(rows)
                }
            })
        })
    }
    
    insertarTarea = async(descripcion, duracion, dificultad, realizada) => {
        let resultado = 0;
        try {
            resultado = await this.query('INSERT INTO tareas VALUES (?, ?, ?, ?, ?)', [null, duracion, dificultad, realizada, descripcion]);
        } catch (error) {
            throw error;
        }
        return resultado;
    }

    getTareas = async () => {
        let resultado = []
        try {
            resultado = await this.query('SELECT * FROM tareas')
        } catch (error) {
            throw error;
        }
        return resultado;
    }

    deleteTarea = async (id) => {
        let resultado = 0
        try {
            resultado = await this.query('DELETE FROM tareas WHERE id = ?', [id])
        } catch (error) {
            throw error;
        }
        return resultado;
    }

    updateTarea = async (id, descripcion, duracion, dificultad, realizada) => { 
        let resultado = 0
        try {
            resultado = await this.query(`UPDATE tareas SET descripcion = ?, duracion = ?, dificultad = ?, realizada = ? WHERE id = ?`, 
            [descripcion, duracion, dificultad, realizada, id]);
        } catch (error) {
            throw error;
        }
        return resultado;
    }

}

module.exports = Conexion;
