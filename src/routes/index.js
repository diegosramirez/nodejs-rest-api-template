const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
    console.log(req.headers)
    res.send('Hello World')
})

module.exports = router