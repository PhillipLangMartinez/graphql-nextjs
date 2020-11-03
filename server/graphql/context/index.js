const authenticateUser = ({ email, password }) => {};

exports.buildAuthContext = () => {
  const auth = {
    authenticate: (options) => authenticateUser(options),
  };
  return auth;
};
