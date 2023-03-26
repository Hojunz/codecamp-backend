function getWelcomeTemplate(name, age, school, createdAt) {
  return `
	    <html>
	        <body>
	            <h1>${name}님 가입을 환영합니다.</h1>
	            <hr />
	            <div>이름: ${name}</div>
	            <div>나이: ${age}</div>
	            <div>학교: ${myschool}</div>
	            <div>가입일: ${createdAt}</div>
	        </body>
	    </html>
	`;
}

const myname = "영희"
const myage = 12
const myschool = "다람쥐초등학교"
const mycreatedAt = "2020-01-02"

const result = getWelcomeTemplate(myname, myage, myschool, mycreatedAt);
console.log(result);