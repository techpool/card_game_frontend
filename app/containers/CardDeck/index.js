import React from 'react';
import CardDisplay from '../../components/CardDisplay';
import CardHolder from '../../components/CardHolder';
import { browserHistory } from 'react-router';

export default class CardDeck extends React.Component {

    componentWillMount() {
        if (!localStorage.getItem('jwt_token') || !localStorage.getItem('jwt_token')) {
            console.log('this is true')
            browserHistory.push('/login')
        };
    }

    render() {
        return (
            <div className='container-fluid'>
                <CardDisplay />
                <CardHolder />
            </div>
        );
    }
}
