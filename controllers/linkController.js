const Link = require('../models/Link')


const redirect = async (req, res) => {
  let tittle = req.params.tittle

  try {
    let doc = await Link.findOne({ tittle })
    console.log(doc)
    if (doc) {
      res.redirect(doc.url)
    } else {
      res.send("nenhum link encontrado")
    }

  } catch (error) {
    res.send(error)
  }
}

const addLink = async (req, res) => {

  let link = new Link(req.body)

  try {
    let doc = await link.save()
    res.redirect('/')
  } catch (error) {
    res.render('index', { error, body: req.body })
  }
}

const allLinks = async (req, res) => {
  try {
    let links = await Link.find({})
    res.render('all', {links} );
  } catch (error) {
    res.send(error)
  }
}

const deleteLink = async (req, res) =>{
  let id = req.params.id
  if(!id){
    id = req.body.id
  }
  try {
    // Link.deleteOne({_id:id}) OUTRA MANEIRA
    await Link.findByIdAndDelete(id)
    res.redirect('/')
  } catch (error) {
    res.status(404).send(error)
  }
}



module.exports = { redirect, addLink, allLinks, deleteLink }