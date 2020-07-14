import store from "../store.js";
import NS from "./NotificationService.js";

const _api = axios.create({
  baseURL: "https://type.fit/api/quotes",
  timeout: 3000,
});

class ValuesService {
  note() {
    NS.basic("this is an Alert!", "ALERT");
  }
  async alert() {
    _api
      .get("")
      .then((res) => {
        let quote = res.data[Math.floor(Math.random() * res.data.length)];

        NS.basic(quote.text, quote.author);
      })
      .catch((err) => console.error(err));
  }
  async toasty() {
    await NS.Toasty();
  }
  async confirm() {
    let res = await NS.Confirm();
    if (res) {
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
