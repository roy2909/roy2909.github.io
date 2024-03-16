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
4. **Integration with any Robot**:


## Flow Diagram
The following flow diagram shows the different components of the project and how they are connected to each other.



## Setup and Hardware
The robot used in this project is the [Unitree Go1](https://shop.unitree.com/products/robunitreeyushutechnologydog-artificial-intelligence-companion-bionic-companion-intelligent-robot-go1-quadruped-robot-dog). It is equipped with a [Robosense 3D Lidar](https://www.aliexpress.us/item/2251832755830693.html?gatewayAdapt=glo2usa4itemAdapt), an [Intel® RealSense™ Depth Camera D435i](https://www.intelrealsense.com/depth-camera-d435i/) and a [NVIDIA® Jetson Orin Nano](https://developer.nvidia.com/embedded/learn/get-started-jetson-orin-nano-devkit) to handle all the computation.  


## Autonomous Exploration and Mapping

### Mapping
A pivotal aspect of the project involves the robot's autonomous mapping of unfamiliar surroundings. This was  handled by the [RTAB-Map](http://introlab.github.io/rtabmap/) package. It is a RGB-D, Stereo and Lidar Graph-Based SLAM approach based on an incremental appearance-based loop closure detector. Fusing the Lidar and camera data, the robot effectively maps the environment and identifies loop closures. The Lidar Point Clouds is used to detect obstacles and provide a wider field of view, while the infrared camera data of the realsense enables loop closures. The robot uses the RTAB-Map package to create a 3D map of the environment as it explores.


### Autonomous Exploration and Navigation

The main feature of the project is the robot's ability to autonomously explore an unknown environment. This was achieved using a custom exploration algorithm implemented as a ROS 2 node in Python. This algorithm is an adaptation of the frontier exploration algorithm, seamlessly integrated with the Nav2 stack for = path planning and obstacle avoidance.

It utilizes a state machine to trnsition between IDLE, EXPLORING, and MOVING states based on the robot's actions. During the exploration phase, the robot identifies frontiers—boundary zones demarcating explored and unexplored regions—by scanning the map. To optimize computational efficiency, the map undergoes downsampling, thereby reducing its resolution. Moreover, binary erosion operations are employed to refine map data, enhancing both obstacle detection accuracy and navigational precision.

On obtaining the frontier points, the algorithm evaluates its validity against predefined criteria such as proximity to obstacles, previous visitation status, and adherence to the map's valid cells. It then selects a specific frontier point as the goal destination for the robot to navigate towards. Once the goal frontier is determined, the algorithm publishes this goal to the `goal_pose` topic. The robot then uses the Nav2 stack to plan a path to the goal and navigate towards it.



## Human Detection



## Facial Recognition


## Integration with any Robot


## Future Work

