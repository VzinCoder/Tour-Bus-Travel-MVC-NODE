const path = require('path')
const express = require('express')
const api = express()


// static files
api.use(express.static(path.join(__dirname,'public')))

//config views
api.set('view engine','ejs')
api.set('views',path.join(__dirname,'view'))


api.get('/',(req,res)=> {
    res.render('index')
})



api.listen(3000, (err) => {
    console.log(err || 'Server On')
})