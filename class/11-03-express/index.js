import express from "express";

const app = express()

//상품 구매하기
app.post('/products/buy', (req, res) => {
  res.send("상품 구매 완료!!") 
})


//상품 환불하기
app.post('/products/refund', (req, res) => {
  res.send("상품 환불 완료!!")
})

app.listen(3000)