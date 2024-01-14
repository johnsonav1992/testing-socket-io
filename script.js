const socket = io('http://localhost:4000')

const button = document.querySelector('button')
const body = document.querySelector('body')

button.addEventListener('click', () => {
    console.log('hello')
    socket.emit('message', 'hello')
})

const newMsg = document.createElement('div')

socket.on('sendback', msg => body.append(newMsg.innerHTML = msg ))
