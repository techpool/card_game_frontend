let initialState = {
    spades: 0,
    diamonds: 0,
    hearts: 0,
    clubs: 0,
    addedCards: []
}

export default function counter(state = initialState, action) {
    let spadeCount = state.spades;
    let diamondCount = state.diamonds;
    let heartsCount = state.hearts;
    let clubsCount = state.clubs;
    switch (action.type) {

        case 'INCREMENT_SPADE':
            return Object.assign({}, state, { spades: spadeCount + 1, addedCards: [...state.addedCards, action.payload] });
        case 'INCREMENT_HEART':
            return Object.assign({}, state, { hearts: heartsCount + 1, addedCards: [...state.addedCards, action.payload] });
        case 'INCREMENT_DIAMOND':
            return Object.assign({}, state, { diamonds: diamondCount + 1, addedCards: [...state.addedCards, action.payload] });
        case 'INCREMENT_CLUBS':
            return Object.assign({}, state, { clubs: clubsCount + 1, addedCards: [...state.addedCards, action.payload] });
        case 'LOAD_CARDS':
            return Object.assign({}, state, {...action.payload });
        case 'RESET_CARDS':
            return Object.assign({}, state, {...initialState });
        default:
            return state;
    }
}
