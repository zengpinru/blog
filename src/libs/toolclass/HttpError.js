class HttpError extends Error {
  /**
   * @param {String} args.message 错误信息
   * @param {String} args.code 错误状态码
   */
  constructor (args) {
    super(args.message)
    this.name = 'HttpError'
    this.code = args.code
  }
}

export default HttpError
