console.log('Hellow World!');

function getToken(aaa) {
  if(aaa === undefined) {
    console.log("에러 발생!")
    return
  } else if(aaa <= 0) {
    console.log("에러 발생! 갯수가 너무 적습니다.")
    return
  } else if(aaa > 10) {
    console.log("에러 발생! 갯수가 너무 많습니다.")
    return
  }

  const result = String(Math.floor(Math.random() * 10 ** aaa)).padStart(aaa, '0')
  console.log(result);
}

getToken(11)
