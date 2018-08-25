import * as actionTypes from '../actions'

const initialState = {
    results: [],
};

// Reducer
const reducer = (state = initialState, action) => {

    switch(action.type){
        case actionTypes.STORE_RESULT:
            return{
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})
            };
        case actionTypes.DELETE_RESULT:
            //const id = 2;
            //const newArr = [...state.results];
            //newArr.splice(id,1)
            //const updatedArray = state.results.filter(result => true); // this makes a copy as it return true for every elementtt
            const updatedArray = state.results.filter(result=> result.id !== action.resultID);
            return{
                ...state,
                results: updatedArray
            };                        
    }
    return state;

};

export default reducer;