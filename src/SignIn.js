const admin = "admin@mobiera.com";
const passadmin = "Admin1234";

function Validate(email, password) {
  return new Promise(function (resolve, reject) {
    if (email === admin && password === passadmin) {
      resolve(true);
    } else {
      reject(false);
    }
  });
}

export default {
  Validate,
};
