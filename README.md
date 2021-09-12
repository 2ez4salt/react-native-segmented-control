# Installation

Add the dependency:

```bash
npm i react-native-typescript-library-starter
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
import MyComponent from "react-native-typescript-library-starter";
```

## Fundamental Usage

```jsx
<CustomSegmentedControl
            segments={['Segment1', 'Segment2', 'Segment3']}
            selected={0}
            height={55}
            borderWidth={1}
            borderColor={'#9d9d9d'}
            borderRadius={15}
            selectedSegmentColor={'#0082ff'}
            unselectedSegmentsColor={'#e7e5e5'}
            selectedTextColor={'#fff'}
            unselectedTextColor={'#000'}
            textFontSize={20}
          />
```

## Example Project 😍

You can checkout the example project 🥰

Simply run

- `npm i`
- `react-native run-ios/android`

should work of the example project.

# Configuration - Props



| Property       |   Type    |  Default  | Description                                                            |
| -------------- | :-------: | :-------: | ---------------------------------------------------------------------- |
| segments       |  array    |   ['first','second','third']   | let you enable the button (must use it for button)                     |
| selected       |  number   | undefined                              | set your own logic for the button functionality when it is pressed     |
| height       |  number   | undefined                              | set your own logic for the button functionality when it is pressed     |
| textFontSize   |  number |  default  | set or override the style object for the button style                  |
| borderWidth    |  number   | undefined                              | change the button's text                                               |
| borderColor    |  number   |  default  | set or override the style object for the main container                |
| borderRadius   |  number |  default  | set or override the style object for the button style                  |
| selectedSegmentColor    |  color |  default  | set or override the style object for the button style                  |
| unselectedSegmentsColor |   color   |  default  | set your own component instead of default react-native Image component |
| selectedTextColor       |  color    |  default  | set or override the style object for the button style                  |
| unselectedTextColor     |   color   |  default  | set your own component instead of default react-native Image component |

## Future Plans

- [x] ~~LICENSE~~
- [ ] Write an article about the lib on Medium

# Change Log

Change log will be here !

## Author

Talha Salt, me@talha.io

## License

React Native Typescript Library Starter is available under the MIT license. See the LICENSE file for more info.
