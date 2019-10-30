function preload(){
  // put preload code here
}

var socket;

function setup() {
  createCanvas(windowWidth,windowHeight);

  socket = io();

  socket.on("mouseBroadcast", newDrawing);

  function newDrawing(receivedData){

	  fill('yellow');
	  ellipse(receivedData.x, receivedData.y, 10);
  }

  // put setup code here
  background('red');

}

function draw() {
  // put drawing code here
}

function mouseDragged() {
	fill('white');
	ellipse(mouseX, mouseY, 20);

	var sendData = {
		x:mouseX,
		y:mouseY
	}

	socket.emit('mouse', sendData);
}
