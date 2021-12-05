import React, { useEffect, useState } from "react";
import {View,  ScrollView} from "react-native";
import SampleComponent from "./pages/SampleComponent";
import Position from "./pages/Position";
import FlexBox from "./pages/FlexBox";
import StylingComponent from "./pages/StylingComponent";

const App = () => {
  const [isShow, SetIsShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      SetIsShow(false);
    }, 6000);
  }, [])
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent /> */}
        {/* <StylingComponent /> */}
        {isShow && <FlexBox />}
        {/* <Position /> */}
      </ScrollView>
    </View>
  );
};

export default App;