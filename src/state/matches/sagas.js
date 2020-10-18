import { put, all } from "redux-saga/effects";
import { getMatches, populateMatches } from "./actions";

export function* fetchMatches() {
  const matches = yield getMatches();
  yield put(populateMatches(matches.data));
}

export default function* matchesSaga() {
  yield all([fetchMatches()]);
}
