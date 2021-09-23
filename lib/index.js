import * as React from 'react';
import {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';



export const CustomSegmentedControl = ({
       segments,
       selected = 0,
       height = 50,
       borderWidth = 1,
       borderColor = '#9d9d9d',
       borderRadius = 15,
       selectedSegmentColor = '#0082ff',
       selectedTextColor = '#fff',
       unselectedTextColor = '#000',
       unselectedSegmentsColor = '#e7e5e5',
       textFontSize = 20,
       onChangeSegment,
   }) => {
    const [selectedIndex, setSelectedIndex] = useState(selected);


    useEffect(() => {
        onChangeSegment(selectedIndex);
    });

    return (
        <View
            style={{
                flexDirection: 'row',
                borderRadius: borderRadius,
                borderColor: borderColor,
                borderWidth: borderWidth,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: unselectedSegmentsColor,
            }}>
            {segments.map((seg, index) => {
                return (
                    <TouchableOpacity
                        onPressIn={() => setSelectedIndex(index)}
                        style={[
                            selectedIndex === index
                                ? {
                                    backgroundColor: selectedSegmentColor,
                                }
                                : null,
                            {
                                flex: 1,
                                height: height,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: borderRadius,
                            },
                        ]}>
                        <Text
                            style={[
                                selectedIndex === index
                                    ? {color: selectedTextColor}
                                    : {color: unselectedTextColor},
                                {
                                    fontSize: textFontSize,
                                },
                            ]}>
                            {seg}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

CustomSegmentedControl.propTypes = {
    segments: PropTypes.array.isRequired,
    onChangeSegment: PropTypes.func.isRequired,
};
