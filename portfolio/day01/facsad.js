export function customRegistrationNumber(number) {
  const num = String(number).split('-')
  console.log(num);
  if(!number.includes('-')) {
    console.log("에러발생! 형식이 올바르지 않습니다!");
    return
  }
  if(num[0].length !== 6 && num[1].length !== 7) {
    console.log("에러발생! 개수를 제대로 입력하세요!");
    return
  }
  console.log(num[0] + "-" + num[0][0] + '*'*6)
}