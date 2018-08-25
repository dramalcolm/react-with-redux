import * as actionTypes from './actionTypes';

export const SaveResult = (res) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: res
    };
}

export const storeResult = (result) => {

    return function (dispatch){
        setTimeout(()=>{
            dispatch(SaveResult(result));
        },2000);
    }
};

export const deleteResult = (resultId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: resultId
    };
};