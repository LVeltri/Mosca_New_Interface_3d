var points=[];
var pointer=[];
var selectPoint;
function setup() {
  createCanvas(400, 400);
  		// Create a new plot and set its position on the screen
  		seed = 100 * random();
    selectPoint = createSelect('');
    selectPoint.position(10,10);
    for(let i = 0;i<101;i++){
    selectPoint.option(i);
      pointer[i] = new pointSave(i,10);
    }
		
}

function draw() {
  background(220);
	for (i = 0; i < 100; i++) {
		points[i] = new GPoint(pointer[i].x,pointer[i].y);
	}
  // console.log(mouseX);
    // points[0] = new GPoint(pointer[0].x,1);
  if(mouseIsPressed && mouseX > 70){
    pointer[selectPoint.value()].x = mouseX;
    pointer[selectPoint.value()].y = map(mouseY,70,400,100,-100);
  }
		plot = new GPlot(this);
		plot.setPos(0, 0);
		plot.setOuterDim(width, height);

		// Add the points
		plot.setPoints(points);

		// Set the plot title and the axis labels
		plot.setTitleText("A very simple example");
		plot.getXAxis().setAxisLabelText("x axis");
		plot.getYAxis().setAxisLabelText("y axis");

		// Draw it!
    plot.defaultDraw();
}


class pointSave{
  constructor(_x,_y){
    this.x = _x;
    this.y = _y;
  }
}