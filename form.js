let input;
let button ;

function setup() {
  createCanvas(windowWidth, 200);
  background(18, 10, 55);
  
  input = createInput('');
  input.position(0, 40);
  input.style('font-size', '16px');
  input.style('color', '#ffffff');
  input.style('padding-left', '10px');
  input.style('border-radius', '20px 0px 0px 20px');
  input.style('border', '1px solid #ffffff');
  input.style('background-color', '#120A37');
  input.size(windowWidth / 3, 40)

  let backCol = color(239,134,102); //button background color
  let col = color(18, 10, 55); //button font color

  button = createButton('SUBMIT');
  button.position(input.x + input.width - 2, 40);
  button.style('font-size', '18px');
  button.style('font-weight', '600');
  button.style('color', col);
  button.style('border', 'none')
  button.style('border-radius', '0px 20px 20px 0px');
  button.style('background-color', backCol);
  button.mousePressed(response);
  button.size(108, 44);
}


function response() {
  const time = input.value();
  const result = round(time * 1825 / 43800 * 100, 0);
  this.value();
  
  let track = createSpan('You are on track to spend');
  let percentage = createSpan(result + '%');
  let ofThe = createSpan('of the next')
  let year = createSpan('5 years');
  let reWatch = createSpan('re-watching shows');
  
  track.style('color', '#ffffff');
  track.style('font-size', '22px');
  track.style('font-family', 'Lato');
  track.position(100, 110, 'fixed');
  
  percentage.style('color', '#EF8666');
  percentage.style('font-size', '36px');
  percentage.style('font-family', 'Lato');
  percentage.style('background-color', '#120A37');
  percentage.position (350, 97, 'fixed');
  
  ofThe.style('color', '#ffffff');
  ofThe.style('font-size', '22px');
  ofThe.style('font-family', 'Lato');
  ofThe.position(100, 150, 'fixed');
  
  year.style('color', '#EF8666');
  year.style('font-size', '36px');
  year.style('font-family', 'Lato');
  year.position (210, 137, 'fixed');
  
  reWatch.style('color', '#ffffff');
  reWatch.style('font-size', '22px');
  reWatch.style('font-family', 'Lato');
  reWatch.position(330, 150, 'fixed');
  
  noStroke();
  fill('#605873');
  rect(0, 110, 85, 70);
  fill('#EF8666');
  rect(0, 110, result, 70);
  

}