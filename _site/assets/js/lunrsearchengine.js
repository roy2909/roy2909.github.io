
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 2,
    "url": "http://localhost:4000/",
    "title": "Home",
    "body": "      Projects:                                                                                                                                                                                                           Motion Mirroring Robotic Arm                              :               C, Mechatronics, Embedded Systems, I2C:                                                                       11 Dec 2022                &lt;/span&gt;                                                                                                                                                                                                                                                                                                  BotChocolate                              :               Computer Vision, OpenCV, ROS2, Python, Motion Planning, Moveit, Intel Realsense, Emika Franka Robot Arm:                                                                       09 Dec 2022                &lt;/span&gt;                                                                                                                                                                                                                                                                                                  Physics Simulation                              :               Python, Dynamic Systems, Simulation, Jupyter Notebook:                                                                       04 Dec 2022                &lt;/span&gt;                                                                                                                                                                                                                                                                                                  Mobile Manipulator Simulation                              :               Mobile Manipulation / CoppeliaSim / PID Control / Python:                                                                       01 Dec 2022                &lt;/span&gt;                                                                                                                                                                                                                                                                                                  Pen Stealing Robot                              :               Computer Vision, OpenCV, Python, PincherX 100, Intel Realsense:                                                                       15 Sep 2022                &lt;/span&gt;                                                                                                                                                                                                                                                                                                  Autonomous Sanding                              :               Computer Vision, OpenCV, UR5 Robot Arm, Manufacturing, Research, Intel Realsense:                                                                       22 May 2022                &lt;/span&gt;                                                                                                                                                                                                                                                                                                  Cocktail Maker                              :               Arduino, Circuit Design, Sensors &amp; Actuators:                                                                       13 Apr 2022                &lt;/span&gt;                                                                                                                                                                                                                                                                                                  FSAE                              :               :                                                                       23 May 2021                &lt;/span&gt;                                                                                                                                                                                                                                                                                                  Robotics minor                              :               Mechatronics, SLAM, Controls, Python, C++:                                                                       21 May 2021                &lt;/span&gt;                                                                                                                                                                                                                                                                                                  Computer Vision Golf Range Finder                              :               Computer Vision, OpenCV, Python:                                                                       20 May 2021                &lt;/span&gt;                                                                                                  "
    }, {
    "id": 3,
    "url": "http://localhost:4000/JamesOubre_Resume",
    "title": "Resume and Contact Info",
    "body": "Resume: Download Resume as a PDF Contact: jamesoubre2023@u. northwestern. edu GitHub LinkedIn "
    }, {
    "id": 4,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 5,
    "url": "http://localhost:4000/Gripper/",
    "title": "Motion Mirroring Robotic Arm",
    "body": "2022/12/11 - C, Mechatronics, Embedded Systems, I2C Overview: As part of Northwestern’s microprocessor design course, my group and I created an Electromyography(EMG) controlled robotic manipulator. This allows a user to connect an EMG sensor to their arm toopen and close a robotic gripper by simply opening and closing their hand. We also combined project with another group in the class who were controlling a 2 DOF robotic arm’s motion based off of IMU data. By combining these projects, we were able to create a system that would move a robot arm and control the gripper based off of the user’s motion. EMG Gripper: This project was developed around the Microbit V2. Code is typically written to the Microbit in Python,however, we were writing directly to the Microbit’s microcontroller (nRF52833) in C. The end-effectoritself is a mechanical gripper that opens and closes based off of the position of a connected servo. We controlled this servo with a PCA9685 servo driver over I2C. Additionally, we used two sensorsin this project: an EMG sensor and a force sensitive resistor (FSR). The EMG sensor measures electrical signals in muscles that are generated from movement. This is attached to the users arm with electrodesand used to detect if the hand is closed or not. The FSR measures the amount offorce that is applied to it. This is placed on the inside of the gripper and used to detect if the gripper is actively gripping something. The basic operation of this system is that the output of the two sensors are constantly being readby the Microbit. If the EMG sensor gives a high signal, then the user is trying to grasp. When thisis detected, PWM signals are sent to the servo driver over I2C in a loop, closing the gripper incrementallywith each iteration. When an item is grasped, a forced is applied to the FSR, producing a high signal that is used to break the grasping loop and hold the gripper at a constant position. Once, the user releases their grasp, the gripper will then start to incrementally open, unlessinterrupted by another grasp command.  View EMG Gripper Github: EMG Gripper + IMU Arm: When the EMG gripper is combined with the IMU controlled arm, the resulting system allows a user tomanipulate the robot to perform various actions just by moving their own arm and hand. The Team: EMG Gripper:  David Dorf Katie Hughes James OubreIMU Arm:  Nicolas Morales Hang Yin Felipe Jannarone"
    }, {
    "id": 6,
    "url": "http://localhost:4000/Botchoc/",
    "title": "BotChocolate",
    "body": "2022/12/09 - Computer Vision, OpenCV, ROS2, Python, Motion Planning, Moveit, Intel Realsense, Emika Franka Robot Arm Overview: The purpose of this project was to create hot chocolate using the Franka Emika 7 DOF robot arm. To perceive its environment, the system utilizes an Intel D435i camera AprilTags. Upon initial setup, a calibration process must be completed. After this, the process consisted of using AprilTags to locate a scoop of cocoa, a mug, a spoon, and a kettle relative to the robot. Next, using our custom MoveIt API for Python, movebot, the robot is able to perform path planning between all of these objects. It turns on the kettle, dumps the cocoa powder into the mug, pours the hot water over the power, and stirs the mixture it with the spoon.  View BotChocolate Github: Moveit API: Because the ROS2 MoveIt package does not have a Python API yet, creating one was the first step. By looking into the MoveIt ROS2 actions and services, we were able to create an API that takes either Cartesian coordinates of the Franka end-efffector or joint-state positions of each joint and createsa path to the specified position. It also allows for the choice of moving in a Cartesian path. Vision: The vision system is comprised of two major parts: calibration and component location. AprilTags areused to detect where each of the hot chocolate making components are. The AprilTags are located usingthe apriltag_ros package. There is one tag fixed to a kettle and one tag fixed to a jig that has slots for a mug, cocoa scooper,and a spoon. Once these tags are found in the camera frame, there are two transformation trees describing where all the hot chocolate components are relative to the camera and where each link ofthe Franka robot arm is relative to the robot’s base. However, we need to connect these trees to get the location of each component relative to the robot’s base. This is where the calibration is used. An AprilTag must be placed in the robot’s gripper, aligned with the gripper’scoordinate frame and in view of the camera to calibrate. We then wrote a program that finds the location of the tagand relates it to the position of the base, connecting the robot frame to the camera frame. We thensave this transformation to a . yaml file to be used later on when running the main hot chocolatemaking sequence. After obtaining the transformation from the camera to the robot, the robot can now use the locationsof the two AprilTags to locate and manipulate the hot chocolate components as necessary. Motion Planning: Once the locations of all the components are known, it’s time to make hot chocolate. Cartesian pathsare used to move the robot in straight lines and rotational path planning is used for achieving motionslike tilting to grab the scoop and dumping the cocoa. Both Cartesian and rotational motion are used to achieve pouring. To make a cup of hot chocolate, the robot first turns on the kettle to heat the water, grab the cocoa scoop, pours it in a mug, pours the hot water over the powder, and stirs. We also used serval intermediate waypoints to help avoid reaching the joint limits of the robot. The Team:  Shantao Cao Allan Garcia-Casal Nicholas Marks James Oubre David Dorf "
    }, {
    "id": 7,
    "url": "http://localhost:4000/physics_simulator/",
    "title": "Physics Simulation",
    "body": "2022/12/04 - Python, Dynamic Systems, Simulation, Jupyter Notebook Using Lagrangian dynamics, I was able to simulate a box bouncing around within a larger box. First,I calculated the potential and kinetic energies of the system to obtain its Lagrangian and later on,the Euler-Lagrange equations. These equations describe the dynamics of the system while notexperiencing impact. To detect impact the following coordinate frames were used. Using the transformation matrices between these frames, I am able to detect impact if any of the smaller box’s vertices intersect the larger box’s walls. Each vertex is checked against each wall for every time step of the simulation. If an impact is detected, the dynamic equations are updated andthe simulation continues.  View it on Github: "
    }, {
    "id": 8,
    "url": "http://localhost:4000/robman/",
    "title": "Mobile Manipulator Simulation",
    "body": "2022/12/01 - Mobile Manipulation / CoppeliaSim / PID Control / Python Overview: As the capstone project for Northwestern’s Robotic Manipulation course I simulated a KUKA youBotmoving to a cube, grasping it, and then placing it in a desired position. First, I created a functionto generate trajectories from the robot’s starting position to all the different waypoints to complete the task. The homogeneous transformation matrices between waypoints are used to create a screw or Cartesian trajectories between points. These trajectories are then stored in a matrix representing the desired movement of the robot’s chassis and end effector. Next, I implemented a PID feedbackcontroller based off of the robot’s current position and odometry to ensure that the robot can selfcorrect if error is introduced. Lastly, the actual positions of the robot are stored in a CSV fileand used to simulate the robot in Coppeliasim. Results: The simulation completed the task in three different scenarios: with poor PID gains, tunedPID gains, and a different start and end configuration for the cube.  Overall, each simulation is able to reduce to zero error before the robot gets the the cube’s standoff position.  View it on Github: "
    }, {
    "id": 9,
    "url": "http://localhost:4000/Pen/",
    "title": "Pen Stealing Robot",
    "body": "2022/09/15 - Computer Vision, OpenCV, Python, PincherX 100, Intel Realsense As part of Northwestern’s orientation hackathon, I used an Intel Realsense D435i camera to detectthe location of a purple Northwestern pen and grab it with a Trossen PincherX 100 robot arm. To detect the pen, I converted the RGB image from the Realsense to an HSV image and used the HSV valuesto find all purple pixels. Next, I created a binary map where the detected pixels were shown as white and all other pixels black. Using this and OpenCv’s contour detection I found the pixel locationof the centroid of pen. This allowed me to find the location of the pen relative to the camera using the aligned depth image generated from the Realsense. I then convert the pen position from the camera’sframe to the robot’s frame and control the robot to move to the pen and grasp it.  View it on Github: "
    }, {
    "id": 10,
    "url": "http://localhost:4000/icore/",
    "title": "Autonomous Sanding",
    "body": "2022/05/22 - Computer Vision, OpenCV, UR5 Robot Arm, Manufacturing, Research, Intel Realsense Overview: While getting my bachelor’s degree at Louisiana State University I worked as an undergraduate researcherin the Innovation in Control and Robotics Engineering Lab (iCORE Lab). My main area of research wascomputer vision for robotic systems. Specifically, as part of an NSF funded research project, Icreated a computer vision system to detect surface defects in fiber glass for autonomous sanding. Once, the locations of the defects were found, two types of path planning were used to create a sandingpath. The path waypoints were then relayed to a UR5e 6 DOF robot arm with a sander attachment to sand the defected areas.  System Pipeline System Components Read the paper: Vision: Using traditional computer vision techniques like canny edge detection, morphological closing, contour detection, and binary mapping I was able to detect and isolate defects present on the surfaceof a fiber glass panel.  Computer Vision Pipeline First, an Intel D435i camera captures the RGB and depth images of the fiber glass sample. A canny edge detector is applied to the RGB image to separate the inherit pattern visible underneath the surface of the fiber glass from the defects present on the surface. After this step, the surface defects become easily visible. To create a general region of the defective area, I use morphologicalclosing to merge nearby edges and fill openings within a certain area to create a blob like structurewhere defects reside. Next I use contour detection to get the pixel locations of everything withinthe defective regions. Path Planning: Once the locations of the defects are known, a path must be created so the robot can sand over allof the defective areas. Two different types of path planning were implemented. Multi-goal path planningwas needed to make sure the robot goes to each of the separate defective regions and coverage pathplanning was used to ensure the robot sanded all of the defects within a given region. For multi-goal path planning, a nearest neighbor algorithm was implemented to create a path that went to each region based off of the location of the regions centroid. Next, a grid-based sweeping algorithm is used to create a path that covers the entire area. Finally, the two plans are combinedand the robot’s sander is pressed against the piece for the coverage paths to ensure sanding and it is offset from the piece during multi-goal movements so that smooth sections are not sanded erroneously.   Example of Finalized Path in 2D and 3D Results: The system successfully detected the defected areas and we quantified the results by having a personmanually label defects in one of the fiber glass image samples and compared that to what the systemdetected. Fifteen fiber glass panels were used and the calculated average sensitivity obtained was 66. 24%, the average specificity was 78. 20%, and the resulting accuracy was 81. 02%. Furthermore, using a profilometer, I measured the surface roughness of certain defected areas before and after sanding and found that the average roughness at these areas was about half as rough after performingautonomous sanding. Contributors:  William Ard Corina Barbalata Joshua Nguyen"
    }, {
    "id": 11,
    "url": "http://localhost:4000/cocktail/",
    "title": "Cocktail Maker",
    "body": "2022/04/13 - Arduino, Circuit Design, Sensors &amp; Actuators Overview: As the final project for my Sensors and Actuators class at LSU, I designed an automated cocktail maker. Using three ultrasonic distance sensors offset at different heights, the system can detect three different heights of cups corresponding to a wine glass, pint glass, and a cocktail glass. I implemented logicon an Arduino to decide what kind of glass is present based off the sensor outputs. Once the type ofcup is known, the Arduino turns on pumps connected to the corresponding cocktail ingredients. Originally,the system was supposed to dispense wine for the wine glass, beer for the pint, and a mixed drink forthe cocktail glass. However, beer did not dispense properly from the pump and it mostly dispensedfoam so I changed it to dispense a different mixed drink. I also did not actually have any wine when making the video so I used water. The logic used is shown in the pipeline below.  System Pipeline Electrical Design: The electrical design is shown in the image below. The system is powered from a wall outlet to a 12V power supply. A 7 V voltage regulator is used to power the Arduino and the 12 volts powers a relay module which, in turn, powers the pumps. To actually dispense the liquid, the Arduino sends a high signal to the corresponding pin on the relay module to close the relay and turn on the pump.  Electrical Schematic "
    }, {
    "id": 12,
    "url": "http://localhost:4000/fsae/",
    "title": "FSAE",
    "body": "2021/05/23 -  Overview: Low Voltage Electrical: Design: Computer Vision Pipeline Computer Vision Pipeline Computer Vision Pipeline Computer Vision Pipeline Computer Vision Pipeline Manufacturing: Computer Vision Pipeline High Voltage Electrical: Design: Computer Vision Pipeline Computer Vision Pipeline Manufacturing:  Mechanical: "
    }, {
    "id": 13,
    "url": "http://localhost:4000/a_robotics_minor/",
    "title": "Robotics minor",
    "body": "2021/05/21 - Mechatronics, SLAM, Controls, Python, C++ Overview: While at LSU, I completed a minor in robotics engineering alongside my electrical engineeringmajor. For this minor I took a number of robotics related classes covering a range of topics. Many of these classes were very hands on and I got a lot of useful project experience. Two of the courses that I found particularly useful were Intro to Robotics Engineering and Autonomous Robotic Vehicles In Intro to Robotics Engineering we learned about a broad array of topics from mechanical design to software. We learned about robotic actuators and mobility mechanisms, robot motion control, navigation and mapping, and human-robot interaction. Particularly, we had many interesting projects involving the Parallax Activitybots, hexapods, and Turtlebots. Furthermore, the class focused heavily on learningROS and had many labs, classes, and assignments dedicated to learning it. Autonomous Robotic Vehicles covered topics like vehicle kinematics, motion control, perception, localization, path planning, and navigation. In the class we learned about and implemented different probabilistic methods like Particle Filter and Extended Kalman Filter (EKF) for navigation. As our final project of the class, we implemented an Extended Kalman Filter (EKF) SLAM using Python and ROS on a Turtlebot to navigate through a maze, map it, and localize itself.   View it on Github: Projects:    Maze solving robot (leftmost gif): Programmed Parallax Activitybot in C++ to navigate through a maze, create a map of the maze, and save the quickest path to the end     Hexapod (middle gif): Explored different gaits and control to move the hexapod in particular ways, achieve turning motions, and climb stairs     Increasing Activitybot Payload (rightmost gif): Created an external chassis for theActivitybot and retrofitted its drivetrain with different gears to increase its torque capacity to push heavier objects     Extended Kalman Filter SLAM on Turtlebot: Implemented EKF SLAM using Python and ROS to navigate through a maze, map it, and localize itself     Golf Range Finder: Created a computervision system that tells a user how far they are from a golf flag using just an image of the flag     Automated Cocktail Maker: Designedand created an automatic cocktail machine that can serve different drinks based off the glass inserted into it  Relevant Classes:  Intro to Robotics Engineering Autonomous Robotic Vehicles Sensors and Actuators Intro Computer Vision Adjustable Speed Drives Microprocessor Systems Advanced Control System Design Discrete Control System Design"
    }, {
    "id": 14,
    "url": "http://localhost:4000/golf/",
    "title": "Computer Vision Golf Range Finder",
    "body": "2021/05/20 - Computer Vision, OpenCV, Python Overview: The purpose of this project is to imitate a golf range finder using a normal, non-depth, camera. Theprogram was written using Python and OpenCV and the algorithm pipeline is shown below. System Pipeline First, the user takes an image of the flag and draws a rectangle around the flag. This region is cropped out and the color of the flag is then detected. After the color of the flag is found, the flag is cropped out using contour detection and the pixel length of the side of the flag is measured. Using this pixel length, the distance to the flag could be calculated using triangle similarity anddisplayed on the user’s screen. Results: Overall, the range finder worked well. It was very precise and accurate for smaller distances. However, as the distances began to increase, the program was less successful. Test results can be seen below. One reason this could be happening is that the farther away the flag is, the smaller it is on the picture. This makes it much more difficult get an accurate pixel count to calculate the distance to the flag. Using a higher resolution image could help mitigate this problem. Test Results for 5-35 yards Test Results for 44-132 yards View it on Github: "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});