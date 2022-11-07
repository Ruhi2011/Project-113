function preload() {

}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    
}

function draw() {
    image(video, 210, 130, 250, 200);
    fill("black");
circle(50, 50, 60);
circle(590, 50, 60);
circle(50, 430, 60);
circle(590, 430, 60);
fill("cyan");
rect(80, 40, 480, 15);
rect(80, 420, 480, 15);
rect(40, 65, 15, 350);
rect(580, 65, 15, 350);
}

function take_snapshot() {
    save('student_name.png')
}

