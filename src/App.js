import React from "react";
import {View,  ScrollView} from "react-native";
import SampleComponent from "./pages/SampleComponent";
import Position from "./pages/Position";
import FlexBox from "./pages/FlexBox";
import StylingComponent from "./pages/StylingComponent";

const App = () => {
  return (
    <View>
      <ScrollView>
        <SampleComponent />
        <StylingComponent />
        <FlexBox />
        <Position />
      </ScrollView>
    </View>
  );
};

export default App;