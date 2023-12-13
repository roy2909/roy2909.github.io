
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/AboutMe",
    "title": "Mediumish Template for Jekyll",
    "body": "This website is built with Jekyll and Mediumish template for Jekyll. It's for demonstration purposes, no real content can be found. Mediumish template for Jekyll is compatible with Github pages, in fact even this demo is created with Github Pages and hosted with Github.  Documentation: Please, read the docs here. Questions or bug reports?: Head over to our Github repository! Buy me a coffeeThank you for your support! Your donation helps me to maintain and improve Mediumish . Buy me a coffee Documentation"
    }, {
    "id": 2,
    "url": "http://localhost:4000/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/",
    "title": "Home",
    "body": "      Featured Projects:                                                                                                                                                                                                           BotChocolate                              :               Computer Vision, OpenCV, ROS2, Python, Motion Planning, Moveit, Intel Realsense, Emika Franka Robot Arm:                                                                       09 Dec 2022                &lt;/span&gt;                                                                                                            All Projects:                                                                                                                   :       Programmed a Pincher X100 4-DOF robot arm to grasp a purple colored pen. :                               15 Sep 2022        &lt;/span&gt;                                    "
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
    "url": "http://localhost:4000/Botchoc/",
    "title": "BotChocolate",
    "body": "2022/12/09 - Computer Vision, OpenCV, ROS2, Python, Motion Planning, Moveit, Intel Realsense, Emika Franka Robot Arm Overview: The purpose of this project was to create hot chocolate using the Franka Emika 7 DOF robot arm. To perceive its environment, the system utilizes an Intel D435i camera AprilTags. Upon initial setup, a calibration process must be completed. After this, the process consisted of using AprilTags to locate a scoop of cocoa, a mug, a spoon, and a kettle relative to the robot. Next, using our custom MoveIt API for Python, movebot, the robot is able to perform path planning between all of these objects. It turns on the kettle, dumps the cocoa powder into the mug, pours the hot water over the power, and stirs the mixture it with the spoon.  View BotChocolate Github: Moveit API: Because the ROS2 MoveIt package does not have a Python API yet, creating one was the first step. By looking into the MoveIt ROS2 actions and services, we were able to create an API that takes either Cartesian coordinates of the Franka end-efffector or joint-state positions of each joint and createsa path to the specified position. It also allows for the choice of moving in a Cartesian path. Vision: The vision system is comprised of two major parts: calibration and component location. AprilTags areused to detect where each of the hot chocolate making components are. The AprilTags are located usingthe apriltag_ros package. There is one tag fixed to a kettle and one tag fixed to a jig that has slots for a mug, cocoa scooper,and a spoon. Once these tags are found in the camera frame, there are two transformation trees describing where all the hot chocolate components are relative to the camera and where each link ofthe Franka robot arm is relative to the robot’s base. However, we need to connect these trees to get the location of each component relative to the robot’s base. This is where the calibration is used. An AprilTag must be placed in the robot’s gripper, aligned with the gripper’scoordinate frame and in view of the camera to calibrate. We then wrote a program that finds the location of the tagand relates it to the position of the base, connecting the robot frame to the camera frame. We thensave this transformation to a . yaml file to be used later on when running the main hot chocolatemaking sequence. After obtaining the transformation from the camera to the robot, the robot can now use the locationsof the two AprilTags to locate and manipulate the hot chocolate components as necessary. Motion Planning: Once the locations of all the components are known, it’s time to make hot chocolate. Cartesian pathsare used to move the robot in straight lines and rotational path planning is used for achieving motionslike tilting to grab the scoop and dumping the cocoa. Both Cartesian and rotational motion are used to achieve pouring. To make a cup of hot chocolate, the robot first turns on the kettle to heat the water, grab the cocoa scoop, pours it in a mug, pours the hot water over the powder, and stirs. We also used serval intermediate waypoints to help avoid reaching the joint limits of the robot. The Team:  Shantao Cao Allan Garcia-Casal Nicholas Marks James Oubre David Dorf "
    }, {
    "id": 7,
    "url": "http://localhost:4000/Pen/",
    "title": "",
    "body": "2022/09/15 - Programmed a Pincher X100 4-DOF robot arm to grasp a purple colored pen. Overview: I utilized an Intel Realsense D435i camera to locate a purple Northwestern pen and manipulate it using a Trossen PincherX 100 robot arm. To identify the pen’s position, I transformed the RGB image from the Realsense into an HSV image and employed the HSV values to identify all purple-hued pixels. Following this, I established a binary map where the identified pixels were depicted as white and all other pixels as black. Utilizing OpenCV’s contour detection, I determined the pixel coordinates of the pen’s centroid. This enabled me to ascertain the pen’s position in relation to the camera by utilizing the aligned depth image generated by the Realsense. Subsequently, I converted the pen’s position from the camera’s frame to that of the frame of the robot and directed the robot to maneuver towards the pen and seize it.  View it on Github: "
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