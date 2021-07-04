let users = "https://randomuser.me/api/?results=100";

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
