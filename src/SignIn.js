/**
 * @constant
 * @type {String}
 * @default
 */
const admin = "admin@mobiera.com";
/**
 * @constant
 * @type {String}
 * @default
 */
const passadmin = "Admin1234";
/**
 * Funcion para validar login como servidor
 * @function Validate
 * @param {String} email Email received
 * @param {String} password Password received
 * @returns {Boolean}
 * @module Validate
 */
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
