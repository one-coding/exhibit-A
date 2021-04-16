const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bcrypt = require("bcrypt");
const User = require("./models/user");
const { sequelize } = require("./models");
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
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/visitor/:id", async (req, res, next) => {
  try {
    const hash = await bcrypt.hash(req.body.password, 12);
    const newUser = await User.create({
      name: req.body.name,
      password: hash,
      content: req.body.content,
    });
    res.status(201).json(newUser);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
});

app.listen("3080", () => {
  console.log("3080번 포트에서 대기 중");
});
