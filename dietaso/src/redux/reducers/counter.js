const initialState = {
    amount: 100,
};

export default (state = initialState,action) => {
    if(action.type === "DEPOSIT_MONEY"){
        return{
            ...state,
            amount: state.amount + 10
        };
    }

    if(action.type === "WITHDRAW_MONEY"){
        return{
            ...state,
            amount: state.amount - 10
        };
    }

    return state;
};
