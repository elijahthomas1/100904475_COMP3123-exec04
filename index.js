let express = require('express');
let app = express();

//http://localhost:8089/hello
app.get("/hello", (req, res) => {
    res.send("<h1>Hello Express JS</h1>");
})


//http://localhost:8089/user?firstName=Pritesh&lastName=Patel
app.get("/user", (req, res) => {
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;
    response = {
        firstName,
        lastName
    }

    res.send(response);
})

app.post("/user/:firstName/:lastName", (req, res) => {
    let firstName = req.params.firstName;
    let lastName = req.params.lastName;

    response = {
        firstName,
        lastName
    }

    res.send(response);
})

let server = app.listen(8089 , () => {
    console.log(server.address());
    let host = server.address().address;
    let port = server.address().port;
    console.log("server running at http://%s:%s", host, port);
})

