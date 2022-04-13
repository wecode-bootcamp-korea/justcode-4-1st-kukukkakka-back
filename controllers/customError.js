// // const { Error } = require('./userController')

// class userInputError extends Error {
//   constructor(key) {
//     super(key);
//     console.log('여기까지 오지도 못함')
//     const ErrorMapping = {
//       email: {
//         message: "KEY ERROR : email",
//         statusCode: 400,
//       },
//       password: {
//         message: "KEY ERROR : password",
//         statusCode: 400,
//       },
//       username: {
//         message: "KEY ERROR : username",
//         statusCode: 400,
//       },
//       genderId: {
//         message: "KEY ERROR : genderId",
//         statusCode: 400,
//       },
//       policyAgreed: {
//         message: "KEY ERROR : policyAgreed",
//         statusCode: 400,
//       },
//     };
//     userInputError.statusCode = ErrorMapping[key].statusCode;
//     userInputError.message = ErrorMapping[key].message;
//     throw userInputError;
//   }
// }
// module.exports = { userInputError };
