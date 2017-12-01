console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  // inside, add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
var middleEarth = document.createElement("section");
middleEarth.setAttribute("id", "middle-earth");
for (var i = 0; i < lands.length; i++) {
  var newLands = document.createElement("article");
  var oldLands = document.createElement("h1");
  console.log(oldLands);
  oldLands.innerHTML = lands[i];
  newLands.appendChild(oldLands);
  middleEarth.appendChild(newLands);
  body.appendChild(middleEarth);
}

}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit
var shireHobbits = document.createElement("ul"); 
shireHobbits.setAttribute("id", "smallBoys"); 
for (var i = 0; i < hobbits.length; i++) {
  var hobbitName = document.createElement("li");
  hobbitName.innerHTML = hobbits[i];
  console.log(hobbitName);
  hobbitName.className = "hobbit";
  var shire = document.querySelector('article');
  shireHobbits.appendChild(hobbitName);
  shire.appendChild(shireHobbits);

}

}

makeHobbits();

// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
var ring = document.createElement("div");
ring.setAttribute("id", "the-ring")
ring.setAttribute("class", "magic-imbued-jewelry")
ring.addEventListener("click", function(){ nazgulScreech();});
var myHobbits = document.getElementsByClassName("hobbit");
console.log(myHobbits);
var frodo = myHobbits[0];
console.log(frodo);
frodo.appendChild(ring); 




}
keepItSecretKeepItSafe();
// Part 4


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
var buddy = document.createElement("aside");
buddy.setAttribute("id", "theMen");
var friends = document.createElement("ul");
buddy.appendChild(friends);
console.log(buddy);
for (var i = 0; i < buddies.length; i++) {
  var efdw = document.createElement("li");
  efdw.setAttribute("id", buddies[i])
  friends.appendChild(efdw);
  efdw.innerHTML = buddies[i];
  var rivendell = document.querySelectorAll('article')[1];
  rivendell.appendChild(buddy);
}


}

makeBuddies();

// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
var anduril = document.getElementById("Strider");
console.log(anduril);
anduril.innerHTML = "Aragorn";

}

beautifulStranger()
// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
var children = document.getElementById("smallBoys");
var elfVillage = document.querySelectorAll('article')[1];
elfVillage.appendChild(children);


}

leaveTheShire()

// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
var fellow = document.createElement("div");
fellow.setAttribute("id", "the-fellowship");
let theLength = 0
if (hobbits.length > buddies.length) {
   theLength = hobbits.length
} else {
   theLength = buddies.length
}
for (let i = 0; i < theLength; i++) {
  let buddyChild = document.createElement("p")
  buddyChild.innerHTML = buddies[i]
  let hobbitChild = document.createElement("p")
  hobbitChild.innerHTML = hobbits[i]
  let rivendell = document.querySelectorAll("article")[1];
  if (buddies[i]) {
    alert("Buddy" + " " + buddies[i] + " " + "has joined your party")
    rivendell.appendChild(buddyChild)
  }
  if (hobbits[i]) {
    alert("Hobbit" + " " + hobbits[i] + " " + "has joined your party")
    rivendell.appendChild(hobbitChild)
  }
}





}

forgeTheFellowShip()

// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
var wizard = document.getElementById("Gandalf");
console.log(wizard);
wizard.innerHTML = "Gandalf the White";
}

theBalrog()

// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
