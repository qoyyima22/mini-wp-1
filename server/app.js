require('dotenv').config({path:'./.env'})
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const cors = require('cors')
const routes = require('./routes/index')

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_DB, {useNewUrlParser: true})
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected')
});


app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/',routes)


app.listen(PORT, function(){
    console.log(`listening on ${PORT}`)
})
