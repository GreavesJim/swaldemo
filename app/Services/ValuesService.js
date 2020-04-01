import store from "../store.js";
import NS from "./NotificationService.js";

class ValuesService {
  async alert() {
    await NS.basic("you cant do that", "Jim Says");
  }
  async toasty() {
    await NS.Toasty();
  }
  async confirm() {
    let res = await NS.Confirm();
    if (res == true) {
      console.log("Successfully Deleted");
    }
  }
  async input() {
    await NS.inputAction();
  }
  async fun() {
    await NS.Nyan();
  }
}

const service = new ValuesService();
export default service;
