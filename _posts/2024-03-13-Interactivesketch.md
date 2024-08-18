---
layout: post
title:  "Interactive Sketcing using OpenCV and Python"
categories: [ OpenCV, Python, Computer Vision, Google MediaPipe ]
image: assets/images/cv.gif
featured: false
hidden: false
---
<style>
  a {
    color: blue; /* Set the color of links to purple */
  }
</style>
A virtual canvas to draw, sketch and manipulate shapes using OpenCv and Mediapipe 

## Overview
Traditional digital sketch and painting applications often rely on physical input devices such as tablets, styluses, or mouse input, which can limit the natural flow and expressiveness/creativity of the artistic process. By leveraging computer vision techniques, we can develop a virtual sketching system that allows users to sketch and draw using their hands, providing a more immersive and engaging experience. This is what this project aims to achieve. It is an interactive application that allows users to draw and sketch on a virtual canvas using hand gestures captured by a camera. It leverages computer vision techniques to detect and track hand movements, enabling a touchless drawing experience.

<div align="center"><iframe width="720" height="400" src="https://www.youtube.com/embed/ct6n1MnmGfk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

## Design and Implementation

The system 

<div style="margin-top: 20px;" align="center">
    <img src="/assets/images/sketch+test.png" alt="go_VIEW" width="600"/>
</div>
<div align="center">
<em>Starting Interface</em>
</div>

&nbsp;

**Hand Detection and Tracking**
This project uses [Google's Mediapipe](https://ai.google.dev/edge/mediapipe/solutions/vision/hand_landmarker) open source software to detect and track the user's hand in real-time using video feed from any camera. The positions of the hand landmarks are obtained to determine the user's gestures and movements.

**User Interface**
The user interface of the Interactive Sketch application consists of several components, including the canvas, color buttons, and shape buttons. On starting the application, the user sees two buttons on the screen Draw and Colors. The Draw button opens a canvas for the user to sketch and the color button opens up tools and the color palette. These buttons are drawn on the screen using OpenCV’s cv2.rectangle() function which takes the position, size, and color of the button as parameters. The button's text label is drawn using OpenCV's cv2.putText() function, which takes the text, position, font, font scale, color, and thickness as parameters. Finally, the button's transparency is achieved by creating a semi-transparent overlay using the OpenCV’s cv2.addWeighted() function, which blends the button's color with the underlying frame based on the specified transparency value. If the user's hand is detected over a button, the button's transparency is set to 0 to indicate that it is being hovered over or selected. When the user's hand moves away from the button, the button's transparency is set back to its default value (0.5) to indicate that it is no longer being interacted with.


**Canvas**
The drawing canvas is a separate image that serves as a layer for storing the user's drawings. It is created using NumPy's np.zeros() function with dimensions (720, 1280, 3) and data type np.uint8. This creates a blank black image with a resolution of 720x1280 pixels and 3 color channels (BGR). 

**Drawing Tools**
The user has the option of an erase, clear, fill and shape (circle, square) tools. 

***Erase Tool:***
The erase functionality allows users to remove portions of their drawing. When the eraser button is activated, the brush color changes to black (RGB 0,0,0). As the user moves their hand over the canvas, black lines are drawn using OpenCV's line function, effectively erasing the existing artwork by covering it with black strokes.

***Clear Function:***
The clear feature provides a quick way to reset the entire canvas. When activated, it creates a new blank canvas with the same dimensions as the original. To prevent accidental clearing, a cooldown counter is implemented. Once cleared, the new blank canvas is overlaid onto the main video frame using bitwise operations, presenting the user with a fresh drawing surface.

***Shape Drawing:***
Users can draw circles and squares using a two-finger gesture. When a shape button is selected, its transparency changes to indicate activation. The shape type is stored for later use. Drawing begins when two fingers are detected on the canvas. The initial finger positions and distance between fingertips are recorded. As the user moves their hand, the shape's size updates based on the changing distance between the index and middle fingers, allowing intuitive resizing.

***Shape Fill:***
The fill tool allows users to color the interior of closed shapes, similar to Microsoft Paint. It uses contour detection to identify shape boundaries. The process involves creating masks to isolate the shape's interior, applying the selected color, and then combining the filled shape with the existing canvas. This feature enhances the app's drawing capabilities, allowing for more complex and visually appealing artwork.

<div style="margin-top: 20px;" align="center">
    <img src="/assets/images/fill.png" alt="go_VIEW" width="600"/>
</div>
<div align="center">
<em>Tools</em>
</div>
&nbsp;

## Future Work
***Advanced Gesture Recognition:***
Future enhancements could include multiple hand tracking and more complex gesture recognition. This would allow for seamless drawing with both hands and introduce more expressive controls like hand rotations and pinch-to-zoom. Implementing gesture-based commands for actions such as undo, redo, and layer management could streamline the user experience and reduce reliance on buttons.

***Brush Customization and Texture Support:***
Expanding brush options to include various types, textures, and patterns would enable users to create more diverse and visually appealing artwork. Implementing customization features like adjustable brush hardness, opacity, and flow would provide fine-grained control over brushstrokes. Integrating texture mapping or procedural texture generation could add depth and realism to digital paintings.

***Layer Management and Blending Modes:***
Introducing a layer system would allow users to work on different elements of their artwork independently and combine them seamlessly. Implementing layer blending modes (overlay, multiply, screen) would enable creative compositing and enhance the visual impact of the artwork. Providing layer-specific adjustments like opacity and masking would offer more control and flexibility in the drawing process.

&nbsp;
<div align="center"><h4> <a href="https://github.com/roy2909/InteractiveSketch">View Project on Github</a></h4></div>





