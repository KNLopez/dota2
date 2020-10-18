import MatchActions from "./constants";
import api from "../../api/api";

export const getMatches = () => {
  return api.get("/proMatches");
};

export const populateMatches = (payload) => {
  return { type: MatchActions.POPULATE_LIST, payload };
};
