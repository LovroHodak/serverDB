const mongoose = require('mongoose')
require('./config/db.config')

let Friend = require('./models/friend.model')

Friend.create({
    name: 'Blaz',
    age: 31,
    country: 'Spain',
    title: 'sir'                  // this doesnt get added because 'title' doesnt exists
}).then(() => {
    console.log('Data added!')
}).catch((err) => {
    console.log('Error: ', err)
})

Friend.insertMany([{name: 'Fejzo', age: 32, country: 'Slovenia'}, {name: 'Pamz', age: 27, country: 'Spain'}, {name: 'Tin', age: 46, country: 'Slovenia'}]).then((response) => {
    console.log('my res: ', response)
}).catch((err) => {
    console.log('my err: ',err)
})

Friend.updateOne({name: 'Blaz'}, { $set: {age:49} } )
.then((response) => {
    console.log('my res: ', response)
}).catch((err) => {
    console.log('my err: ',err)
})


Friend.findByIdAndUpdate('5fcfb2e704525c2f24bad47a', { $set: { name:'Habo' } } )
.then((response) => {
    console.log('old data is: ', response)
}).catch((err) => {
    console.log('my err: ',err)
})

