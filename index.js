const fs = require('fs')


// fs.writeFile('test.txt','Hello, there nodejs file system!', function(err){
// 	if(err){
// 		return console.log(err)
// 	}
// 	console.log('File successfully created!')
// })


fs.readFile('./index.html', (err, data) => {
	if(err) {
		return console.log(err)
	}
	console.log(data.toString())
})