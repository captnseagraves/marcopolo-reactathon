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
  knex('pools')
  .select('*')
  .where('id', id)
  .then(result => {res.send(result)})
});

router.post('/', (req, res, next)=>{
  let body = req.body;
  knex('pools')
  .insert(body)
  .returning(['id', 'name', 'description', 'image'])
  .then((result)=> {
    res.send(result)
  })
});

// router.patch('$1/:id', (req,res,next)=>{
//   let id = req.params.id;
//   let body = req.body;
// });

router.delete('/:id', (req,res,next)=>{
  let id = req.params.id;
  knex('pools')
  .del()
  .where('id',id)
  .then(() => {res.send('deleted')})
});
module.exports = router;
