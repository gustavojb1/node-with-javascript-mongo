const express = require('express')
const router = express.Router()

const Link = require('../models/Link')


//PESSOAS(PEOPLE)

// const personSchema = new mongoose.Schema({
//   name:String,
//   age: Number
// })

// const Person = mongoose.model('Person', personSchema)
// let person = new Person({name:"José", age:23})
// person.save().then(doc=>{console.log(doc)})


// SALVAR UM DOCUMENT(DADO) NO BANCO -- SALVOU EM LINKS POIS O MONGOOSE PRURALIZA O NOME DO MODEL
// let link = new Link({
//   tittle : "twitter",
//   description: "link para o twitter",
//   url: "https://twitter.com/progrbr"
// })

// link.save().then(doc=>{
//   console.log(doc)
// }).catch(err=>{console.log(err)})

router.get('/:tittle', async (req, res) => {

  //PESQUISAR NO BANCO
  let tittle = req.params.tittle

  try {
    let doc = await Link.findOne({ tittle })
    console.log(doc)
    res.redirect(doc.url)

  } catch (error) {
    res.send(error)
  }

})


router.get('/', (req, res) => res.send('Hello World my collegue'))

module.exports = router