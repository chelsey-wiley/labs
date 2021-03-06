//Data taken from https://en.wikipedia.org/wiki/List_of_Seleucid_rulers

var apiResult = {
  rulers: [
    {
      name: 'Seleucus I Nicator',
      startReign: 305,
      endReign: 281,
      consort: ['Apama']
    },
    {
      name: 'Antiochus I Soter',
      startReign: 281,
      endReign: 261,
      consort: ['Stratonice of Syria']
    },
    {
      name: 'Antiochus II Theos',
      startReign: 261,
      endReign: 246,
      consort: ['Laodice I', 'Berenice']
    },
    {
      name: 'Seleucus II Callinicus',
      startReign: 246,
      endReign: 225,
      consort: ['Laodice II']
    },
    {
      name: 'Seleucus III Ceraunus',
      startReign: 225,
      endReign: 223,
      consort: []
    },
    {
      name: 'Antiochus III the Great',
      startReign: 223,
      endReign: 187,
      consort: ['Laodice III', 'Euboea of Chalcis']
    },
    {
      name: 'Seleucus IV Philopator',
      startReign: 187,
      endReign: 175,
      consort: ['Laodice IV']
    },
    {
      name: 'Antiochus IV Epiphanes',
      startReign: 175,
      endReign: 163,
      consort: ['Laodice IV']
    },
    {
      name: 'Antiochus V Eupator',
      startReign: 163,
      endReign: 161,
      consort: []
    },
    {
      name: 'Demetrius I Soter',
      startReign: 161,
      endReign: 150,
      consort: ['Apama', 'Laodice V']
    },
    {
      name: 'Alexander I Balas',
      startReign: 150,
      endReign: 145,
      consort: ['Cleopatra Thea']
    },
    {
      name: 'Demetrius II Nicator',
      startReign: 145,
      endReign: 138,
      consort: ['Cleopatra Thea']
    },
    {
      name: 'Antiochus VI Dionysus',
      startReign: 145,
      endReign: 140,
      consort: []
    },
    {
      name: 'Diodotus Tryphon',
      startReign: 140,
      endReign: 138,
      consort: []
    },
    {
      name: 'Antiochus VII Sidetes',
      startReign: 138,
      endReign: 129,
      consort: ['Cleopatra Thea']
    },
    {
      name: 'Demetrius II Nicator',
      startReign: 129,
      endReign: 126,
      consort: ['Cleopatra Thea']
    },
    {
      name: 'Alexander II Zabinas',
      startReign: 129,
      endReign: 123,
      consort: []
    },
    {
      name: 'Cleopatra Thea',
      startReign: 126,
      endReign: 121,
      consort: []
    },
    {
      name: 'Seleucus V Philometor',
      startReign: 126,
      endReign: 125,
      consort: []
    },
    {
      name: 'Antiochus VIII Grypus',
      startReign: 125,
      endReign: 96,
      consort: ['Tryphaena of Egypt', 'Cleopatra Selene I of Egypt']
    },
    {
      name: 'Antiochus IX Cyzicenus',
      startReign: 114,
      endReign: 96,
      consort: ['Cleopatra IV of Egypt', 'Cleopatra Selene I of Egypt']
    },
    {
      name: 'Seleucus VI Epiphanes Nicator',
      startReign: 96,
      endReign: 95,
      consort: []
    },
    {
      name: 'Antiochus X Eusebes Philopator',
      startReign: 95,
      endReign: 92,
      consort: []
    },
    {
      name: 'Demetrius III Eucaerus',
      startReign: 95,
      endReign: 87,
      consort: []
    },
    {
      name: 'Antiochus XI Epiphanes Philadelphus',
      startReign: 95,
      endReign: 92,
      consort: []
    },
    {
      name: 'Philip I Philadelphus',
      startReign: 95,
      endReign: 84,
      consort: []
    },
    {
      name: 'Antiochus XII Dionysus',
      startReign: 87,
      endReign: 84,
      consort: []
    },
    {
      name: 'Tigranes I of Armenia',
      startReign: 83,
      endReign: 69,
      consort: []
    },
    {
      name: 'Seleucus VII Kybiosaktes',
      startReign: 83,
      endReign: 69,
      consort: []
    },
    {
      name: 'Antiochus XIII Asiaticus',
      startReign: 69,
      endReign: 64,
      consort: []
    },
    {
      name: 'Philip II Philoromaeus',
      startReign: 65,
      endReign: 63,
      consort: []
    }
  ]
}


//Write a function that returns all kings with 2 consorts

function twoConsorts(data){
  var output = []

  for (var i=0; i<data.rulers.length; i++){
    var theConsort = data.rulers[i];
    // console.log(theConsort);
    if (theConsort.consort.length === 2){
    output.push(theConsort);
    }
  }
  return output;
}

var result = twoConsorts(apiResult);
// console.log(result)


//Write a function that returns all kings with 0 consorts

function zeroConsorts(data){
  var outputZero = [];

  for (var i=0; i<data.rulers.length; i++){
    var noConsort = data.rulers[i];
    if (noConsort.consort.length === 0){
      outputZero.push(noConsort);
    }
  }
  return outputZero;
}

var resultOfZeroConsorts = zeroConsorts(apiResult);
// console.log(resultOfZeroConsorts);

//Once those two are complete, refactor so that they can both use the same function

function numOfConsorts (data, number){
  var outputRefactorOne = [];
  for (var i=0; i<data.rulers.length; i++){
    var consortNumber = data.rulers[i];
    if (consortNumber.consort.length === number){
      outputRefactorOne.push(consortNumber);
    }
  }
return outputRefactorOne;
}

var resultOfRefactorOne = numOfConsorts (apiResult, 0);
var resultOfRefactorOne = numOfConsorts (apiResult, 2);
// console.log(resultOfRefactorOne);

//Write a function that returns the king with the longest name
function longName (data){
  var outputLongName = data.rulers[0];

  for (var i=1; i<data.rulers.length; i++){

    var ruler = data.rulers[i];

    if (ruler.name.length > outputLongName.name.length){
      kingName = ruler
    }

  }
  return outputLongName;
}

var resultOfLongName = longName(apiResult);

// console.log(resultOfLongName);

//Write a function that takes a consorts name and returns all the kings she was consort with

function consortWithKing(data, consort) {
  var outputForConsort = [];

  for (var i = 0; i < data.rulers.length; i++) {
    var ruler = data.rulers[i];

    for (var a = 0; a < ruler.consort.length; a++) {
      if (ruler.consort[i] === consort) {
        outputForConsort.push(ruler);
      }
    }
  }
  return outputForConsort;
}
var resultOfConsortWithKing = consortWithKing(apiResult, "Apama");
// console.log(resultOfConsortWithKing);

//-------------------------

function rulerWithConsortCleo(data) {
  var outputOfConsortCleo = [];

  for (var i = 0; i < data.rulers.length; i++) {
    var ruler = data.rulers[i];

  for (var a = 0; a < ruler.consort.length; a++) {
    if (ruler.consort[a].indexOf('Cleopatra') != -1) {
      outputOfConsortCleo.push(ruler);
      }
    }
  }
  return outputOfConsortCleo;
}
var resultofConsortCleo =rulerWithConsortCleo(apiResult);
// console.log(resultofConsortCleo);


//Write a function that returns all kings with a consort whose name contains "Laodice"

function rulersWithConsortLao(data) {
  var outputOfConsortLao = [];

  for (var i = 0; i < data.rulers.length; i++) {
    var ruler = data.rulers[i];

    for (var a = 0; a < ruler.consort.length; a++) {

      if (ruler.consort[a].indexOf('Laodice') != -1) {
        outputOfConsortLao.push(ruler);
    }
  }
}
  return outputOfConsortLao;
}
var resultOfRulersWithLao =rulersWithConsortLao(apiResult);

// console.log(resultOfRulersWithLao);

//Once those two are complete, refactor so that they can both use the same function

function consortsWithNames(data, consortName) {
  var outputOfConsortWithNames = [];

  for (var i = 0; i < data.rulers.length; i++) {
    var ruler = data.rulers[i];

    for (var a = 0; a < ruler.consort.length; a++) {
      if (ruler.consort[a].indexOf(consortName) != -1) {
        outputOfConsortWithNames.push(ruler);
      }
    }
  }
  return outputOfConsortWithNames;
}

// var resultConsortLao = consortsWithNames(apiResult, 'Laodice');
// var resultConsortCleo = consortWithNames(apiResult, 'Cleopatra');
// console.log(resultConsortLao);
