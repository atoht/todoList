const defaultState = {
    inputValue: 'asda',
    list: ['阿斯顿','adwqwd']
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    if(action.type === 'input_value_change') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if (action.type === 'todo_item_add') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if(action.type === 'todo_item_delete') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.value, 1);
        return newState;
    }
    return state;
}