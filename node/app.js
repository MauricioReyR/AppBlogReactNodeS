import express  from "express";
import cors from "cors";

//importar la conexiond e la base de datos
import db from "./database/db.js"
//importar las rutas
import blogRoutes from "./routes/routes.js"

const app = express();

//configuracion de cors

app.use(cors() )
app.use(express.json())
app.use('blogs',blogRoutes)

//definir la conexion
try {
    await db.authenticate()
    console.log("Conexion Exitosa a la Base de Datos");
} catch (error) {
    console.log(`No hay Conexion a Base de Datos: ${error}`);
}

//mensaje de prueba 
app.get('/',(req,res) => {
    res.send("hola mundo")
})

app.listen(8000,()=>{
    console.log("Servidor activo en el puerto: http://localhost:8000/");
})