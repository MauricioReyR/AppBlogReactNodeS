import { Sequelize } from "sequelize";

//hacer una variable para inizializ<E SQUEALIZZE
//const db = new Sequelize('root','',{
//    host: 'localhost',
//    dialect: 'mssql'
//})
// Option 1: Passing parameters separately
const db = new Sequelize('inventariocb', 'root', 'admin', {
  host: 'localhost',
  dialect: 'mysql'
});

export default db
