
const redirect = async (req,res)=>{
  let tittle = req.params.tittle

  try {
    let doc = await Link.findOne({ tittle })
    console.log(doc)
    res.redirect(doc.url)

  } catch (error) {
    res.send(error)
  }

}