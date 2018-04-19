import { createStore } from 'redux';
// import { combineReducers } from 'redux';

// const allReducers = combineReducers({
// 	users: UserReducer
// });

//actions page

const reducer = (state = {}, action) => {
  switch(action.type) {
  case 'SET_VAL':
    return {
      ...state,
      val: action.payload
      };
      
  case 'SET_ANS_VAL':
    return {
      ...state,
      ansVal: action.payload
      };

  case 'SET_ADMIN_VAL':
    return {
      ...state,
      adminVal: action.payload
      };

  case 'SET_STU_VAL':
  	return {
  		...state,
  		stuVal: action.payload
  		};

  case 'SET_INST_VAL':
    return {
      ...state,
      instVal: action.payload
      };
            
// Handle other actions here
default:
return state;
  }
};


const store = createStore(reducer);

export default store;
            
                