export function getToday() {
  const date = new Date()
  const yyyy = date.getFullYear()
  const mm = date.getMonth() + 1
  const dd = date.getDate()
  const hour = date.getHours();            // 시를 반환합니다.
  const min = date.getMinutes();          // 분을 반환합니다.
  const sec = date.getSeconds();          // 초를 반환합니다.

  return `오늘은 ${yyyy}년 ${mm}월 ${dd}일 ${hour}:${min}:${sec}입니다.`
}

console.log(getToday())