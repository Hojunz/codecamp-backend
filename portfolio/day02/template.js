function getSignIn({ name, email, num, phone, site }) {
  const num2 = num.split('-')[1][0] + '*******'
  return `
      <html>
          <body>
              <h1>${name}님 가입을 환영합니다.</h1>
              <hr/>
              <div>이메일: ${email}</div>
              <div>주민번호: ${num2}</div>
              <div>휴대폰 번호: ${phone}</div>
              <div>내가 좋아하는 사이트: ${site}</div>
          </body>
      </html>
  `;
}

const name = "정호준"
const email = "ghwns@ghwns"
const num = "940924-1000000"
const phone = "010-0000-0000"
const site = "www.naver.com"

const result = getSignIn({name, email, num, phone, site})

console.log(result);