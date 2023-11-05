import { dict } from "../utils/dict";
const { achievements } = dict;

class User {
  #name;
  #password;
  #achievements;
  constructor(name, password) {
    this.#name = name;
    this.#password = password;
    this.#achievements = achievements;
  }
  getUser() {
    return {
      name: this.#name,
      password: this.#password,
      achievements: this.#achievements,
    };
  }
}

export default User;
