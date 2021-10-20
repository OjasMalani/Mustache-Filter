function preload() {
    //leave this empty
    }
    
    function setup() {
        canvas= createCanvas(350,350);
        canvas.center();
        video=createCapture(VIDEO);
        video.size(350,350);
        video.hide();
        poseNet= ml5.poseNet(video,modelLoaded);
        poseNet.on('Pose', gotPoses)
    }
    
    function draw() {
        image(video,0,0,350,350)
    }
    
    function take_snapshot() {
        save('myfilterimage.png');
    }
    
    function modelLoaded() {
        console.log('Pose Net is Initialised')
    }
    
    function gotPoses(results) {
        if(results.length>0) {
            console.log(results);
            console.log("Nose x=" + results[0].pose.nose.x);
            console.log("Nose y=" + results[0].pose.nose.y)
        }
    } 