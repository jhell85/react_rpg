export { changeState, storeState , initialCharacterState, healthPack};
/* eslint-disable no-unused-vars */

//how to store specific changes
const storeState = (initialState) => {
  let currentState = initialState;
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

//state modifier function
const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    });
  };
};

const initialCharacterState = function(props) {
  const obj = {
    characterType: props.characterType,
    hp: props.hpIncrease ? 15 : 10 ,
    mp: props.mpIncrease ? 15 : 10,
    hit: props.hitIncrease ? 15 : 10,
    defense: props.defenseIncrease ? 15 : 10,
    id: 0
  }
  return obj;
}

const healthPack = changeState("hp")(10);
const magicCreator = changeState("mp")(10);
const hitCreator = changeState("hit")(10);
const defenseCreator = changeState("defense")(10);

// const characterCreator = (characterType) => {
//   let character = {
//     characterType
//   };
//   return {...character,...healthCreator,...magicCreator, ...hitCreator,...defenseCreator}
// };

