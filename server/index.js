/*const http = require('http');

const host = 'localhost';
const port = 8000;

const requireListener = function (req, res) {
    res.writeHead(200);
    res.end('My first server!');
}

const server = http.createServer(requireListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`); 
})*/

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 8000;

app.use(bodyParser.json());

let users = []
let counter = 1

app.get('/users',(req, res) => {
    res.json(users);
})

app.post('/user',(req, res) => {
    let user = req.body;
    user.id = counter
    counter += 1
    users.push(user);
    res.json({
        message: 'Create new user successfully',
        user: user
    });
})

app.put('/user/:id',(req, res) => {
    let id = req.params.id;
    let updateUser = req.body;
    
    let selectedIndex = users.findIndex(user => user.id == id)

    if (updateUser.firstname) {
        users[selectedIndex].firstname = updateUser.firstname
    }
    if (updateUser.lastname) {
        users[selectedIndex].lastname = updateUser.lastname
    }
    
    res.json({
        message: 'Update user successfully',
        data: {
            user: updateUser,
            indexUpdated: selectedIndex
        }
    })
    
})

app.delete('/user/:id',(req, res) => {
    let id = req.params.id;
    let selectedIndex = users.findIndex(user => user.id == id)

    users.splice(selectedIndex, 1)

    res.json({
        message: 'Delete user successfully',
        indexDeleted: selectedIndex
    })
})

app.listen(port, () => {
    console.log('Http Server is running on port' + port)
});