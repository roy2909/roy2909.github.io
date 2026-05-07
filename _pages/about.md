---
layout: page
title: About Me
permalink: /AboutMe
comments: false
---

<style>
  .about-wrap {
    max-width: 680px;
    margin: 0 auto;
  }

  .about-intro {
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .about-intro .profile-pic {
    width: 140px;
    height: 140px;
    border-radius: 18px;
    object-fit: cover;
    flex-shrink: 0;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  }

  .about-intro .intro-text p {
    font-family: 'Figtree', sans-serif;
    margin: 0 0 0.7rem 0;
    font-size: 1rem;
    line-height: 1.7;
    color: #333;
  }

  .about-intro .intro-text a {
    color: #b07847;
    font-weight: 600;
    text-decoration: underline;
    text-decoration-color: rgba(176, 120, 71, 0.3);
    text-underline-offset: 3px;
    transition: text-decoration-color 0.15s;
  }

  .about-intro .intro-text a:hover {
    text-decoration-color: #b07847;
  }

  .social-row {
    margin-top: 1rem;
    display: flex;
    gap: 1.2rem;
  }

  .social-row a {
    font-family: 'Figtree', sans-serif;
    font-size: 0.85rem;
    font-weight: 500;
    color: #6e6e73;
    text-decoration: none !important;
    transition: color 0.15s;
  }

  .social-row a:hover {
    color: #1d1d1f;
  }

  .social-row a i {
    margin-right: 0.3rem;
  }

  .about-block {
    margin-bottom: 2.5rem;
  }

  .about-block h3 {
    font-family: 'DM Serif Display', Georgia, serif;
    font-size: 1.3rem;
    font-weight: 400;
    color: #1d1d1f;
    margin-bottom: 0.8rem;
  }

  .about-block p {
    font-family: 'Figtree', sans-serif;
    line-height: 1.75;
    color: #333;
    font-size: 0.95rem;
  }

  .project-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .project-list li {
    padding: 0.75rem 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    font-family: 'Figtree', sans-serif;
    font-size: 0.92rem;
    line-height: 1.6;
    color: #6e6e73;
  }

  .project-list li:last-child {
    border-bottom: none;
  }

  .project-list li strong {
    color: #1d1d1f;
    font-weight: 600;
  }

  .skills-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.5rem;
  }

  .skill-pill {
    font-family: 'Figtree', sans-serif;
    font-size: 0.78rem;
    font-weight: 500;
    padding: 0.35rem 0.85rem;
    background: rgba(0, 0, 0, 0.03);
    border-radius: 100px;
    color: #6e6e73;
    transition: all 0.15s;
  }

  .skill-pill:hover {
    background: rgba(176, 120, 71, 0.08);
    color: #b07847;
  }

  .about-cta {
    margin-top: 3rem;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(0, 0, 0, 0.06);
    font-family: 'Figtree', sans-serif;
    font-size: 0.95rem;
    color: #6e6e73;
  }

  .about-cta a {
    color: #b07847;
    font-weight: 600;
    text-decoration: underline;
    text-decoration-color: rgba(176, 120, 71, 0.3);
    text-underline-offset: 3px;
  }

  @media (max-width: 576px) {
    .about-intro {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .social-row {
      justify-content: center;
    }
  }
</style>

<div class="about-wrap">

  <div class="about-intro">
    <img class="profile-pic" src="{{ site.baseurl }}/assets/images/Profile.jpg" alt="Rahul Roy" />
    <div class="intro-text">
      <p>Founding Software Engineer at <a href="https://www.theoceancompany.com/">Ulysses</a>, where we're building autonomous underwater vehicles to steward the world's oceans &mdash; from defending critical maritime infrastructure to restoring coastal ecosystems.</p>
      <p>I work on building out the autonomy software stack that powers our underwater robots.</p>
      <div class="social-row">
        <a href="https://github.com/roy2909"><i class="fab fa-github"></i> GitHub</a>
        <a href="https://www.linkedin.com/in/rahul-roy2909/"><i class="fab fa-linkedin"></i> LinkedIn</a>
      </div>
    </div>
  </div>

  <div class="about-block">
    <h3>Background</h3>
    <p>MS in Robotics from Northwestern University with hands-on experience across the full robotics stack (perception, planning, control, and SLAM) on platforms ranging from quadrupeds to 7-DOF manipulators. Previously at Walt Disney Imagineering, building robots for theme park experiences.</p>
  </div>

  <div class="about-block">
    <h3>Selected Projects</h3>
    <ul class="project-list">
      <li><strong>Autonomous Exploration with a Unitree Go1</strong><br>Frontier-based exploration and human detection in unknown environments using ROS 2, 3D SLAM (RTAB-Map), and YOLOv8.</li>
      <li><strong>Vision-Based Control of a Franka Emika 7-DOF Arm</strong><br>Detection and motion planning to autonomously knock down targets, built on ROS 2 and MoveIt.</li>
      <li><strong>EKF SLAM from Scratch</strong><br>C++/ROS 2 implementation of Extended Kalman Filter SLAM for a TurtleBot3, validated in a custom RViz2 simulation.</li>
      <li><strong>Explainable AI for Hand Gesture Recognition</strong><br>sEMG signal classification with transfer learning, using Shapley values for interpretability.</li>
    </ul>
  </div>

  <div class="about-block">
    <h3>Things I Work With</h3>
    <div class="skills-row">
      <span class="skill-pill">Python</span>
      <span class="skill-pill">C++</span>
      <span class="skill-pill">C</span>
      <span class="skill-pill">MATLAB</span>
      <span class="skill-pill">ROS 2</span>
      <span class="skill-pill">Gazebo</span>
      <span class="skill-pill">MoveIt 2</span>
      <span class="skill-pill">OpenCV</span>
      <span class="skill-pill">YOLO</span>
      <span class="skill-pill">SLAM</span>
      <span class="skill-pill">Linux</span>
      <span class="skill-pill">Git</span>
      <span class="skill-pill">CMake</span>
      <span class="skill-pill">Embedded Systems</span>
    </div>
  </div>

  <div class="about-cta">
    Always happy to talk robotics, autonomy, and the ocean. Say hi on <a href="https://www.linkedin.com/in/rahul-roy2909/">LinkedIn</a>.
  </div>

</div>
