import Nullstack from "nullstack";

export default class ServerClass extends Nullstack {
  static async serverFunction(request) {
    const { session } = request;
    return session.user;
  }
}
