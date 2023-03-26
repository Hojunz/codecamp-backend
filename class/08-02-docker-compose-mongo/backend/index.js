import express from "express";
import { checkValidationPhone, getToken, sendTokenToSMS } from "./phone.js";
import {
  checkValidationEmail,
  getWelcomeTemplate,
  sendWelcomeTemplateToEmail,
} from "./email.js";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";
import cors from "cors";
import mongoose from "mongoose";
import { Board } from "./models/board.model.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));

app.get("/boards", async (req, res) => {
  // boards로 엔드포인트 수정
  //1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
  // const result = [
  //   {
  //     number: 1,
  //     writer: "철수",
  //     title: "제목입니다",
  //     contents: "내용이에요@@@",
  //   },
  //   {
  //     number: 2,
  //     writer: "영희",
  //     title: "제목입니다2",
  //     contents: "내용이에요@@@2",
  //   },
  //   {
  //     number: 3,
  //     writer: "훈이",
  //     title: "제목입니다3",
  //     contents: "내용이에요@@@3",
  //   },
  // ];
  const result = await Board.find();

  res.send(result); // 응답 보내기
});

app.post("/boards", async (req, res) => {
  console.log("asdasd");
  //1.데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기
  const board = new Board({
    writer: req.body.writer,
    title: req.body.title,
    contents: req.body.contents,
  });

  await board.save();
  //2.저장 결과 응답 주기
  res.send("잘 전달 됐어용");
});

app.post("/tokens/phone", (req, res) => {
  // req.body 객체의 myphone의 값을 myphone이라는 변수에 담기.
  const myphone = req.body.myphone;

  // 1. 휴대폰번호 자릿수 맞는지 확인하기
  const isValid = checkValidationPhone(myphone);
  if (isValid) {
    // 2. 핸드폰 토큰 6자리 만들기
    const mytoken = getToken();

    // 3. 핸드폰번호에 토큰 전송하기
    sendTokenToSMS(myphone, mytoken);
    res.send("인증완료!!!");
  }
});

app.post("/users", (req, res) => {
  const user = req.body.myUser;
  // 1. 이메일이 정상인지 확인(1-존재여부, 2-"@"포함여부)
  const isValid = checkValidationEmail(user.email);
  if (isValid) {
    // 2. 가입환영 템플릿 만들기
    const template = getWelcomeTemplate(user);

    // 3. 이메일에 가입환영 템플릿 전송하기
    sendWelcomeTemplateToEmail(user.email, template);
    res.send("가입완료!!!");
  }
});

// 몽고DB 접속!!
mongoose.connect("mongodb://my-database:27017/mydocker03");

//Backend API 서버 오픈!!
app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`);
}); // 3000번 포트에서 실행
