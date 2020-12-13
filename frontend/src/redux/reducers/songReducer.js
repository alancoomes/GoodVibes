function songReducer(state = { songs: [] }, action) {
    switch (action.type) {
        case 'FETCH_SONGS_SUCCESS':
            return {...state, songs: action.payload};
        default: 
        return state;

    }
}

export default songReducer;