const characterName = document.querySelector('#name');
const characterDate = document.querySelector('#log_date');
const characterInfo = document.querySelector('#friend_info');
const submitButton = document.querySelector('.finish-button');

const character = {
    name: "",
    relationship: "",
    data: "",
    info: ""
};

function getName () {
    return characterName.value;
}
function getDate () {
    return characterDate.value;
}
function getInfo () {
    return characterInfo.value;
}
function createNewCard () {
    getInfo();
    getDate();
    getName();
    const newCard = {
        name: getName(),
        relationship: "Friend",
        data: getDate(),
        info: getInfo()
    };
    console.log(newCard);
    return newCard;
}

class CharacterCard {
    constructor(name, relationship, date, info) {
        this.name = name;
        this.relationship = relationship;
        this.date = date;
        this.info = info;
    }
}

// All of this below here is a WIP

submitButton.addEventListener('click', () => {
    submitButton.style.color = 'violet';
    createNewCard();
    closeModal();
})
function Person(name, relationship, date, info) {
    this.name = name;
    this.relationship = relationship;
    this.date = date;
    this.info = info;
}

const sarahPark = new Person(getName, "Friend", getDate(), getInfo());

// Learn constructors for this, 
// make a constructor for each card,then push the card into an array. 
// Learn .map too, map returns an array
// 
// const games = [
//     {
//         title: zelda;
//         score: 76;
//     }
// ]

// const mappedArray = games.map((game) () => {
//     <h1>${game.title}</h1>
// })
// Check photo for comments. basically, you have to make an array, 
// then push people objects into that array, then call it into const with .map, 
// and then grab the people in the mapped array. 
