console.log('Hellow World!');

function getToken(aaa) {
  const result = String(Math.floor(Math.random() * 10 ** aaa)).padStart(aaa, '0')
  console.log(result);
}

getToken(3)
