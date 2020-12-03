const router = require('express').Router()
import initializeDatabase from '../src/controller'
require('dotenv').config()

const start = async () => {
  const controller = await initializeDatabase()

  //Get all 
  //Home
  router.get('/', async (req, res) => {
    const homelist =await controller.getHomeList();
    // console.log(homelist.slice(-3).filter((a, b) => b.title > a.title))

        res.send(
            {
                success: true,
                homelist
            } 
            //console.log(string)
        )} );
 

  //Home
  router.post('/', async (req, res) => {
    const { title, description } = req.body;
    const image = req.file && req.file.filename;

    // console.log(title, description, image)
    // console.log(req.file)
    // console.log(req.file.filename)

   
      const home = await controller.createHome(title,description);
      //console.log(home)
      res.send(
        {
          success: true,
          home
        });
  })

  router.delete('/:id',async (req, res)=>{

    try {
      const { id } = req.params
      const home = await controller.deleteHome(id)
      res.send(
          {
          success: true,
          home
          });
      } catch (error) {
      console.log(error)
      res.status(500).send(error)
      }
  })

  router.put('/edit/:id',async (req, res)=>{
    try {
      const { id } = req.params;
      const { title, description } = req.body;
      // const image = req.file && req.file.filename;

      console.log(id, title, description)              
    const home = await controller.updateHome(id, title, description)
    res.send(
      {
        success: true,
        home
      });
      
  } catch (error) {
    res.status(500).send('Server Error')
  }
  
  
  })

   

}
start()

module.exports = router