/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
} from 'react-native';


import {CustomSegmentedControl} from './build/dist/'

const App: () => React$Node = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={{ padding: 15 }}>
          <CustomSegmentedControl
              segments={["Segment1", "Segment2", "Segment3"]}
              selected={0}
              height={55}
              borderWidth={1}
              borderColor={"#9d9d9d"}
              borderRadius={15}
              selectedSegmentColor={"#0082ff"}
              unselectedSegmentsColor={"#e7e5e5"}
              selectedTextColor={"#fff"}
              unselectedTextColor={"#000"}
              textFontSize={20}
              onChangeSegment={(index) => setSelectedIndex(index)}
          />
          <View style={{ marginTop: 15 }}>
            {selectedIndex == 0 ? (
                <View
                    style={{
                      width: "100%",
                      backgroundColor: "red",
                      height: 100,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                >
                  <Text>{selectedIndex}</Text>
                </View>
            ) : selectedIndex == 1 ? (
                <View
                    style={{
                      width: "100%",
                      backgroundColor: "blue",
                      height: 100,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                >
                  <Text>{selectedIndex}</Text>
                </View>
            ) : selectedIndex == 2 ? (
                <View
                    style={{
                      width: "100%",
                      backgroundColor: "green",
                      height: 100,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                >
                  <Text>{selectedIndex}</Text>
                </View>
            ) : null}
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
