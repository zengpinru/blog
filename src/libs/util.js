/**
 * 格式化时间
 * @param {String} myTime '2019-09-06T14:52:03.716Z'
 */
export const formatDate = (myTime) => {
  // 比如需要这样的格式 yyyy-MM-dd hh:mm:ss
  let date = new Date(myTime)
  let Y = date.getFullYear() + '-'
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate())
  let str = (Y + M + D)
  return str
}
