---
layout: post
title:  "Autonomous Exploration and Detection in an Unknown Environment with a Quadruped Robot (Unitree Go1)"
categories: [Deep learning , ROS 2 , C++, 3D SLAM, RTAB-Map, Unitree Go1, Frontier Exploration, Object Detection, YOLOv8]
image: assets/images/Rob(1).gif
featured: false
hidden: false
---
Programmed a Unitree Go1 robot to autonomously explore an unknown environment while searching for human beings in C++, Python and Ros 2 using 3D SLAM and Computer Vison.

## Overview
Rescue missions in disaster-stricken areas pose significant challenges due to their dangerous and unpredictable nature. The intricacies of these environments make it difficult to send humans for exploration, necessitating the utilization of ground robots or aerial robots. While conventional robots encounter limitations such as maneuvering through tight spaces and overcoming obstacles, quadruped robots offer promising solutions with their superior mobility.

To address this challenge, I have programmed a Unitree Go1 robot to autonomously explore unknown environments and search for survivors in disaster zones. Equipped with facial recognition capabilities, the robot can efficiently navigate through confined spaces and hazardous terrain, enhancing the effectiveness of rescue operations.

The project is divided into several sections:
1. **Autonomous Exploration and Mapping**:
2. **Human Detection**:
3. **Facial Recognition**:


## Flow Diagram
The following flow diagram shows the different components of the project and how they are connected to each other.



## Setup and Hardware
The robot used in this project is the [Unitree Go1](https://shop.unitree.com/products/robunitreeyushutechnologydog-artificial-intelligence-companion-bionic-companion-intelligent-robot-go1-quadruped-robot-dog). It is equipped with a [Robosense 3D Lidar](https://www.aliexpress.us/item/2251832755830693.html?gatewayAdapt=glo2usa4itemAdapt), an [Intel® RealSense™ Depth Camera D435i](https://www.intelrealsense.com/depth-camera-d435i/) and a [NVIDIA® Jetson Orin Nano](https://developer.nvidia.com/embedded/learn/get-started-jetson-orin-nano-devkit) to handle all the computation.  

<div align="left">
    <img src="/assets/images/go1 side.jpeg" alt="go 1side" width="600"/>
</div>

<div style="margin-top: 20px;" align="left">
    <img src="/assets/images/go1 side_COMPLETE.jpeg" alt="go_VIEW" width="600"/>
</div>



## Autonomous Exploration and Mapping

### Mapping
A pivotal aspect of the project involves the robot's autonomous mapping of unfamiliar surroundings. This was handled by the [RTAB-Map](http://introlab.github.io/rtabmap/) package. It is a RGB-D, Stereo and Lidar Graph-Based SLAM approach based on an incremental appearance-based loop closure detector. Fusing the Lidar and camera data, the robot effectively maps the environment and identifies loop closures. The Lidar Point Clouds is used to detect obstacles and provide a wider field of view, while the infrared camera data of the realsense enables loop closures. The robot uses the RTAB-Map package to create a map of the environment as it explores.


### Autonomous Exploration and Navigation

The main feature of the project is the robot's ability to autonomously explore an unknown environment. This was achieved using a custom exploration algorithm implemented as a ROS 2 node in Python. This algorithm is an adaptation of the frontier exploration algorithm, seamlessly integrated with the Nav2 stack for path planning and obstacle avoidance. The design was based on the fact that this algorithm can be applied to any robot with a map information of the environment.

It utilizes a state machine to trnsition between IDLE, EXPLORING, and MOVING states based on the robot's actions. During the exploration phase, the robot identifies frontiers—boundary zones demarcating explored and unexplored regions—by scanning the map. To optimize computational efficiency, the map undergoes downsampling, thereby reducing its resolution. Moreover, binary erosion operations are employed to refine map data, enhancing both obstacle detection accuracy and navigational precision.

On obtaining the frontier points, the algorithm evaluates its validity against predefined criteria such as proximity to obstacles, previous visitation status, and adherence to the map's valid cells. It then selects a specific frontier point as the goal destination for the robot to navigate towards. Once the goal frontier is determined, the algorithm publishes this goal to the `goal_pose` topic. The robot then uses the Nav2 stack to plan a path to the goal and navigate towards it.

<div align="center">
Autonomous Exploration
</div>

<div align="center"><iframe width="720" height="400" src="https://www.youtube.com/embed/pYJnkYQ9h0o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

<div align="center">
Navigation and Obstacle Avoidance
</div>
<div align="center"><iframe width="720" height="400" src="https://www.youtube.com/embed/hL4MTG0u1K0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>


## Human Detection
Human Detection and classification is done using the YOLOv8 model which is a realtime object detection and segmentation model. The model is trained on the COCO dataset and is able to detect and classify 80 different classes of objects. This was filtered to only detect human beings. Utilizing the depth imformation from the realsense camera, the Unitree Go1 is able to accurately and reliably determine the position(x,y, z coordinates and disatnce from the robot) of the human beings in the environment. This is visualized as red cubic markers in Rviz2. 

<div align="center">
    <img src="/assets/images/detection_marker.png" alt="detection" width="700"/>
</div>

<div align="center">
    <img src="/assets/images/detection_marker2.png" alt="detection" width="700"/>
</div>


## Facial Recognition

Facial recogiton id done using the DeepFace python package which is a lightweight face recognition and facial attribute analysis framework , wrapping several state of teh art models: VGG-Face,Google FaceNet, OpenFace,Facebook DeepFace,DeepID,ArcFace to name a few. While testimg, I found that `DeepID` model worked the best, provoding an accuracy of 94% compared to other models. I created a node to store an image of a person using a `store` servie and on callimg a `detect` service, it compares the stored image with the current image from the realsense camera and returns a picture of the person if the face matches with the stored image in Rviz2.

<!-- <div align="center">
    <img src="/assets/images/facial_recog.gif" alt="face_recog" width="700"/>
</div> -->
<div align="center"><iframe width="720" height="400" src="https://www.youtube.com/embed/PvZz6a3rL4k  " title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>


## Future Work
Although this project has achieved significant milestones, there are several areas that require further development. These include:
1. **Exploration Algorithm Optimization**: The current exploration algorithm can be further optimized to enhance its efficiency and robustness. This can be done by adding an information gain metric  and an object classifier to provde the robot with more information about the environment and determine exactly which areas it should give priority to explore.
2. **Human Detection and Recognition**: The human detection system currently takes still frames while exploraing and has to stop, take a image, process it  and return the postion of the deteted human. This was primarlty done as the Jetson Orin Nano was not able to process the video stream in real time and accurately determine the distance of the human beings while running the RTAB Map and the Nav2 stack. A sytem which can effectively detect and classify human beings in real time and determine their position and distance through the video feed would be required in a real world scenario. One way to do that would be to downsize the model and run it on a more powerful system.
3. **Facial Recognition**: While I created a package accuartely store and recognize faces, I wanted to incororate the facial recognition system into the whole pipeline where the robot would store the face of a specific person it wants to find and search for tat specific person in the unknown environment. This would be a very useful feature in a real world scenario where the robot is looking for a specific person in a disaster zone. Due to time constraints, I was not able to implement this feature.



