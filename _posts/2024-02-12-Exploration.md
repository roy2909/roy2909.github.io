---
layout: post
title:  "Autonomous Exploration and Detection in an Unknown Environment with a Quadruped Robot (Unitree Go1)"
categories: [Deep learning , ROS 2 , C++, 3D SLAM, RTAB-Map, Unitree Go1, Frontier Exploration, Object Detection, YOLOv8]
image: assets/images/Rob(1).gif
featured: false
hidden: false
---
Programmed a Unitree Go1 robot to autonomously explore an unknown environment while searching for human beings in C++, Python and ROS 2 using 3D SLAM and Computer Vison.

## Overview
Rescue missions in disaster-stricken areas pose significant challenges due to their dangerous and unpredictable nature. The intricacies of these environments make it difficult to send humans for exploration, necessitating the utilization of ground robots or aerial robots. While conventional robots encounter limitations such as maneuvering through tight spaces and overcoming obstacles, quadrupeds offer promising solutions with their superior mobility.

To address this challenge, I have programmed a [Unitree Go1](https://shop.unitree.com/products/robunitreeyushutechnologydog-artificial-intelligence-companion-bionic-companion-intelligent-robot-go1-quadruped-robot-dog) robot to autonomously explore unknown environments and search for survivors in disaster zones. Equipped with facial recognition capabilities, the robot can efficiently navigate through confined spaces and hazardous terrain, enhancing the effectiveness of rescue operations.

<div align="center"><iframe width="720" height="400" src="https://www.youtube.com/embed/zlveyBEczUs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

<br> <!-- Add a space here -->

The project is divided into three main sections:

[Autonomous Exploration and Mapping](#autonomous-exploration-and-mapping)

[Human Detection](#human-detection)

[Facial Recognition](#facial-recognition)



<!-- ## Control Flow
The following flow diagram shows the different components of the project and how they are connected to each other.
 -->


## Setup and Hardware
The robot used in this project is the [Unitree Go1](https://shop.unitree.com/products/robunitreeyushutechnologydog-artificial-intelligence-companion-bionic-companion-intelligent-robot-go1-quadruped-robot-dog). It is equipped with a [Robosense 3D Lidar](https://www.aliexpress.us/item/2251832755830693.html?gatewayAdapt=glo2usa4itemAdapt), an [Intel® RealSense™ Depth Camera D435i](https://www.intelrealsense.com/depth-camera-d435i/) and a [NVIDIA® Jetson Orin Nano](https://developer.nvidia.com/embedded/learn/get-started-jetson-orin-nano-devkit) to handle all the computation.  

<div align="left">
    <img src="/assets/images/go1 side.jpeg" alt="go 1side" width="600"/>
</div>

<div style="margin-top: 20px;" align="left">
    <img src="/assets/images/go1 side_COMPLETE.jpeg" alt="go_VIEW" width="600"/>
</div>

<br> <!-- Add a space here -->

## Autonomous Exploration and Mapping

### Mapping
A crucial aspect of the project involves the robot's autonomous mapping of unfamiliar surroundings, facilitated by the RTAB-Map package. This RGB-D, Stereo, and Lidar Graph-Based SLAM approach utilize an incremental appearance-based loop closure detector.

Key features implemented include:

**Sensor Fusion:** Fusion of Lidar and camera data allows the robot to effectively map the environment and identify loop closures.

**Lidar Point Clouds:** Used to detect obstacles and provide a wider field of view.

**Infrared Camera Data:** From the RealSense camera enables loop closures, enhancing mapping accuracy.

**RTAB-Map Integration:** The robot employs the RTAB-Map package to fuse Lidar and camera data, creating a comprehensive map of the environment as it explores.



### Autonomous Exploration and Navigation

The project centers on the autonomous exploration capability of a robot in unknown environments. This is achieved through a custom exploration algorithm implemented as a ROS 2 node in Python. The algorithm, a variation of the frontier exploration algorithm, seamlessly integrates with the Nav2 stack for path planning and obstacle avoidance. It operates based on Occupancy Grid data of the environment.

Key features include:

**Adaptation:** The algorithm is designed to be universally applicable to any robot equipped with Occupancy Grid information.

**State Machine:** Utilizes a state machine for transitioning between IDLE, EXPLORING, and MOVING states, based on the robot's actions.

**Frontier Identification:** During exploration, the robot detects frontiers, delineating explored and unexplored areas, by scanning the map.

**Computational Optimization:** Downsampling of the map and binary erosion operations enhance computational efficiency, obstacle detection accuracy, and navigational precision.

**Goal Determination:** Evaluates frontier points based on predefined criteria and selects a suitable goal destination for the robot to navigate towards.

**Path Planning:** Utilizes the Nav2 stack to plan a path towards the selected goal frontier, facilitating autonomous navigation.



<div align="center"><iframe width="720" height="400" src="https://www.youtube.com/embed/n7Kt4mNeu5E " title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

<div align="center">
<em>Autonomous Exploration</em>
</div>

<br> <!-- Add a space here -->

<div align="center"><iframe width="720" height="400" src="https://www.youtube.com/embed/hL4MTG0u1K0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
<div align="center">
<em>Navigation and Obstacle Avoidance</em>
</div>

<br> <!-- Add a space here -->

## Human Detection
Human Detection and classification is done using the `YOLOv8` model which is a realtime object detection and segmentation model. The model is trained on the COCO dataset and is able to detect and classify 80 different classes of objects. This was filtered to only detect human beings. Utilizing the depth information from the realsense camera, the Unitree Go1 is able to accurately and reliably determine the position (x,y,z coordinates and distance from the robot) of the human beings in the environment. This is visualized as red cubic markers in Rviz2. 

<div align="center">
    <img src="/assets/images/detection_marker.png" alt="detection" width="700"/>
</div>

<div align="center">
    <img src="/assets/images/detection_marker2.png" alt="detection" width="700"/>
</div>

<br> <!-- Add a space here -->

## Facial Recognition

I utilized the `DeepFace` Python package, which is a lightweight face recognition and facial attribute analysis framework integrating various cutting-edge models like VGG-Face, Google FaceNet, OpenFace, Facebook DeepFace, DeepID, and ArcFace. After testing, `DeepID` exhibited the highest accuracy at 94%.

Implemented functionality includes:

**Storage:** Images of individuals are stored using a `store` service.

**Detection:** The `detect` service compares the stored image with the current image from a RealSense camera. If a match is found, a picture of the person is displayed in Rviz2.

<!-- <div align="center">
    <img src="/assets/images/facial_recog.gif" alt="face_recog" width="700"/>
</div> -->
<div align="center"><iframe width="720" height="400" src="https://www.youtube.com/embed/PvZz6a3rL4k  " title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

<div align="center">
<em>Facial Recognition</em>
</div>

<br> <!-- Add a space here -->

## Future Work
Although this project has achieved significant milestones, there are several areas that require further development. These include:
1. **Exploration Algorithm Optimization**: The current exploration algorithm can be further optimized to enhance its efficiency and robustness. This can be done by adding an information gain metric and an object classifier to provde the robot with more information about the environment and determine exactly which areas it should give priority to explore.
2. **Human Detection and Recognition**: Currently, the human detection system operates by capturing still frames during exploration, interrupting the process to take, process, and return the position of detected humans. This method was adopted due to limitations with the Jetson Orin Nano's inability to process video streams in real-time accurately while running RTAB Map and the Nav2 stack.
For real-world scenarios, an efficient solution would entail real-time human detection and classification, along with determining their position and distance while the robot moves around. One viable approach would involve downsizing the model and deploying it on a more powerful system.
1. **Facial Recognition**: Although I successfully developed a package for accurate face storage and recognition, I aimed to integrate facial recognition into the entire pipeline. This enhancement would allow the robot to store the face of a specific person it intends to find and search for that individual within an unknown environment. Such a feature would be invaluable in scenarios like searching for specific individuals in disaster zones. Unfortunately, due to time constraints, I couldn't implement this feature.


<div align="center"><h4> <a href="https://github.com/roy2909/QuadrupedSearchandRescue">View Project on Github</a></h4></div>



