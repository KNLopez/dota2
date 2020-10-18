import { all } from "redux-saga/effects";
import matchSagas from "./matches/sagas";

export default function* matchesSaga() {
  yield all([matchSagas()]);
}
