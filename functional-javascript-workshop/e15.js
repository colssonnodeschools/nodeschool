function loadUsers(userIds, load, done) {
  let n = 0;
  const users = {};
  for (let i = 0; i < userIds.length; i++) {
    load(
      userIds[i],
      (user) => {
        users[i] = user;
        n += 1;
        if (n === userIds.length) {
          done(userIds.map(ui => users[ui]));
        }
      }
    );
  }
  return users;
}

module.exports = loadUsers
