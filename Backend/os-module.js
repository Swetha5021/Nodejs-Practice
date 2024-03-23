const os = require('os')

//about the current user
const user = os.userInfo()
console.log(user);

//return system uptime in sec
console.log(`the system uptime is ${os.uptime()} seconds`);

//about os info
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS);

