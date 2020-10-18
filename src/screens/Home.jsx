import React from "react";
import { View, FlatList } from "react-native";
import { useSelector } from "react-redux";
import MatchListItem from "../components/MatchListItem";
import styles from "../styles/MatchListStyles";

const Home = ({ navigation }) => {
  const matches = useSelector((state) => state.matchesReducer);

  return (
    <View>
      <FlatList
        style={styles.list}
        navigation={navigation}
        data={matches}
        renderItem={({ item }) => (
          <MatchListItem item={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.match_id.toString()}
      />
    </View>
  );
};

export default Home;
