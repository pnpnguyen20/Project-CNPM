import { View, Text, Image } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <Text>Home homehom home home ashdsad ds SafeAreaViewdasd sa asd</Text>
      <Image
        style={{ height: 300 }}
        source={{
          uri: "https://www.thecoth.com/wp-content/uploads/2021/07/lolicon-la-gi-1.jpg",
        }}
      />
    </View>
  );
};

export default Home;
