function setup() {
  noLoop();
  createCanvas(3000, 3000);
  //noiseSeed(120000)

  //background(color(0, 0, 255));
  // noprotect();
}

function draw() {


  noSmooth();

  //Settings for drawing(these are the default values)

  //Set Cell Stroke Weight
  voronoiCellStrokeWeight(0);
  //Set Site Stroke Weight
  voronoiSiteStrokeWeight(0);
  //Set Cell Stroke
  voronoiCellStroke(0);
  //Set Site Stroke
  voronoiSiteStroke(0);
  //Set flag to draw Site
  voronoiSiteFlag(false);

  //Sets 30 random sites with 50 minimum distance to be added upon computing
  //Please note that this method is just for testing, you should use your own
  //method for placing random sites with minimum distance
  voronoiRndSites(2000, 0);

  //Add array of custom sites
  // voronoiSites([[5,5],[10,5],[15,5]]);

  //Add array of custom sites with custom colors associated (255 = white)

  
  var continentArray = [];
  var cont1x =  Math.floor(random(100,200));
  var cont1y =  Math.floor(random(100,200));

  for(i=0;i<50; i++){
    var xoff =  Math.floor(noise(0,1000));
    var yoff = Math.floor(random(0,1000));
    continentArray.push([cont1x+xoff+i,cont1y,255])
  }
  voronoiSites(continentArray);
  voronoiSites([[400,cont1y+10,255],[400,cont1y,255],[400,cont1y+20,255]]);

  //Remove custom site with coordinates 15,5
  // voronoiRemoveSite(15, 5);

  //Remove custom site with index 0 (in this case it's the site with coordinates [5,5])
  // voronoiRemoveSite(0);

  //Add custom site with coordinates i*30,50
  //top border of map
  for (var i = 0; i < width; i++) {
    voronoiSite(i * 30, 0, color(0, 0, 255));
  }

  //left border of map
  for (var i = 0; i < height; i++) {
    voronoiSite(0, i * 30, color(0, 0, 255));
  }

  //right border of map
  for (var i = 0; i < height; i++) {
    voronoiSite(3000, i * 30, color(0, 0, 255));
  }

  //right border of map
  for (var i = 0; i < 3000; i++) {
    voronoiSite(i * 30, width, color(0, 0, 255));
  }

  // for (x = 0; x < 50; x++) {
  //   for (y = 0; y < 50 ; y++) {
  //     var c = 255 * noise(0.009 * x, 0.009 * y);
  //     voronoiSite(x*30, y*30,c);
  //   }
  // }
  //Add custom site with custom color at coordinates 50,100 (255 = white)
  // voronoiSite(50, 100, 255);

  //Clear custom sites (does not clear random sites)
  //voronoiClearSites();

  //Jitter Settings (These are the default settings)

  //Maximum distance between jitters
  voronoiJitterStepMax(10);
  //Minimum distance between jitters
  voronoiJitterStepMin(0);
  //Scales each jitter
  voronoiJitterFactor(2);
  //Jitter edges of diagram
  voronoiJitterBorder(true);

  //Compute voronoi diagram with size 700 by 500
  //With a prepared jitter structure (true)
  waterColor = color(0, 0, 255);
  terrainColor = color(210, 180, 140);
  voronoi(3000, 3000, true, waterColor, terrainColor);

  //Get the raw diagram, for more advanced use
  //This is purely to get information, doesn't change the diagram
  //https://github.com/gorhill/Javascript-Voronoi
  // var diagram = voronoiGetDiagram();
  // console.log(diagram);

  //Get simplified cells without jitter, for more advanced use
  // var normal = voronoiGetCells();
  // console.log(normal);

  //Get simplified cells with jitter, for more advanced use
  // var jitter = voronoiGetCellsJitter();
  // console.log("jitter" + jitter);

  voronoiDraw(0, 0, true, true);

}