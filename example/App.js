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
    StyleSheet
} from 'react-native';


import {CustomSegmentedControl} from './build/dist/'

const App: () => React$Node = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <>
            <StatusBar barStyle="dark-content"/>
            <SafeAreaView >
                <View style={{padding: 15}}>
                    <CustomSegmentedControl
                        segments={["Segment1", "Segment2", "Segment3"]}
                        selected={0}
                        height={30}
                        borderWidth={1}
                        borderColor={"#009dff"}
                        borderRadius={20}
                        selectedSegmentColor={"#009dff"}
                        unselectedSegmentsColor={"#e7e5e5"}
                        selectedTextColor={"#fff"}
                        unselectedTextColor={"#000"}
                        textFontSize={15}
                        onChangeSegment={(index) => setSelectedIndex(index)}
                    />
                    <View style={{marginTop: 15}}>
                        {selectedIndex == 0 ? (
                            <View style={[{backgroundColor: '#f17878', ...styles.box}]}>
                                <Text>Segment {selectedIndex}</Text>
                            </View>
                        ) : selectedIndex == 1 ? (
                            <View style={[{backgroundColor: '#a6f178', ...styles.box}]}>
                              <Text>Segment {selectedIndex}</Text>
                            </View>
                        ) : selectedIndex == 2 ? (
                            <View style={[{backgroundColor: '#5babff', ...styles.box}]}>
                              <Text>Segment {selectedIndex}</Text>
                            </View>
                        ) : null}
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
};


const styles = StyleSheet.create({
    box: {
        width: "100%",
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#9d9d9d',
        height: 300,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default App;
