const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const router = require("./routes/todoRoutes");
const taskRouter = require("./routes/todoRoutes");

const app = express();
app.use(express.json());
app.use("/blogList", taskRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});