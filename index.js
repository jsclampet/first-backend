const app = require("express")();
const PORT = 8080;

app.get("/tshirt", (req, res) => {
  res.status(200).send({
    macBetterThanPC: true,
    message: "Suck it Jesse!!!",
  });
});

app.listen(PORT, () => {
  console.log("ITS ALIVE!!!");
});

// https://www.youtube.com/watch?v=-MTSQjw5DrM
// LEFT OFF AT    <<<<     6:50    >>>>
