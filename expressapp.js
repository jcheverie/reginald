let express = require("express");
let app = express();

app.get("/", (req, res) => {
    res.send("Welcome to simple express");

})
app.get("/user/name", (req, res) => {
    let name = req.params.name;
    res.send("Welcome to express js app " + name);
})

app.listen(9090, ()]=> console.log("Sever running on port 9090");
