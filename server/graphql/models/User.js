class User {
  constructor(model) {
    this.Model = model;
  }

  signUp(signUpData) {
    if (signUpData.password !== signUpData.passwordConfirmation) {
      throw new Error("Password must be the same as confirmaiton password!");
    }
    return this.Model.create(signUpData);
  }
  signIn(signInData, ctx) {
    const isAuthenticated = ctx.authenticate(signInData);

    if (isAuthenticated) {
    }
    return "Signing In..";
  }

  signOut() {
    return "Signing Out..";
  }
}

module.exports = User;
