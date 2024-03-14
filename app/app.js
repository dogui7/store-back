const express = require("express");
const app = express();

const indexRouter = require("./routers/index");

app.use("/", indexRouter);

const PORT = process.env.PORT || 3000
app.listen(3000, () => { console.log(`Server running on http://localhost:${PORT}`)});