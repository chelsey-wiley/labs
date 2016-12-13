//Data taken from https://en.wikipedia.org/wiki/List_of_Seleucid_rulers

var apiResult = {
  rulers: [
    {
      name: 'Seleucus I Nicator',
      startReign: 305,
      endReign: 281,
      consort: 'Apama'
    },
    {
      name: 'Antiochus I Soter',
      startReign: 281,
      endReign: 261,
      consort: 'Stratonice of Syria'
    },
    {
      name: 'Antiochus II Theos',
      startReign: 261,
      endReign: 246,
      consort: 'Laodice I'
    },
    {
      name: 'Seleucus II Callinicus',
      startReign: 246,
      endReign: 225,
      consort: 'Laodice'
    },
    {
      name: 'Seleucus III Ceraunus',
      startReign: 225,
      endReign: 223,
      consort: ''
    },
    {
      name: 'Antiochus III the Great',
      startReign: 223,
      endReign: 187,
      consort: 'Laodice III'
    },
    {
      name: 'Seleucus IV Philopator',
      startReign: 187,
      endReign: 175,
      consort: 'Laodice IV'
    },
    {
      name: 'Antiochus IV Epiphanes',
      startReign: 175,
      endReign: 163,
      consort: 'Laodice IV'
    },
    {
      name: 'Antiochus V Eupator',
      startReign: 163,
      endReign: 161,
      consort: ''
    },
    {
      name: 'Demetrius I Soter',
      startReign: 161,
      endReign: 150,
      consort: 'Apama'
    },
    {
      name: 'Alexander I Balas',
      startReign: 150,
      endReign: 145,
      consort: 'Cleopatra Thea'
    },
    {
      name: 'Demetrius II Nicator',
      startReign: 145,
      endReign: 138,
      consort: 'Cleopatra Thea'
    }
  ]
}



//write a function that returns all kings named "Seleucus"


function kingsNamedSelecus(data){           //1
    var output = []; //3 --- creates bucket to store

    for (var i = 0; i< data.rulers.length; i++){ //4 --- loop throug
      var ruler = data.rulers[i]; //6  gives me the ruler
      // console.log(ruler.name);
      if (ruler.name.indexOf('Seleucus') != -1){  //7 ---- something there w Seleucus
        output.push(ruler); // 8 moves into new array stored in variable called output
      }
    }

    return output;   //5
}

var result = kingsNamedSelecus(apiResult);  //2
// console.log(result); //9 see result with node


//refactoring:
// var result = rulersByName('Seleucus') -- can remove the whole function kingsNamedSelecus refactoring


//write a function that returns all kings named "Antiochus"

function kingsNamedAntiochus(data){
  var OutputSecondLab = [];

  for (var i=0; i< data.rulers.length; i++){
    var rulerCalledA = data.rulers[i];
    // console.log (rulerCalledA.name);

    if (rulerCalledA.name.indexOf('Antiochus') !=-1){
      OutputSecondLab.push(rulerCalledA);
    }
  }
  return OutputSecondLab;
}

var result = kingsNamedAntiochus(apiResult);
// console.log(result);
//refactoring:
//var result = rulersByName('Antiochus') -- can remove the whole function kingsNamedAntiochus thanks to refactoring

//Once those two are complete, refactor so that they can both use the same function -- must pass in king name
//see lined 124 and 104 for refactoring

function rulersByName (data, kingName) {
  var outputRefactor = [];
  for (var i=0; i< data.rulers.length; i++){
    var ruler = data.rulers[i];
    if (ruler.name.indexOf(kingName) != -1){
      outputRefactor.push(ruler);
    }
  }
  return outputRefactor;
}

result = rulersByName(apiResult, 'Seleucus');
console.log(result)

//write a function that counts the rulers with a consort named "Laodice"

function kingsWithLaodice(data){
  var OutputThirdLab = [];

  for (var i=0; i<data.rulers.length; i++){
    var consortOfLaodice = data.rulers[i];
    // console.log(consortOfLaodice.consort);

    if (consortOfLaodice.consort.indexOf('Laodice') != -1){
      OutputThirdLab.push(consortOfLaodice);
    }
  }
  return OutputThirdLab;
}

var result = kingsWithLaodice(apiResult);
// console.log(result);


//write a function that counts the rulers with a consort named "Apama"

function kingsWithApama(data){
  var OutputForthLab = [];

  for (var i=0; i<data.rulers.length; i++){
    var consortOfApama = data.rulers[i];
    //console.log(consortOfApama;)

    if (consortOfApama.consort.indexOf('Apama')!= -1){
      OutputForthLab.push(consortOfApama);
    }
  }
  return OutputForthLab;
}

var result = kingsWithApama(apiResult);
// console.log(result);

//Once those two are complete, refactor so that they can both use the same function

  function rulersByConsort (data, consortName){
    var outputRefactorConsort = [];
    for (var i=0; i<data.rulers.length; i++)
      var ruler = data.rulers[i];
      if (ruler.consort.indexOf('consortName') != -1){
        outputRefactorConsort.push(ruler);
      }
    return outputRefactorConsort;
  }

  result = rulersByConsort(apiResult,'Apama');
  result = rulersByConsort(apiResult, 'Laodice');
  // console.log(result);
//-------------------------


//write a function that returns the rulers who reigned more than five years

function overFive(data) {
  var outputOverFive =[];

  for (var i = 0; i < data.rulers.length; i++) {
    var ruler = data.rulers[i];

    if (ruler.startReign - ruler.endReign >= 5 ) {
      outputOverFive.push(ruler);
    }
  }
  return outputOverFive
}

var result = overFive(apiResult);
//console.log(result);

//write a function that returns the rulers who reigned more than twenty years

function overTwenty(data){
  var outputOverTwenty = [];

  for (var i = 0; i < data.rulers.length; i++){
    var ruler = data.rulers[i];
    if (ruler.startReign - ruler.endReign >= 20){
      outputOverTwenty.push(ruler);
    }
  }
  return outputOverTwenty
}

var result = overTwenty(apiResult);
console.log(result)
//Once those two are complete, refactor so that they can both use the same function
