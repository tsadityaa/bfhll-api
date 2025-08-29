const app = require("./index");

const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("API is alive , do the post request https://bfhll-api.onrender.com/bfhl ");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

