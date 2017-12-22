function postComments(state = [], action) {
    switch(action.type) {
        case 'ADD_COMMENT':
        return [
            ...state,
            { // new comment from user with text
                user: action.author,
                text: action.comment
            }
        ]
        case 'REMOVE_COMMENT':
            return [ // return the comment array without the specified comment
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ]
        default:
            return state;
    }
}

function comments(state = [], action) {
    if(typeof action.postId !== 'undefined') {
        return {
            // return current state
            ...state,
            // with the overwritten comment array
            [action.postId]: postComments(state[action.postId], action)
        }
    }
    return state;
}

export default comments;
