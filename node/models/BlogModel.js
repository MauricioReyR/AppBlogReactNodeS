//se importa la conexion a la Bd
import db from "../database/db.js";
//importamos sequealize
import { DataTypes } from "sequelize";

//se establece la conexion
const blogModel = db.define('blog',{
    title: {type: DataTypes.STRING},
    content: {type: DataTypes.STRING},
})

export default blogModel