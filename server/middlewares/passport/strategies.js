const { Strategy } = require("passport-strategy");

// Strategy get options{email, password} needed to authenticate user
// Strategy has to have 'authenticate' function
class GraphqlStrategy extends Strategy {
  constructor(verify) {
    super();

    if (!verify) {
      throw new Error("Graphql strategy reuires a verify callback");
    }

    this.verify = verify;
    this.name = "graphql";
  }

  authenticate(_, options) {
    const done = () => {};
    this.verify(options, done);
  }
}

module.exports = GraphqlStrategy;
