const myDate = new Date()


// Date.parse('2024/12/10 10:05:15.06')
// new Date(timestamp which has given by utc)
// parse method returns timestamp


// Date.UTC(2024, 11, 10)
// new Date(timestamp which has given by utc)
// it basically return timestamp according to utc by locale
// year is required and extra things in utc is optional


// myDate.valueof() === myDate.getTime() --true