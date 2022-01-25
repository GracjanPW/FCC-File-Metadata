var express = require('express');
var cors = require('cors');
require('dotenv').config()
const bodyPraser = require('body-parser')
const fileUpload = require('express-fileupload');

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));
app.use(bodyPraser.urlencoded({extended:true}))
app.use(bodyPraser.json())
app.use(fileUpload({
  createParentPath:true
}))

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', (req,res)=>{
  const {name,size,mimetype} = req.files.upfile
  res.json({name,type:mimetypes,ize})
})



const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
