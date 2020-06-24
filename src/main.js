import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { storeState, initialCharacterState, changeState, healthPack } from './rpg';

$(document).ready(function() {
  let counter = 0;
  let characters = [];
  // This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect.
  $('#createWizard').click(function() {
    counter += 1;
    const mywizard = initialCharacterState({characterType:"Wizard", mpIncrease: true, id: counter });
    characters.push({character: storeState(mywizard), id:counter});
    $('.character-values').append(`<div class='pr-5 col-4-md id='wizard-${counter}'>` +
                                  "<h3>Wizard</h3>" +
                                  `<h3>HP:<div id='hp-${counter}'></div></h3>` +
                                  `<h3>Defense:<div id='defense-${counter}'></div></h3>` +
                                  `<h3>Hit:<div id='hit-${counter}'></div></h3>` +
                                  `<h3>MP:<div id='mp-${counter}'></div></h3>` +
                                  `<button class="btn-success health" id='healthPack-${counter}'>healthpack</button>` +
                                  "</div");
    $(`#wizard-hp-${counter}`).text(mywizard.hp);
    $(`#wizard-defense-${counter}`).text(mywizard.defense);
    $(`#wizard-hit-${counter}`).text(mywizard.hit);
    $(`#wizard-mp-${counter}`).text(mywizard.mp);

    
  });
  $('body').on('click', 'health', function() {
   let id = this.id;
   console.log(id);
   const character = characters.find(element => element.id === id)

    // (`#hp-${self.id}`).text
    console.log('function ran');
    const healthPack = changeState("hp")(5);
    const newHealth = character.character(healthPack);
    $(`#hp-${id}`).text(newHealth.hp)
    // debugger;
  });

  $('#createWarrior').click(function() {
    const mywarrior = initialCharacterState({characterType:"Warrior", hitIncrease: true});
    counter += 1;
    characters.push(storeState(mywarrior));
    $('.character-values').append(`<div class='pr-5 col-4-md id='warrior-${counter}'>` +
                                  "<h3>Warrior</h3>" +
                                  `<h3>HP:<div id='hp-${counter}'></div></h3>` +
                                  `<h3>Defense:<div id='defense-${counter}'></div></h3>` +
                                  `<h3>Hit:<div id='hit-${counter}'></div></h3>` +
                                  `<h3>MP:<div id='mp-${counter}'></div></h3>` +
                                  "</div");
    $(`#warrior-hp-${counter}`).text(mywarrior.hp);
    $(`#warrior-defense-${counter}`).text(mywarrior.defense);
    $(`#warrior-hit-${counter}`).text(mywarrior.hit);
    $(`#warrior-mp-${counter}`).text(mywarrior.mp);

  });

  $('#createDragon').click(function() {
    const mydragon = initialCharacterState({characterType:"Dragon", defenseIncrease: true});
    counter += 1;
    characters.push(storeState(mydragon));
    $('.character-values').append(`<div class='pr-5 col-4-md id='dragon-${counter}'>` +
                                  "<h3>Dragon</h3>" +
                                  `<h3>HP:<div id='hp-${counter}'></div></h3>` +
                                  `<h3>Defense:<div id='defense-${counter}'></div></h3>` +
                                  `<h3>Hit:<div id='hit-${counter}'></div></h3>` +
                                  `<h3>MP:<div id='mp-${counter}'></div></h3>` +
                                  "</div");
    $(`#dragon-hp-${counter}`).text(mydragon.hp);
    $(`#dragon-defense-${counter}`).text(mydragon.defense);
    $(`#dragon-hit-${counter}`).text(mydragon.hit);
    $(`#dragon-mp-${counter}`).text(mydragon.mp);
  });
  
});