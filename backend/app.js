const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { sequelize } = require("./models");

const visitorRouter = require("./routes/visitor");

const app = express();

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("데이터 베이스 연결 됐답니다 ㅋ");
  })
  .catch(err => {
    console.error(err);
  });

app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:3080",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/visitor", visitorRouter);

app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
});

app.listen("3085", () => {
  console.log("3085번 포트에서 대기 중");
});
