const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const connectDatabase = require("./config/database");
const authRoute = require("./routes/auth");
const imageRoute = require("./routes/image");
const userRoute = require("./routes/user");
const projectRoute = require("./routes/project");
const postRoute = require("./routes/post");
const careerRoute = require("./routes/career");
const emailRoute = require("./routes/email");
const differentRoute = require("./routes/different");
const equipmentRoute = require("./routes/equipment");
const serviceRoute = require("./routes/service");
const logoRoute = require("./routes/logo");
const clientRoute = require("./routes/client");
const employeeRoute = require("./routes/employee");
const leaderRoute = require("./routes/leader");
const quoteRoute = require("./routes/quote");
const logoClientRoute = require("./routes/logoClient");
const historyRoute = require("./routes/history");

const app = express();

dotenv.config();

// CONNECT DB
connectDatabase();

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

// ROUTES
app.use("/v1/auth", authRoute);
app.use("/v1/image", imageRoute);
app.use("/v1/user", userRoute);
app.use("/v1/project", projectRoute);
app.use("/v1/post", postRoute);
app.use("/v1/career", careerRoute);
app.use("/v1/email", emailRoute);
app.use("/v1/different", differentRoute);
app.use("/v1/equipment", equipmentRoute);
app.use("/v1/service", serviceRoute);
app.use("/v1/logo", logoRoute);
app.use("/v1/client", clientRoute);
app.use("/v1/employee", employeeRoute);
app.use("/v1/leader", leaderRoute);
app.use("/v1/logoClient", logoClientRoute);
app.use("/v1/quote", quoteRoute);
app.use("/v1/history", historyRoute);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("server running on:", `http://localhost:${port}`);
});
