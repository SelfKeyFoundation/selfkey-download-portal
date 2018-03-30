const 
	server = require('pushstate-server')
	port = 8088

server.start({
	port: port,
	directory: './',
	file: '/index.html'
})

console.log('Login with SelfKey Example Client Pages Running on Port: ' + port)
