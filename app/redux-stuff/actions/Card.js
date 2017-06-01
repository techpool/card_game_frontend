import axios from 'axios';
const HTTP_ENDPOINT = 'http://localhost:8000'

export function addSpade(cardId) {

    return dispatch => {

        console.log(localStorage.getItem('jwt_token'));
        axios.post(HTTP_ENDPOINT + '/cards', {
                cardId: cardId,
                type: 'spades',
            }, {
                headers: {
                    'Authorization': localStorage.getItem('jwt_token')
                }
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        dispatch({
            type: 'INCREMENT_SPADE',
            payload: cardId,
        })
    }
}


export function addHeart(cardId) {

    return dispatch => {

        axios.post(HTTP_ENDPOINT + '/cards', {
                cardId: cardId,
                type: 'hearts'
            }, {
                headers: {
                    'Authorization': localStorage.getItem('jwt_token')
                }
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        dispatch({
            type: 'INCREMENT_HEART',
            payload: cardId,
        })
    }
}

export function addDiamond(cardId) {

    axios.post(HTTP_ENDPOINT + '/cards', {
            type: 'diamonds',
            cardId: cardId
        }, {
            headers: {
                'Authorization': localStorage.getItem('jwt_token')
            }
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });


    return dispatch => {
        dispatch({
            type: 'INCREMENT_DIAMOND',
            payload: cardId,
        })
    }
}

export function addClubs(cardId) {

    axios.post(HTTP_ENDPOINT + '/cards', {
            type: 'clubs',
            cardId: cardId
        }, {
            headers: {
                'Authorization': localStorage.getItem('jwt_token')
            }
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });


    return dispatch => {
        dispatch({
            type: 'INCREMENT_CLUBS',
            payload: cardId,
        })
    }
}

export function getCards() {
    return dispatch => {
        axios.get(HTTP_ENDPOINT + '/cards', {
                headers: {
                    'Authorization': localStorage.getItem('jwt_token')
                }
            })
            .then(function (response) {
                console.log(response);
                dispatch({
                    type: 'LOAD_CARDS',
                    payload: response.data,
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    };
}

export function resetGame() {
    return dispatch => {
        axios.delete(HTTP_ENDPOINT + '/cards', {
                headers: {
                    'Authorization': localStorage.getItem('jwt_token')
                }
            })
            .then(function (response) {
                console.log(response);
                dispatch({
                    type: 'RESET_CARDS',
                    payload: true,
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    };
}

