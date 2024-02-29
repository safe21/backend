const express = require('express');
const admin = require("./admin");
const app = express();
const port = 3000;
app.use(express.json()); // For parsing JSON request bodies

// backend
app.use('api/', admin);
//////////


app.get('', (req, res)=>{
  res.redirect("http://localhost:4200/login/");
  res.send("HI");
})
app.post('/api/login',async (req, res) => {
  // Handle POST request here
   // Print the POST request body to console
  res.redirect('http://localhost:4543/dashboard/')
  // console.log('redirect')
  // console.log(req.body);

});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});