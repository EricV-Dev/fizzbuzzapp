// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // fizzURL: "http://localhost:3000/api/fizzBuzz", node
  fizzURL: "https://localhost:44329/api/fizzbuzz", // asp.net
  loginURL: "http://localhost:3000/api/login",
  loginURLASP: "https://localhost:44329/api/login", //asp.net
  adminURL: "http://localhost:3000/api/displayUser",
  deleteURL: "http://localhost:3000/api/deleteUser",
  createUser: "http://localhost:3000/api/createUser",
  updateUser: "http://localhost:3000/api/updateUsername",
  adminURL_SQL_Express: "http://localhost:3000/api/displayUserSQL", //node
  adminURL_SQL: "https://localhost:44329/api/displayuser", // asp.net
  createUserExpress: "http://localhost:3000/api/createUserSQL", // node
  createUserSQL: "https://localhost:44329/api/createuser", //asp.net
  updateUserExpress: "http://localhost:3000/api/updateUserSQL", //node
  updateUserSQL: "https://localhost:44329/api/updateUser", //asp.net
  deleteUserExpress: "http://localhost:3000/api/deleteUserSQL", //node
  deleteUserSQL: "https://localhost:44329/api/deleteUser" //asp.net
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
