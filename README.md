# Installation

Add the dependency:

```bash
npm i react-native-fully-customizable-segmented-control
```

## Peer Dependencies

<h5><i>IMPORTANT! You need install them</i></h5>

```js
"react": ">= 16.x.x",
"react-native": ">= 0.55.x",
```

# Usage

## Import

```jsx
import {CustomSegmentedControl} from "react-native-fully-customizable-segmented-control";
```

## Fundamental Usage

```jsx
const [selectedIndex, setSelectedIndex] = useState(0);


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
```

## Example Project 😍

You can checkout the example project 🥰

Simply run

- `npm i`
- `react-native run-ios/android`

should work of the example project.

# Configuration - Props



| Property                   |   Type    |  Default  | Description                                                            |
| -------------- | :-------: | :-------: | ---------------------------------------------------------------------- |
| segments                   |  array    | ['first','second','third']   | set segmented control's text array                  |
| selected                   |  number   | 0 | set segmented control's default selected value                         |
| height                     |  number   | 50 | set segmented control's height                                         |
| textFontSize               |  number   | 20   | set segmented control's text font size                                     |
| borderWidth                |  number   | 1 | set segmented control's border with(if u dont wanna border u can pass 0 ) |
| borderColor                |  string   |  "#9d9d9d"  | set segmented control's border color                |
| borderRadius               |  number   |  15  | set segmented control's radius                  |
| selectedSegmentColor       |   string   |  "#0082ff"  | set selected segment's background color                  |
| unselectedSegmentsColor    |   string   |  "#e7e5e5"  | set unselected segment's background color |
| selectedTextColor          |   string   |  "#fff"  | set selected segment's text color |
| unselectedTextColor        |   string   |  "#000"  | set unselected segment's text color |
| onChangeSegment            |   function   |  null  | returns when segment change index |

## Future Plans

- [x] ~~LICENSE~~
- [ ] Write an article about the lib on Medium

# Change Log

Change log will be here !

## Author

Talha Salt, me@talha.io

## License

React Native Typescript Library Starter is available under the MIT license. See the LICENSE file for more info.
