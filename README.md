# Text Gradients and Animations for React

[![npm version](https://img.shields.io/npm/v/react-text-gradients-and-animations)](https://img.shields.io/npm/v/react-text-gradients-and-animations)
[![Code size](https://img.shields.io/github/languages/code-size/GabrielMurry/react-text-gradients-and-animations)](https://img.shields.io/github/languages/code-size/GabrielMurry/react-text-gradients-and-animations)
[![Build Status](https://app.travis-ci.com/GabrielMurry/react-text-gradients-and-animations.svg?branch=master)](https://app.travis-ci.com/GabrielMurry/react-text-gradients-and-animations)
[![Coverage Status](https://coveralls.io/repos/github/GabrielMurry/react-text-gradients-and-animations/badge.svg?branch=master)](https://coveralls.io/github/GabrielMurry/react-text-gradients-and-animations?branch=master)
[![GitHub issues open](https://img.shields.io/github/issues/GabrielMurry/react-text-gradients-and-animations)](https://img.shields.io/github/issues/GabrielMurry/react-text-gradients-and-animations)
[![License: MIT](https://img.shields.io/github/license/GabrielMurry/react-text-gradients-and-animations)](https://img.shields.io/github/license/GabrielMurry/react-text-gradients-and-animations)

Easily apply <ins>**linear**</ins>, <ins>**radial**</ins>, or <ins>**conic**</ins> text gradients to your React applications with only 3 components!

Add text gradient <ins>**animations**</ins> instantly!

<ins>**No limit**</ins> on color stops!

## [Demo](https://text-gradients-and-animations-demo.vercel.app)

# Installation and Importation

First, install the package:

```
npm i --save react-text-gradients-and-animations
```

Then import the <code>LinearTextGradient</code>, <code>RadialTextGradient</code>, or <code>ConicTextGradient</code> in your React application:

```javascript
import {
  LinearTextGradient,
  RadialTextGradient,
  ConicTextGradient,
} from "react-text-gradients-and-animations";
```

# LinearTextGradient

The <code>LinearTextGradient</code> component is used to apply a linear gradient on text:

```javascript
<LinearTextGradient angle={45} colors={["#fafa6e", "#39b48e"]}>
  This text has linear gradient!
</LinearTextGradient>
```

The component can be used inside any HTML element tags.

If you input HTML element tags as children of <code>LinearTextGradient</code>, you will not see an output. To fix this, the <code>LinearTextGradient</code> component (or its parent component) must contain a display property (flex, inline-flex, etc.).

*Note:* Refresh the browser if the text is hidden underneath the background gradient.

### Properties

| Prop                          | Description                                  | Default Value | Type    | Required                            |
| ----------------------------- | -------------------------------------------- | ------------- | ------- | ----------------------------------- |
| <code>angle</code>            | The direction (angle) of the linear gradient | 0             | Integer | False                               |
| <code>colors</code>           | Array of colors (>= 2)                       | -             | Array   | True                                |
| <code>animate</code>          | Allow text gradient to be animated           | False         | Boolean | False (True if you want animations) |
| <code>animateDuration</code>  | Seconds it takes to do a full animation loop | 5             | Integer | False                               |
| <code>animateDirection</code> | Direction of animation loop                  | "vertical"    | String  | False                               |
| <code>className</code> | Custom CSS styling                  | -    | String  | False                               |

#### The ability to input as many colors as you need (>= 2) and any angle (0 - 360) for the linear gradient grants you more control, and a step closer to achieving your vision!

Types of <code>animateDirection</code>:

- <code>"horizontal"</code>
- <code>"vertical"</code>
- <code>"diagonal"</code> --> infinitely loops from bottom left corner to top right corner

You can also add different <ins>intensities</ins> for each <code>color</code>:

- <code>"#fafa6e 50%"</code>
- <code>"blue 25%"</code>
- <code>"rgb(255, 0, 0) 75%"</code>

# RadialTextGradient

The <code>RadialTextGradient</code> component is used to apply a radial gradient on text:

```javascript
<RadialTextGradient
  shape={"circle"}
  position={"center"}
  colors={["#fafa6e", "#39b48e"]}
>
  This text has radial gradient!
</RadialTextGradient>
```

The component can be used inside any HTML element tags.

If you input HTML element tags as children of <code>RadialTextGradient</code>, you will not see an output. To fix this, the <code>RadialTextGradient</code> component (or its parent component) must contain a display property (flex, inline-flex, etc.).

*Note:* Refresh the browser if the text is hidden underneath the background gradient.

### Properties

| Prop                          | Description                                  | Default Value | Type    | Required                            |
| ----------------------------- | -------------------------------------------- | ------------- | ------- | ----------------------------------- |
| <code>shape</code>            | Ending shape of radial gradient              | "circle"      | String  | False                               |
| <code>position</code>         | Position of radial gradient                  | "center"      | String  | False                               |
| <code>colors</code>           | Array of colors (>= 2)                       | -             | Array   | True                                |
| <code>animate</code>          | Allow text gradient to be animated           | False         | Boolean | False (True if you want animations) |
| <code>animateDuration</code>  | Seconds it takes to do a full animation loop | 5             | Integer | False                               |
| <code>animateDirection</code> | Direction of animation loop                  | "vertical"    | String  | False                               |
| <code>className</code> | Custom CSS styling                  | -    | String  | False                               |

#### The ability to input as many colors as you need (>= 2) grants you more control, and a step closer to achieving your vision!

Types of <code>shape</code>:

- <code>"circle"</code>
- <code>"ellipse"</code>

Types of <code>position</code>:

- <code>"center"</code>
- <code>"left"</code>
- <code>"right"</code>
- <code>"top"</code>
- <code>"bottom"</code>
- <code>"75px"</code>
- <code>"40px 40px"</code>
- <code>"25% 50%"</code>
- <code>"0 0"</code>

Types of <code>animateDirection</code>:

- <code>"horizontal"</code>
- <code>"vertical"</code>
- <code>"diagonal"</code> --> infinitely loops from bottom left corner to top right corner

You can also add different <ins>intensities</ins> for each <code>color</code>:

- <code>"#fafa6e 50%"</code>
- <code>"blue 25%"</code>
- <code>"rgb(255, 0, 0) 75%"</code>

# ConicTextGradient

The <code>ConicTextGradient</code> component is used to apply a conic gradient on text:

```javascript
<ConicTextGradient
  angle={0}
  position={"center"}
  colors={["#fafa6e", "#39b48e"]}
>
  This text has conic gradient!
</ConicTextGradient>
```

The component can be used inside any HTML element tags.

If you input HTML element tags as children of <code>ConicTextGradient</code>, you will not see an output. To fix this, the <code>ConicTextGradient</code> component (or its parent component) must contain a display property (flex, inline-flex, etc.).

*Note:* Refresh the browser if the text is hidden underneath the background gradient.

### Properties

| Prop                          | Description                                  | Default Value | Type    | Required                            |
| ----------------------------- | -------------------------------------------- | ------------- | ------- | ----------------------------------- |
| <code>angle</code>            | The direction (angle) of the conic gradient  | 0             | Integer | False                               |
| <code>position</code>         | Position of conic gradient                   | "center"      | String  | False                               |
| <code>colors</code>           | Array of colors (>= 2)                       | -             | Array   | True                                |
| <code>animate</code>          | Allow text gradient to be animated           | False         | Boolean | False (True if you want animations) |
| <code>animateDuration</code>  | Seconds it takes to do a full animation loop | 5             | Integer | False                               |
| <code>animateDirection</code> | Direction of animation loop                  | "vertical"    | String  | False                               |
| <code>className</code> | Custom CSS styling                  | -    | String  | False                               |

#### The ability to input as many colors as you need (>= 2) and any angle (0 - 360) for the linear gradient grants you more control, and a step closer to achieving your vision!

Types of <code>position</code>:

- <code>"center"</code>
- <code>"left"</code>
- <code>"right"</code>
- <code>"top"</code>
- <code>"bottom"</code>
- <code>"75px"</code>
- <code>"40px 40px"</code>
- <code>"25% 50%"</code>
- <code>"0 0"</code>

Types of <code>animateDirection</code>:

- <code>"horizontal"</code>
- <code>"vertical"</code>
- <code>"diagonal"</code> --> infinitely loops from bottom left corner to top right corner

You can also add different <ins>intensities</ins> for each <code>color</code>:

- <code>"#fafa6e 50%"</code>
- <code>"blue 25%"</code>
- <code>"rgb(255, 0, 0) 75%"</code>

# Animation Code Example

All animations and animation properties will remain the same regardless of gradient type - (linear, radial, conic).

We will use the <code>LinearTextGradient</code> as our example:

```javascript
<LinearTextGradient
  angle={90}
  colors={["#fafa6e", "#39b48e"]}
  animate
  animateDuration={10}
  animateDirection={"horizontal"}
>
  This text has an animated linear gradient!
</LinearTextGradient>
```

Remember, if you want to animate a gradient, you have to input the property <code>animate</code> (or <code>animate={true}</code>).

Since our linear gradient angle is 90 degrees, our colors are appearing in a vertical pattern. The animation works by translating the background, so we should use a horizontal animation direction to make the changing colors visible! (if we use the vertical animation direction, we will see nothing being animated).
