const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];


  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["All the troubles you have will pass away very quickly",
					 "Don’t just think, act!!",
					 "Go take a rest; you deserve it.",
  ];


  // choose random fortune
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);
  
});

let userThoughts = []

app.post('/api/thoughts', (req, res) => {
  userThoughts.push(req.body.userMsg)
  res.send(req.body.userMsg)
})

app.get('/api/thoughts', (req, res) => {
  let randomIndex = Math.floor(Math.random() * userThoughts.length);
  let randomThought = userThoughts[randomIndex];

  res.status(200).send(randomThought)
})



app.put('/api/thoughts', (req, res) => {
  res.send(req.body.userMsg)
})


app.listen(4000, () => console.log("Server running on 4000"));
