function getWelcomeTemplate(user) {
  return `
	    <html>
	        <body>
	            <h1>${user.name}님 가입을 환영합니다.</h1>
	            <hr />
	            <div>이름: ${user.name}</div>
	            <div>나이: ${user.age}</div>
	            <div>학교: ${user.school}</div>
	            <div>가입일: ${user.createdAt}</div>
	        </body>
	    </html>
	`;
}

const myuser = {
  name: "영희",
  age: 12,
  school: "다람쥐초등학교",
  createdAt: "2020-01-02"
}

const result = getWelcomeTemplate(myuser);
console.log(result);