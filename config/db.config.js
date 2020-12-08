const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/serverDB', { useNewUrlParser: true }, { useUnifiedTopology: true })
    .then(() => {
        console.log('DB connected')
    })
    .catch((err) => {
        console.log('Error: ', err)
})