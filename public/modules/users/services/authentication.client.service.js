class Authentication {
  constructor() {
    this.user = window.user;

    return {
      user: this.user
    }
  }
};

export default Authentication;