// importar el modelo
import blogModel from "../models/BlogModel.js";

//** Definicion de los metodos del crud **/

//Mostrar toos los registros

export const getAllB = async (req,res)=>{
    try {
        const blogs =await blogModel.findAll()
        res.json(blogs)
    } catch (error) {
        res.json({message: error.message})
    }
}
//Mostrar 1 registro
export const getBlog = async (req,res)=>{
    try {
        const blog = BlogModel.findAll({
            where:{
                id:req.params.id
            }
        })
        res.json(blog)
    } catch (error) {
        res.json({message: error.message})
    }
}
//crear 1 registro

export const createBlog = async (req,res)=>{
try {
    await BlogModel.create(req.body)
    res.json({
        "message":"¡Registro creado exitosamente"
    })
} catch (error) {
    res.json({message: error.message})
 }
}
//Actualizar 1 registro
export const updateBlog = async (req,res) => {
    try {
       await blogModel.update(req.body,{
        where:{id: req.params.id}
       })
       res.json({
        "message":"¡Registro Actualizado exitosamente"
    })
    } catch (error) {
        res.json({message: error.message}) 
    }
}
//eliminar 1 registro

export const deleteBlog = async (req,res) =>{
    try {
        BlogModel.destroy({
            where:{id:req.params.id}
        })
        res.json({
            "message":"¡Registro Eliminado exitosamente"
        })
    } catch (error) {
        res.json({message: error.message}) 
    }
}