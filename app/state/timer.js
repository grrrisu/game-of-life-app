import { Observable } from "rxjs";
import { dispatch } from "redux";

const source =
  Observable.timer(100, 1000)
    .timeInterval()
    .take(3);

module.exports = (store) => {
  source.subscribe(
    (event) => {
      console.log(event)
      store.dispatch({type: "TICK"})
    }
  )
}
