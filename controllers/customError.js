//클래스로 만들기
class userInputError extends Error {
  constructor(key) {
    super(key);
    const ErrorMapping = {
      'email': {
        message: "KEY ERROR : email",
        statusCode: 400,
      },
      'password': {
        message: "KEY ERROR : password",
        statusCode: 400,
      },
    }
    this.err.statusCode = this.ErrorMapping.statusCode
    this.err.message = this.ErrorMapping[key].message
  }
}

