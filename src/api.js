let users = "https://randomuser.me/api/?results=100";
/**
 * Obtener 100 usuarios de [Randomuser]{@link https://randomuser.me  }
 * @function getUsers
 * @const {String} Api users from Randomuser
 * @returns {Object} Json Data
 * @module getUsers
 */
function getUsers() {
  return new Promise(function (resolve, reject) {
    fetch(users)
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      })
      .catch((e) => {
        reject(e);
      });
  });
}

export default {
  getUsers,
};
