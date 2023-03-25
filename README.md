# Text Gradients for React
Easily apply linear, radial, or conic text gradients to your React applications with only 3 components!

# Installation and Importation
First, install the package:
```
npm i --save text-gradients-react
```
Then import the <code>LinearTextGradient</code>, <code>RadialTextGradient</code>, or <code>ConicTextGradient</code> in your React application:
```javascript
import { LinearTextGradient, RadialTextGradient, ConicTextGradient } from "text-gradients-react"
```

# LinearTextGradient
The <code>LinearTextGradient</code> component is used to apply a linear gradient on text. The comonent can be used inside HTML text elements (such as <code>h1</code>) or HTML text elements can be children of the <code>LinearTextGradient</code> component as shown below:

```javascript
<LinearTextGradient anlge={90} colors={["#fafa6e", "#39b48e"]}>
  <h1> 
    This text has linear gradient 
   </h1>
</LinearTextGradient>
```

### Properties
| Prop  | Description | Default Value | Type |  Required |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| angle | The direction (angle) of the linear gradient | 0 | Integer |  False |
| colors | Array of colors  | - | Array |  True |

#### The ability to input any angle (0 - 360) for the linear gradient grants you more control, and a step closer to achieving your vision!

#### You can also add different intensities for each color:
* <code>"#fafa6e 50%"</code>
* <code>"blue 25%"</code>
* <code>"rgb(255, 0, 0) 75%"</code>

# RadialTextGradient

The <code>RadialTextGradient</code> component is used to apply a radial gradient on text. The component can be used inside HTML text elements (such as <code>h1</code>) or HTML text elements can be children of the <code>RadialTextGradient</code> component as shown below:

```javascript
<RadialTextGradient shape={"circle"} position={"center"} colors={["#fafa6e", "#39b48e"]}>
  <h1> 
    This text has radial gradient 
   </h1>
</RadialTextGradient>
```

### Properties
| Prop  | Description | Default Value | Type |  Required |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| shape | Ending shape of radial gradient | "circle" | String |  False |
| position | Position of radial gradient | "center" | String | False |
| colors | Array of colors  | - | Array |  True |

#### Types of shapes:
* <code>"circle"</code>
* <code>"ellipse"</code>

#### Types of positions:
* <code>"center"</code>
* <code>"left"</code>
* <code>"right"</code>
* <code>"top"</code>
* <code>"bottom"</code>
* <code>"75px"</code>
* <code>"40px 40px"</code>
* <code>"25% 50%"</code>
* <code>"0 0"</code>

#### You can also add different intensities for each color:
* <code>"#fafa6e 50%"</code>
* <code>"blue 25%"</code>
* <code>"rgb(255, 0, 0) 75%"</code>

# ConicTextGradient

The <code>ConicTextGradient</code> component is used to apply a conic gradient on text. The component can be used inside HTML text elements (such as <code>h1</code>) or HTML text elements can be children of the <code>ConicTextGradient</code> component as shown below:

```javascript
<ConicTextGradient angle={90} position={"center"} colors={["#fafa6e", "#39b48e"]}>
  <h1> 
    This text has conic gradient 
   </h1>
</ConicTextGradient>
```

### Properties
| Prop  | Description | Default Value | Type |  Required |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| angle | The direction (angle) of the conic gradient | 0 | Integer |  False |
| position | Position of conic gradient | "center" | String | False |
| colors | Array of colors  | - | Array |  True |

#### The ability to input any angle (0 - 360) for the linear gradient grants you more control, and a step closer to achieving your vision!

#### Types of positions:
* <code>"center"</code>
* <code>"left"</code>
* <code>"right"</code>
* <code>"top"</code>
* <code>"bottom"</code>
* <code>"75px"</code>
* <code>"40px 40px"</code>
* <code>"25% 50%"</code>
* <code>"0 0"</code>

#### You can also add different intensities for each color:
* <code>"#fafa6e 50%"</code>
* <code>"blue 25%"</code>
* <code>"rgb(255, 0, 0) 75%"</code>
