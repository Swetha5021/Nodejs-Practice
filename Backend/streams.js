const {createReadStream} = require('fs')

//creating a stream to read larger files
const stream = createReadStream('./content/big.txt')

stream.on('data',(result)=>{
    console.log(result)
})

stream.on('error', (err)=> console.log(err))
