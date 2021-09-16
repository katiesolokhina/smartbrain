const Clarifai =require('clarifai');


const app = new Clarifai.App({
  apiKey: "92d958e8025d4d749c3e4ee2c5923c59",
});


const handleApiCall = (req,res)=>{
     //changed from face_detect_model or celebrity_model
app.models
      .predict(Clarifai.CELEBRITY_MODEL, req.body.input)
      .then(data =>{
        res.json(data);
      })
      .catch(err=>res.status(400).json('unable to work with api'))
}

const handleImage = (req, res,db) => {
    const { id } = req.body;
    db("users")
      .where("id", "=", id)
      .increment("entries", 1)
      .returning("entries")
      .then((entries) => {
        res.json(entries[0]);
      })
      .catch((err) => res.status(400).json("unable to get entries"));
  }

  module.exports = {
      handleImage,
      handleApiCall
  }