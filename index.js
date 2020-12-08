const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/serverDB', { useNewUrlParser: true }, { useUnifiedTopology: true })
    .then(() => {
        console.log('DB connected')
    })
    .catch((err) => {
        console.log('Error: ', err)
})

let friendSchema = new mongoose.Schema({
    name: String,
    age: Number,
    country: String  
})

let Friend = mongoose.model('friend', friendSchema)

Friend.create({
    name: 'Blaz',
    age: 31,
    country: 'Croatia',
    title: 'sir'                  // this doesnt get added because 'title' doesnt exists
}).then(() => {
    console.log('Data added!')
}).catch((err) => {
    console.log('Error: ', err)
})

Friend.insertMany([{name: 'Fejzo', age: 32, country: 'Slovenia'}, {name: 'Pamz', age: 12, country: 'Serbia'}, {name: 'Tin', age: 56, country: 'Kosovo'}]).then((response) => {
    console.log('my res: ', response)
}).catch((err) => {
    console.log('my err: ',err)
})

Friend.updateOne({name: 'Blaz'}, { $set: {age:100} } )
.then((response) => {
    console.log('my res: ', response)
}).catch((err) => {
    console.log('my err: ',err)
})

Friend.findByIdAndUpdate('5fcfa88880c477353404690b', { $set: { name:'Habo' } } )
.then((response) => {
    console.log('old data is: ', response)
}).catch((err) => {
    console.log('my err: ',err)
})


