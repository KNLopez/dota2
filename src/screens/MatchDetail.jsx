import React from "react";
import { View, FlatList, Text } from "react-native";
import { useSelector } from "react-redux";
import MatchListItem from "../components/MatchListItem";
import styles from "../styles/MatchListStyles";

const MatchDetails = ({ route }) => {
  const { matchId } = route.params;
  return <View>{matchId}</View>;
};

export default MatchDetails;
