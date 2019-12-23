let baseUrl = "https://still-river-42657.herokuapp.com";

export const environment = {
  production: true,
  fizzURL: baseUrl + "/api/fizzBuzz",
  loginURL: baseUrl + "/api/login",
  adminURL: baseUrl + "/api/displayUser",
  deleteURL: baseUrl + "/api/deleteUser",
  createUser: baseUrl + "/api/createUser",
  updateUser: baseUrl + "/api/updateUsername",
  adminURL_SQL: baseUrl + "/api/displayUserSQL", // asp.net
  createUserSQL: baseUrl + "/api/createUserSQL", // asp.net
  updateUserSQL: baseUrl + "/api/updateUserSQL", // asp.net
  deleteUserSQL: baseUrl + "/api/deleteUserSQL", // asp.net

  loginURLASP: "https://localhost:44329/api/login", //asp.net

  adminURL_SQL_Express: baseUrl + "/api/displayUserSQL", //node
  createUserExpress: baseUrl + "/api/createUserSQL", // node
  updateUserExpress: baseUrl + "/api/updateUserSQL", //node
  deleteUserExpress: baseUrl + "/api/deleteUserSQL" //node
};
