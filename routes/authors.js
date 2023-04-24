//definir los endpoints de los autores y los voy as exportar para poder utilizarlos en el enrutador principal
import { Router }  from "express";
import read from '../controllers/authors/read.js'

let router = Router()

//router.post('/',(req,res,next)=> res.status(200).send('autor creado'))
//router.put('/:id',(req,res,next)=> res.status(200).send('autor modificados'))
//router.delete('/:id',(req,res,next)=> res.status(200).send('autor eliminados'))
router.get('/',read)

export default router