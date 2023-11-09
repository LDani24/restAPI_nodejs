const { Router } = require("express")
const router = Router()

//Routes
router.get('/',(req,res) =>{
    const data = {
        "name":"Daniel",
        "website":"danielweb"
    }
    res.json(data)
})


module.exports = router
