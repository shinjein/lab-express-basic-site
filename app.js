const express = require('express');
//create server callped app
//app handeles requests and responses

const app = express();

//make everything inside public folder available 
app.use(express.static('public'));
//routes 
app.get('/home', (request, response) => {
    response.sendFile(__dirname + '/views/home.html');
});

app.get('/about', (request, response) => {
    response.sendFile(__dirname + '/views/about.html');

});

app.get('/works', (request, response) => {
    response.sendFile(__dirname + '/views/works.html');
});

app.listen(8080, () => {
    console.log("LISTENING ON PORT 8080");
});