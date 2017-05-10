function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(submittedUser => goodUsers.some(goodUser => goodUser === submittedUser));
  };
}

module.exports = checkUsersValid
