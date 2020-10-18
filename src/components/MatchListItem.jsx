import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/MatchListItemStyles";

const MatchListItem = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() =>
        navigation.navigate("MatchDetails", { matchId: item.match_id })
      }
    >
      <View>
        <Text style={styles.headerText}>{item.league_name}</Text>
        <View style={styles.teamContainer}>
          <Text style={styles.radiantText}>
            {item.radiant_name ? item.radiant_name : item.radiant_team_id}
          </Text>
          <Text style={styles.vs}>vs</Text>
          <Text style={styles.direText}>
            {item.dire_name ? item.dire_name : item.dire_team_id}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MatchListItem;
