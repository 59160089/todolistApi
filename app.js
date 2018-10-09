
const express = require('express');
const bodyparser = require ('body-parser')
const app = express();
const port = 3001;

app.use(bodyparser.json())


app.listen(port, () => {
    console.log("app listening on port " + port)
})
// / = root url

app.get('/', (req, res) => {
    res.send("Hello World1");
})

//todo
//get = get json todolist
//post = insert todo to list
var todolist = [
    {
        id: 1,
        text: "Do homework"}
        ,{
        id: 2,
        text: "Play computer game"
    }
]

var idcounter = todolist.length
app.get('/todo', (req, res) => {
res.json(todolist);
})

app.post('/todo',(req,res) => {
   idcounter++
   todolist.push({
       id:idcounter,
       text:req.body.text
   })
   res.sendStatus(200)
})