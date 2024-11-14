// const myDate = new Date(1720953788502)

// console.log(myDate.toString());

const user1DOB = '02/04/2000'
const user2DOB = '03-06-1998'
const timeStampDat = new Date(0)

// DD/MM/YYYY not accepted
// MM/DD/YYYY  or YYYY/MM/DD accepted
const user1Date = new Date(user1DOB.split('/').reverse().join('/'))
const user2Date = new Date(user2DOB.split('-').reverse().join('-'))

const user1AgeInMilliseconds = Date.now() - user1Date.getTime()
const user2AgeInMilliseconds = Date.now() - user2Date.getTime()

// console.log(user1AgeInMilliseconds - user2AgeInMilliseconds);
// Math.max(user1AgeInMilliseconds, user2AgeInMilliseconds)




// in case of time with iso format
const user3DOB = '2000-04-02T12:00:00.300'

const user3Date = new Date(user3DOB)

// console.log(user3Date.toUTCString());


// when pass arguments in number or string it will work same for date and time
// const user4DOB = new Date(2000, 11, 11, 4, 30, 15, 400)
// const user4DOB = new Date(2000, 11, 11)
// console.log(user4DOB.toString());


// destructure
const [day, month, year] = user1DOB.split('/')
const user4DOB = new Date(year, month - 1, day)
console.log(user4DOB);