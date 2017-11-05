import { Observable } from "rxjs";
import { dispatch } from "redux";

const source =
  Observable.timer(100, 2000)
    .take(3);

module.exports = (store) => {
  source.subscribe(
    (event) => {
      console.log(event)
      store.dispatch({type: "TICK"})
    }
  )
}
