import actionType from '../action/actionType';

export const doIncrement = (num)=>{
    return {
        type: actionType.INCREMENT,
        payload:{
            num: num
        }
    }
}

export const doDecrement = (num) => {
    return {
        type: actionType.DECREMENT,
        payload:{
            num: num
        }
    }
}

export const doReset = () => {
    return {
        type: actionType.RESET
    }
}