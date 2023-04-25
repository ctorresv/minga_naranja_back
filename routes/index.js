/* var express = require('express'); */
import express from "express";
import userRouter from './users.js'
import authorRouter from './authors.js'
import categorieRouter from './catagories.js'
import companieRouter from './companies.js'
import mangaRouter from './mangas.js'
import chapterRouter from './chapters.js'
import carouselRouter from './carousels.js'
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express',
    subtitle: 'endpoits of minga'
  });
});

router.use('/auth',userRouter) //usa todas las rutas definidas en el enrutador de usuario
router.use('/authors',authorRouter)
router.use('/categories',categorieRouter)
router.use('/companies',companieRouter)
router.use('/mangas',mangaRouter)
router.use('/chapters',chapterRouter)
router.use('/carousels',carouselRouter)

export default router;
