const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {

  const result = this.journeys.map((journey) => {
    return journey.startLocation;
  });

return result;
};

Traveller.prototype.getJourneyEndLocations = function () {

  const result = this.journeys.map((journey) => {
    return journey.endLocation;
  });

return result;

};

Traveller.prototype.getJourneysByTransport = function (transport) {

  const journeyByTransport = this.journeys.filter((journey) => {
    return journey.transport === transport;
  });
  return journeyByTransport;

};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {

  const journeyByTransport = this.journeys.filter((journey) => {
    return journey.distance > minDistance;
  });
  return journeyByTransport;

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

  let totalDistance = this.journeys.reduce((runningTotal, journey) => {
    return runningTotal + journey.distance;

  }, 0);
  return totalDistance;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  
  const unqiueTransport = this.journeys.map((journey) => {
    return journey.transport
  })
  return unqiueTransport.filter((value, index) => unqiueTransport.indexOf(value) === index)

};


module.exports = Traveller;
