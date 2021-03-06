//Data taken from https://en.wikipedia.org/wiki/List_of_Seleucid_rulers

var dataset = {
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

//-------------------------
// Reducing practice
//-------------------------

// Create a function that calculates the total consorts. Requirement: you must use reduce
function totalConsorts(data){
 var output = data.rulers.reduce(function(sum, item){
   return sum + item.consort.length;
 }, 0);

 return output;
}

var result = totalConsorts(dataset);
// console.log('it works!', result);

// Use the function you just created to calculate the average number of consorts

function totalConsorts(data){
 var output = data.rulers.reduce(function(sum, item){
   return sum + item.consort.length;
 }, 0);

 var avg = output/data.rulers.length;
  return avg;
}

var result = totalConsorts(dataset);
// console.log('it works. The answer is', result);



// Create a function that counts how many rulers are the second ruler with that name in the dynasty. Requirement: use reduce USE II as your indexOf search. Must have space before and after II or it will also search things like VII

function secondRuler(data) {
  var output = data.rulers.reduce(function(sum, ruler) {
    if (ruler.name.indexOf(' II ') !== -1) {
      return sum + 1;}
      else {
        return sum;
      }
  },0);
  return output;
}

var result = secondRuler(dataset);
// console.log('it works. The result of II is', result);


// Create a function that counts how many rulers are the third ruler with that name in the dynasty. Requirement: use reduce

function thirdRuler(data){
  var output = data.rulers.reduce(function(sum, ruler){
    if (ruler.name.indexOf(' III ') !== -1 ){
      return sum + 1;}
      else {
        return sum;
      }
  }, 0);
  return output;
}

var result = thirdRuler(dataset);
// console.log ('the result of II is', result);

// Create a function that calculates the total years that all the rulers ruled. Requirement: you must use reduce.

function totalYears(data) {
  var output = data.rulers.reduce(function(sum, ruler) {
    return sum + (ruler.startReign - ruler.endReign);
  }, 0);
  return output;
}

var result = totalYears(dataset);
// console.log('it works! The result of totalYears is', result);


// Use the function you just created to calculate the average length of the all the rulers' reign

function avgTotalYears(data) {
  var output = data.rulers.reduce(function(sum, ruler) {
    return sum + (ruler.startReign - ruler.endReign);
  }, 0);
  var avg = output/data.rulers.length;
   return avg;
}

var result = avgTotalYears(dataset);
// console.log('it works! The average is', result);

//-------------------------
// Mapping practice
//-------------------------

// Write a function that will take this data and return just an array of the ruler's names. Requirement: use map.

function Names(data) {
  var output = data.rulers.map(function(item) {
    return item.name;
  });
  return output;
}
  var result = Names(dataset);
  // console.log('it works all the names are here',result);

// Write a function that will take this data and return just an array of the lengths of each ruler's rule. Requirement: use map.


function theLength(data) {
  var output = data.rulers.map(function(item) {
    return (item.startReign - item.endReign)
  });
  return output;
}
  var result = theLength(dataset);
  // console.log('it works the lengths of the rulers are:', result);

// Write a function that will take this data and return a new array of objects that has all the same data, plus each object needs to have a new property called "lengthOfReign" which should have the length of the ruler's reign in years. Requirement: use map.

 function newArr(data) {
  var output = data.rulers.map(function(item) {
    return {
      name: item.name,
      startReign: item.startReign,
      endReign: item.endReign,
      consort: item.consort,
      totalReign: (item.startReign - item.endReign)
    }

  });
  return output;
}
  var result = newArr(dataset);
  // console.log('newArr works', result);

// Write a function that will take this data and return a new array of objects that has the name of the ruler and a property called "numberOfConsorts", which should have the total number of consorts that the ruler had. Requirement: use map.

function newArrWithConsorts(data) {
  var output = data.rulers.map(function(item) {
    return {
      name: item.name,
      numberOfConsorts: item.consort.length
    }
  });
  return output;
}
  var result = newArrWithConsorts(dataset);
  // console.log('it works the newArrWithConsorts is:', result);

// Write a function that will take this data and return an array of strings in this format: "{name} ({startReign}-{endReign} BCE)" (e.g. "Seleucus I Nicator (305-281 BCE)"). Requirement: use map.



function theStrings(data) {
  var output = data.rulers.map(function(item) {
    return item.name + " " + "(" + item.startReign + "-" + item.endReign + " " + "BCE" + ")";
  });
  return output;
}
  var result = theStrings(dataset);
  // console.log('it works! theString result is: ', result);
  //Not sure about the formatting. It seems there should be an easier way to do this.
