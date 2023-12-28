---
layout: post
title:  "Path Planning Algorithms from scratch"
categories: [Python]
image: assets/images/pen.jpg
featured: false
hidden: false
---
Programmed path planning algorithms including Probabilistic roadmap with obstacles, Rapidly-exploring Random Tree and Rapidly-exploring Random Tree  with obstacles.

## Probabilistic Roadmaps (PRM)

A probabilistic roadmap (PRM) is a network graph of possible paths in a given map based on free and occupied spaces.

The image below shows a Probabilistic Roadmap with the shortest path (in orange) from node 44 to node 2 : [44, 40, 20, 6, 47, 32, 22, 8, 2]. The obstacles are shown in red and the nodes in yellow.

<div align="center"><img src="https://raw.githubusercontent.com/roy2909/roy2909.github.io/557ccbec27092ff17086fde8003b0beb27881bb8/assets/images/prm_color.png" alt="prm_image" width="3000"/></div>
 &nbsp;

### Algorithm Description

It consists of two phases
* CONSTRUCTION PHASE
* QUERY PHASE

### Construction Phase

* Random Sampling: 
    Random snapshots(samples) of different places that the robot could be in its environment.

* Checking for Free Space: 
    Each snapshot is checked to see if it's a safe spot for the robot to be in (no obstacles).

* Connecting the Dots: 
    For each safe spot, other nearby spots are checked to see if it can easily connect to without hitting any obstacles, typically either the k nearest neighbors or all neighbors less than some predetermined distance.

* Building a Road Map: 
    This is done iteratively till enough snapshots and pathways are present that cover different ways the robot could move around and until the roadmap is dense enough. This collection of snapshots and connections becomes the "map" or "roadmap."

### Query Phase
* Setting Start and Goal positions: 
    The starting position and the destination position are marked on the map.
* Linking with best route:
    The positions are linked to the roadmap created and the best route is formed from start to end using a Dijkstra's shortest path query.

# Rapidly-exploring Random Tree (RRT)
A Rapidly-Exploring Random Tree (RRT) is a fundamental path planning algorithm in robotics, first developed by Steven LaValle in 1998. 
An RRT consists of a set of vertices, which represent configurations in some domain D and edges, which connect two vertices. The algorithm randomly builds a tree in such a way that, as the number of vertices n increases to ∞, the vertices are uniformly distributed across the domain D⊂Rn. 

RRT without obstacles - 1000 iterations

<div align="center"><img src="https://raw.githubusercontent.com/roy2909/roy2909.github.io/f9654467ed948debec06a1339319f7915ebee122/assets/images/rrt.gif" alt="car_setup" width="1000"/></div>

&nbsp;

RRT with obstacles 

<div align="center"><img src="https://raw.githubusercontent.com/roy2909/roy2909.github.io/a07392ec53468054bdeb226991b6a195a0af0243/assets/images/rrt_obs.gif" alt="car_setup" width="1000"/></div>

&nbsp;
### Algorithm Description

RRT Algorithm

<div align="center"><img src="https://raw.githubusercontent.com/roy2909/roy2909.github.io/6801cb2df4da5b59725ef3bd806cda5ff687e174/assets/images/rrt.png" alt="car_setup" width="600"/></div>
&nbsp;



`RANDOM_CONFIGURATION` : Generates a random position in the domain.                                                              
`NEAREST_VERTEX`  : finds the vertex in G that is closest to the given position, according to some metric (a measure of distance). We will use the Euclidean metric.                                                                            
`NEW_CONFIGURATION` : generates a new configuration in the tree by moving some distance Δ from one vertex configuration towards another configuration.

 
<div align="center"><h4> <a href="https://github.com/roy2909/Plan_algorithms">View Project on Github</a></h4></div>
 