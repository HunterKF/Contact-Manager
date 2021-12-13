const characterName = document.querySelector('#test_input');
const characterRelation = document.querySelector('#test2_input');
const testSubmit = document.querySelector('#test_submit');
const newCard = document.querySelector('#new_card');
const testBox = document.querySelector('#test_box');

let personName;
let personRelation;

const characterList = [ 
    {
        name: '',
        relation: ''
    }
]

let userData = [];

testSubmit.addEventListener('click', () => {
    let testBoxContent = '';
    console.log('hey from testSubmit');
    console.log(userData)
    userData.push({
      personName: characterName.value,
      personRelation: characterRelation.value,
    });
        console.log(userData)
    userData.forEach(({ personName, personRelation }) => {
      testBoxContent = `${testBoxContent}<br><h1>${personName} <br> ${personRelation}</h1>`
    })
    
    testBox.innerHTML = testBoxContent;
})