let baseUrl = "https://still-river-42657.herokuapp.com";
let baseUrlAsp = "https://fizzbuzzdotnet20200105031554.azurewebsites.net";

export const environment = {
  production: true,
  fizzURL: baseUrl + "/api/fizzBuzz",
  loginURL: baseUrl + "/api/login",
  adminURL: baseUrl + "/api/displayUser",
  deleteURL: baseUrl + "/api/deleteUser",
  createUser: baseUrl + "/api/createUser",
  updateUser: baseUrl + "/api/updateUsername",
  adminURL_SQL: baseUrlAsp + "/api/displayUser", // asp.net
  createUserSQL: baseUrlAsp + "/api/createUser", // asp.net
  updateUserSQL: baseUrlAsp + "/api/updateUser", // asp.net
  deleteUserSQL: baseUrlAsp + "/api/deleteUser", // asp.net

  loginURLASP: baseUrlAsp + "/api/login", //asp.net

  adminURL_SQL_Express: baseUrl + "/api/displayUserSQL", //node
  createUserExpress: baseUrl + "/api/createUserSQL", // node
  updateUserExpress: baseUrl + "/api/updateUserSQL", //node
  deleteUserExpress: baseUrl + "/api/deleteUserSQL" //node
};
