const http = require('http')
const url = require('url')
const fs = require('fs')
const port = 1337

http.createServer((req, res) => {
	const path = url.parse(req.url).pathname

	res.writeHead(200,{
		'content-type': 'text/html'
	})

	if(path === '/'){
		getHTMLResponse('./home.html', res)
	} else if(path === '/about'){
		getHTMLResponse('./about.html', res)
	}	
}).listen(port);

function getHTMLResponse(path, res) { 
	fs.readFile(path,(err, data) => {
		if(err){
			console.log(err)
			return
		}
		res.write(data)
		res.end()
	})
}

console.log(`Server running at http://localhost:${port}`)