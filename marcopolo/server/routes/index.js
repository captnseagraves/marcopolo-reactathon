const express = require('express');
const router = express.Router();
const knex = require('../knex')

router.get('/' , (req, res, next)=>{
  knex('pools')
  .select('*')
  .then(result => {res.send(result)})
});

router.get('/:id', (req, res, next)=>{
  let id = req.params.id;

});

router.post('$1', (req, res, next)=>{
  let body = req.body;
});

router.patch('$1/:id', (req,res,next)=>{
  let id = req.params.id;
  let body = req.body;
});

router.delete('$1/:id', (req,res,next)=>{
  let id = req.params.id;

});
module.exports = router;
