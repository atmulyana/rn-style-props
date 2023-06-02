# **rn-style-props**

This package is intended for React Native apps. It contains the constants and the functions to check the type of style props:
[*layout*](https://reactnative.dev/docs/layout-props),
[*transform*](https://reactnative.dev/docs/transforms),
[*shadow*](https://reactnative.dev/docs/shadow-props),
[*view*](https://reactnative.dev/docs/view-style-props),
[*text*](https://reactnative.dev/docs/text-style-props) or
[*image*](https://reactnative.dev/docs/image-style-props).

### **Constans**
- `layoutStyleProps` is an array of all style props of *layout* type
- `transformStyleProps` is an array of all style props of *transform* type
- `shadowStyleProps` is an array of all style props of *shadow* type
- `textStyleProps` is an array of all style props of *text* type
- `imageStyleProps` is an array of all style props of *image* type

### **Functions**
- `isLayoutStyleProp`    
  It returns `true` if a style prop is a *layout* type. The function parameter is the prop name string to check.
- `isTransformStyleProp`    
  It returns `true` if a style prop is a *transform* type. The function parameter is the prop name string to check.
- `isShadowStyleProp`    
  It returns `true` if a style prop is a *shadow* type. The function parameter is the prop name string to check.
- `isViewStyleProp`    
  It returns `true` if a style prop is a *view* type. The function parameter is the prop name string to check.
- `isTextStyleProp`    
  It returns `true` if a style prop is a *text* type. The function parameter is the prop name string to check.
- `isImageStyleProp`    
  It returns `true` if a style prop is a *image* type. The function parameter is the prop name string to check.   
       
- `isViewStyleValidProp`   
  It returns `true` if a style prop is valid for `View` component, that is if its type is *layout*, *transform*, 
  *shadow* or *view*. The function parameter is the prop name string to check.
- `isTextStyleValidProp`    
  It returns `true` if a style prop is valid for `Text` component, that is if it is valid for `View` component or
  its type is *text*. The function parameter is the prop name string to check.
- `isImageStyleValidProp`    
  It returns `true` if a style prop is valid for `Image` component, that is if it is valid for `View` component or
  its type is *image*. The function parameter is the prop name string to check.    
         
- `extractTextStyle`    
  If you have an object containing a set of style props for a `Text` component, this function will separate all style
  props whose *text* type. This function returns an object which has three properties:
  + `view` is an object containing all style props which are valid for `View` component.
  + `text` is an object containing all style props whose *text* type.
  + `unknown` is an object containing all props excluded from the other properties. For each props included here, a
     warning message is raised.
     
  **Usage:**    
  Suppose you create  a custom component:
  ```
  import React from 'react';
  import {Text, View} from 'react-native';
  import shallowCompare from 'react-addons-shallow-compare';
  import Decorator from './Decorator';

  class TextCustom extends React.Component {
    #style = null;

    constructor(props) {
        super(props);
        this.#style = extractTextStyle(props.style);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (!Object.is(this.props.style, nextProps.style)) {
            this.#style = extractTextStyle(nextProps.style);
        }
        return shallowCompare(this, nextProps, nextState);
    }

    render() {
        return (
            <View style={this.#style.view}>
                <Decorator />
                <Text style={this.#style.text}>{this.props.children}</Text>
            </View>
        );
    }
  }
  ```  
  In the above example, you just need define one prop for style. You don't need two props:
  the first one is for container `View` and another one is for contained `Text`.

  **Parameters:**
  + `style` is an object containing the style props to be extracted.
  + `paddingForText`: if it's `true` then all `padding` props will assigned to `text` property in
    the returned object. It may be useful if the contained component is `TextInput`. This parameter
    has default value, that is `false`.    
     
- `extractImageStyle`    
  It's like `extractTextStyle` but for `Image` component. The properties of the returned object are
  `view`, `image` and `unknown`.