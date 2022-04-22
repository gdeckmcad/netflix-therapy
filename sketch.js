let table;

function preload() {
  table = loadTable("ViewingActivity - ViewingActivity.csv", "csv", "header");
}

function setup() {
  createCanvas(windowWidth, 655);
  background(18, 10, 55);

  //find the rows containing TV shows
  let office = table.findRows('The Office (U.S.)', 'Show');
  print(office.length + ' Episodes of The Office watched');
  noStroke();
  fill(255, 110, 174, 175);
  circle(windowWidth / 2, 239, office.length/7);
  
  let parks = table.findRows('Parks and Recreation', 'Show');
  print(parks.length + ' Episodes of Parks and Recreation watched');
  fill(171, 153, 231, 175);
  circle(windowWidth / 3, 361, parks.length/7);
  
  let newgirl = table.findRows('New Girl', 'Show');
  print(newgirl.length + ' Episodes of New Girl watched');
  fill(126, 171, 183, 175);
  circle(windowWidth / 1.4, 300, newgirl.length/7);

  let gilmore = table.findRows('Gilmore Girls', 'Show');
  print(gilmore.length + ' Episodes of Gilmore Girls watched');
  fill(243, 135, 104, 175);
  circle(windowWidth / 1.87, 500, gilmore.length/7);
  
  let creek = table.findRows('Schitt\'s Creek', 'Show');
  print(creek.length + ' Episodes of Schitt\'s Creek watched');
  fill(102, 171, 212, 175);
  circle(windowWidth / 1.5, 40, creek.length/5);

}