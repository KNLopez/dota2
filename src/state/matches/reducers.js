import MatchActions from "./constants";

export default function matches(state = [], action) {
    switch (action.type) {
        case MatchActions.POPULATE_LIST:
            return [...state, ...action.payload];
        default:
            return state;
    }
}