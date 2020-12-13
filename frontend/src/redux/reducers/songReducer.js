function songReducer(state = { all: [] }, action) {
    switch (action.type) {
        case 'FETCH_SONGS_SUCCESS':
            return {...state, all: action.payload};
        default: 
        return state;

    }
}

export default songReducer;