function posts(state = [], action) {
    switch(action.type) {
        case 'INCREMENT_LIKES':
            const i = action.index;
            return [
                ...state.slice(0, i), // everything before the index
                {...state[i], likes: state[i].likes + 1}, // Update the index post
                ...state.slice(i + 1) // everything after the index
            ]
        default:
            return state;
    }
}

export default posts;
