const express = require('express')
require('./db/mongoose')

const studentRouter = require('./routers/student')
;

const app = express()
const port = process.env.PORT || 3000
app.use(express.json())
app.use(studentRouter)

app.listen(port, ()=>{
    console.log('server is up on port '+ port)
})