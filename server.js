const express = require('express');

const app = express();

//route to access 
app.get(`/`, (req, res) => {
    res.send('hello node ApI')
})

app.listen(3000, () => {
    console.log(`Node API is running in port 3000`)
})
