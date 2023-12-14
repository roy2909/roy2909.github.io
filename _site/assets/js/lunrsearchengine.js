
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/AboutMe",
    "title": "About Me",
    "body": "I am Rahul Roy, a robotics enginner with a passion for solving real world complex problems through cutting edge robotic solutions. I am driven to fuse software and hardware, crafting sustainable robotic solutions for a better world. I received my Bachelor's degree in Mechatronics Engineering from Manipal Institue of Technology, India and am currently pursuing a Master's degree in Robotics from Northwestern University.  During my internships at the Centre for Artificial Intelligence and Robotics, DRDO, and the Central Research Laboratory, BEL, I worked in a team building practical robotic navigation projects. I worked on implementing core algorithms like trilateration and triangulation while learning about various communication protocols like CAN, UDP, TCP etc. For my final undergraduate project I worked on implementing autonomous navigation through waypoints on a Husky A200 robot while comparing planner algorithms like the Dynamic Window Approach(DWA) planner and the Timed Elastic Band(TEB) planner. My Master's journey in robotics at Northwestern has been really exciting so far. I worked on several projects including a Motion controlled differential drive robot with an IR sensor operated gripper and most notably a 7 DOF Emika Franka arm that can autonomously scan, aim and knock down colored bowling pins. I have a broad skill set covering Python and C programming, complemented by hands-on experience in ROS2/(ROS), Gazebo, MoveIt, OpenCV, SLAM, Computer Vision,YOLO and Embedded Systems. Additionally, I'm proficient in Linux, Git, CMake, and Unit Testing.  "
    }, {
    "id": 2,
    "url": "http://localhost:4000/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/",
    "title": "Home",
    "body": "      Featured Projects:                                                                                                                                                                                                           Motion Controlled differential drive car with Infrared sensor(IR) operated Gripper                              :               Programmed a nRF52833 microcontroller in C to control a differential drive car and autonomously operate a gripper on detection of objects using an IR sensor. . . :                                                                       05 Dec 2023                &lt;/span&gt;                                                                                                                                                                                                                                                                                                  Autonomous Colored Bowling Pin Targeting with Franka Arm and Nerf Blaster                              :               Programmed a 7 DOF Emika Franka Arm to detect and knock down colored bowling pins. :                                                                       04 Dec 2023                &lt;/span&gt;                                                                                                            All Projects:                                                                                                     Motion Controlled differential drive car with Infrared sensor(IR) operated Gripper              :       Programmed a nRF52833 microcontroller in C to control a differential drive car and autonomously operate a gripper on detection of objects using an IR sensor:                               05 Dec 2023        &lt;/span&gt;                                                                                                                             Autonomous Colored Bowling Pin Targeting with Franka Arm and Nerf Blaster              :       Programmed a 7 DOF Emika Franka Arm to detect and knock down colored bowling pins. :                               04 Dec 2023        &lt;/span&gt;                                                                                                                             Automated Grasping: Pincher X100 4-DOF Robot Arm -Picks a Purple Pen              :       Programmed a Pincher X100 4-DOF robot arm to grasp a purple colored pen. :                               15 Sep 2023        &lt;/span&gt;                                    "
    }, {
    "id": 4,
    "url": "http://localhost:4000/Rahul_Resume",
    "title": "Resume and Contact Info",
    "body": "Contactrahulroy2024@u. northwestern. edu: GitHub: LinkedIn: Download Resume as a PDF: "
    }, {
    "id": 5,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 6,
    "url": "http://localhost:4000/Car/",
    "title": "Motion Controlled differential drive car with Infrared sensor(IR) operated Gripper",
    "body": "2023/12/05 - Programmed a nRF52833 microcontroller in C to control a differential drive car and autonomously operate a gripper on detection of objects using an IR sensor Overview: As part of Northwestern’s microprocessor design course, I took in the fall, my group and I created a motion controlled RC car which autonomously opens and closes a gripper on detection of objects(heat sources). Car in action   System and Control: The system   The system comprises various components working in tandem: two microcontrollers communicating via radio - the BBC Micro:bit V2 (nRF52833) and the Motobit, responsible for motor control in the RC car (utilizing the SparkFun moto:bit - micro:bit Carrier Board). Additionally, the system includes a PWM-controlled gripper (servo - MG996R) and an IR sensor (SparkFun Grid-EYE Infrared Array Breakout). Developed around the Micro:bit V2, the project involved coding directly into the Micro:bit’s microcontroller (nRF52833) using C programming language. Leveraging two sensors, namely the built-in accelerometer (for which a custom Tilt driver was written to provide Euler angles to the Micro:bit controlling the car base via radio communication) and the IR sensor (Grid-EYE), the system is designed for robust functionality. Communication between the microcontrollers is facilitated through Radio for which a wireless communication driver was written to facilitate this, allowing the transmission of Euler angles from the accelerometer-equipped Micro:bit to the car-based Micro:bit. This data dictates the movement of the RC car via the motodriver, controlled using I2C communication. The end-effector, a mechanical gripper, operates in response to a servo (MG996R) controlled by a Micro:bit that sends Pulse Width Modulation (PWM) signals via I2C. Triggered by the breakout IR Grid-EYE sensor’s heat signatures, the gripper engages and disengages through a stem attachment. The Car being controlled by the Microbit   Operation: The system operates as follows. It begins with the user tilting the Micro:bit, operating the Tilt driver for the accelerometer. This action generates precise Euler angles, transmitted as data packets via Radio communication to another Micro:bit positioned on the car’s base. The Micro:bit on the car base serves as the command center, engaging in two primary functionalities. Firstly, it communicates via the I2C protocol with the motodriver, responsible for controlling the car’s motors. This communication translates the received Euler angles into specific motor commands, directing the car’s movement based on both the tilt direction and the degree of inclination. Simultaneously, the system monitors its surroundings using the breakout IR Grid-EYE sensor. Upon detecting a heat signature, indicative of an object, this information is relayed back to the Micro:bit attached to the motodriver. The Micro:bit interprets this data and generates Pulse Width Modulation (PWM) signals, which travel over the I2C protocol to the servo responsible for the gripper mechanism. These signals precisely control the opening and closing actions of the gripper, enabling it to interact with and manipulate objects within its reach.  View Project on Github: The Team:  Graham Clifford Rahul Roy"
    }, {
    "id": 7,
    "url": "http://localhost:4000/Nerf/",
    "title": "Autonomous Colored Bowling Pin Targeting with Franka Arm and Nerf Blaster",
    "body": "2023/12/04 - Programmed a 7 DOF Emika Franka Arm to detect and knock down colored bowling pins. Overview: In this project, the Franka arm scans the environment for randomly placed bowling pins of known colors(blue, green, red, yellow) and knocks them down. Mounted with an Intel Realsense D435i depth camera, it perceptively observes the environment, while employing a Nerf blaster to accurately aim and knock over the identified targets. The user has the option to specify the initial color of the bowling pins for the arm to knock over. Once all the selected colored pins are knocked down, the arm pauses, awaiting a subsequent input to resume targeting differently colored pins. Additionally, it possesses the capability to switch between two Nerf blasters if ammunition runs low during the operation. Control Flow and Nodes: Control: Main node which is used to call services to other nodes to carry out the project. Shoot: Node that carries out all moveit-interface services such as cartesian planning, IK planning, and gripper requests. Yolo: Node that runs YOLO(You only look once) to find the colored bowling pins with respect to the base of the Franka arm and display them as colored markers in Rviz2. User_Input: Node that listens to the user’s audio input to set the color of the targeted pins. Trigger: Node that controls the Arduino for the gun’s trigger. Apriltag_node: Node that scans and gives the coordinates for the April tags The control flow diagram is shown below: User Input: The user input is done using pyaudio package with the Google Web Speech API that listens to an user’s choice of target and transcibes that to a string that can be used in aiming at the chosen target. The inputs are set to only red, blue, green, and yellow. Image Pipeline: The Image pipeline is comprised of two major parts: Scanning(Object detection and classification) and AprilTags. Object detecting and classification is done with the help of the YOLOv8(You Only Look Once) model which is areal-time object detection and image segmentation model. The model was trained on more than 300 images of five classes:blue_pins, red_pins, yellow_pins, green_pins and not_pins. This was used to detect the colored bowling pins in the environment. With the help of the Intel Realsense D435i depth camera mounted on top of the Franka’s arm, the depth of the pins as well as the x,y coordinates were calculated with respect to the Franka’s base and this was published as Markers in Rviz2 AprilTags are used to detect the position of the Nerf blasters in order to pick them up once the pin scanning was done. The AprilTags are located using the apriltag_ros package. Shown below is the blue and yellow pins published as colored markers in Rviz2 Motion Planning: Motion Planning is done using The MoveItApi - a python wrapper for basic MoveIt functionality offered by the MoveIt ROS API. It used Cartesian Planning to pick up the blasters and Inverse Kinematics for the scanning positions. Control: The main control node is used to integrate all functionalities of the system together. It starts with the User input to select which pin gets knocked down. Scanning of the bowling pins is next, calling a the YOLO node to detect and publish markers of the detected pins. Once the pins are detected, the nerf blasters are loacted and picked up using the gun_pickup service and then targets are aimed at. The final service call is for the trigger mechanism that triggers the nerf blaster to fire at the aimed target. Future Work One of the biggest issues is the success rate of hitting targets because even if the gun is correctly pointed at the target, the error from the gun can cause the gun to miss. This would be something that would ideally be fixed by either increasing the accuracy of the gun so that as long as the gun is properly aimed that it would hit the target or increasing the bullets to increase the chances of hitting. Another option would be to include motion while the gun is shooting to try to correct the error from the gun.  360-degree scanning and shooting. Currently, the arm is only able to scan and shoot targets in front of itself so the next step would be adding the ability to target in any direction. Additionally, further testing on the limits of the height of the targets would also be necessary to determine how high and how low a target can be and have the arm still successfully shoot it.  Dynamic aiming. The assumption is made that the targets are stationary and unable to move, so being able to add a camera to allow for the arm to constantly scan for targets would allow for two different things. The first is a dynamic environment where targets are moved before the gun is shot and remain stationary and can be hit, and the second is moving targets where the gun can track its motion and shoot. The Team:  Rahul Roy(YOLO, Computer vision) Maximiliano Palay Sophia Schiffer Jialu Yu Joel Goh View Project on Github: "
    }, {
    "id": 8,
    "url": "http://localhost:4000/Pen/",
    "title": "Automated Grasping: Pincher X100 4-DOF Robot Arm -Picks a Purple Pen",
    "body": "2023/09/15 - Programmed a Pincher X100 4-DOF robot arm to grasp a purple colored pen. Overview: I utilized an Intel Realsense D435i camera to locate a purple Northwestern pen and manipulate it using a Trossen PincherX 100 robot arm. To identify the pen’s position, I transformed the RGB image from the Realsense into an HSV image and employed the HSV values to identify all purple-hued pixels. Following this, I established a binary map where the identified pixels were depicted as white and all other pixels as black. Utilizing OpenCV’s contour detection, I determined the pixel coordinates of the pen’s centroid. This enabled me to ascertain the pen’s position in relation to the camera by utilizing the aligned depth image generated by the Realsense. Subsequently, I converted the pen’s position from the camera’s frame to that of the frame of the robot and directed the robot to maneuver towards the pen and seize it. Centroid and thresholding of the purple pen View it on Github: "
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