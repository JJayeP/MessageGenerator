
//function to produce a random number between 0 and lengthOfArray-1
function getRandomIndex(lengthOfArray) {
    return Math.floor(Math.random()*lengthOfArray);
}

//function to return a random value from a given array
function getRandomValue(nameOfArray) {
    let index = getRandomIndex(nameOfArray.length);
    return nameOfArray[index];
}


const verbs = ['think', 'argue', 'ask', 'tell', 'earn', 'whisper', 'grab', 'escape', 'pack', 'turn', 'identify', 'protect', 'join', 'look', 'laugh', 'write', 'run', 'jump', 'explain', 'participate', 'focus', 'eliminate', 'explore', 'learn', 'forget', 'ignore', 'improve', 'fight', 'let', 'lie', 'know', 'agree', 'admit', 'become', 'watch', 'remember', 'put', 'consider']

const adjectives = ['nosy', 'moist','wet', 'angry', 'sad', 'brittle', 'aggressive', 'clever', 'silly', 'bold', 'amusing', 'artistic', 'attractive', 'creepy', 'aloof', 'wild', 'evil', 'clumsy', 'witty', 'confusing', 'sweet', 'ancient', 'tiny', 'rough', 'fuzzy', 'charming', 'patronizing', 'shaky', 'ripe', 'obnoxious', 'disgruntled']

const nouns = ['cat', 'dog', 'toilet', 'hamburger', 'pirate', 'criminal', 'mum', 'dad', 'student', 'teacher', 'grass', 'tree', 'computer', 'table', 'coffee', 'street', 'eye', 'evidence', 'garden', 'baby', 'house', 'thing', 'problem', 'game', 'book', 'friend', 'day', 'car', 'planet', 'weed', 'person', 'disc', 'piece of trash', 'driver', 'goose', 'horse', 'challenge', 'muffin', 'egg', 'mop', 'machine', 'mushroom', 'moon', 'tin can', 'banana', 'shed']

const adjectivesLy = ['noisily', 'moistly', 'wetly', 'angrily', 'sadly', 'bitterly', 'aggressively', 'cleverly', 'boldly', 'amusingly', 'artistically', 'attractively', 'creepily', 'aloofly', 'wildly', 'evilly', 'clumsily', 'confusingly', 'sweetly', 'anciently', 'roughly', 'fuzzily', 'charmingly', 'patronizingly', 'shakily', 'ripely', 'obnoxiously', 'disgruntledly']

let verb1 = ''
let verb2 = ''
let noun1 = ''
let noun2 = ''
let noun3 = ''
let adjective1 = ''
let adjective2 = ''
let adjectiveLy1 = ''

verb1 = getVerb();
verb2 = getVerb();
noun1 = getNoun();
noun2 = getNoun();
noun3 = getNoun();
adjective1 = getAdjective();
adjective2 = getAdjective();
adjectiveLy1 = getAdjectiveLy();

function getVerb() {
   return getRandomValue(verbs);
}

function getNoun() {
    return getRandomValue(nouns);
 }

 function getAdjective() {
    return getRandomValue(adjectives);
 }

 function getAdjectiveLy() {
    return getRandomValue(adjectivesLy);
 }

const sentenceA = 'You should '+verb1+' if you want to truly '+verb2+' '+noun1+'s.'

const sentenceB = `I suggest that you ${verb1} ${adjectiveLy1} if you aim to ${verb2} ${noun1}s.`

const sentenceC = `If you are a/an ${adjective1} ${noun1}, then go ${verb1} all ${noun2}s.`

const sentenceD = `Stay ${adjective1}, so you never ${verb1} a/an ${adjective2} ${noun1}.`

const sentenceE = `Don’t dare to ${verb1} a/an ${adjective1} ${noun1}; you will certainly ${verb2} yourself.`

const sentenceF = `Give ${noun1}s to ${verb1} ${noun2}s into ${adjective1} ${noun3}s. You will definitely ${verb2} it.`

const sentenceG = `Don’t be a/an ${adjective1} ${noun1}. No-one will ${verb1} you.`

const sentenceH = `Be a/an ${adjective1} ${noun1}’s friend, because they will always ${verb1} you.`

const sentenceI = `Have you considered whether you are a/an ${adjective1} ${noun1}? You seem like you should ${verb1} because of it.`

const sentenceJ = `If I were you, I would ${verb1} a ${noun1} and ${verb2} with it. You probably think it sounds like fun.`

const sentenceStructures = [sentenceA, sentenceB, sentenceC, sentenceD, sentenceE, sentenceF, sentenceG, sentenceH, sentenceI, sentenceJ]


let chosenSentence = ''

function getSentenceStructure() {
    chosenSentence = getRandomValue(sentenceStructures);
    return chosenSentence;
}


function getAdvice() {
    getSentenceStructure();
    return chosenSentence;
}

console.log(getAdvice());
