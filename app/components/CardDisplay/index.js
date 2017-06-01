import React from 'react';
import { Draggable } from 'react-drag-and-drop';
import SingleDisplayCard from '../SingleDisplayCard';

class CardDisplayComponent extends React.Component {

    render() {

        console.log('Im getting rerendered')
        let spadeCards = [];
        for (var i = 0; i < 13; i++) {


            let style = {
                position: 'absolute',
                marginLeft: Math.floor(Math.random() * 80) + 'vw',
                marginTop: Math.floor(Math.random() * 60) + 'vh',
                background: 'red'

            }

            spadeCards.push(
                <SingleDisplayCard style={style} type="spade" index={i}/>
            )
        }

        let diamondCards = [];
        for (var i = 0; i < 13; i++) {


            let style = {
                position: 'absolute',
                marginLeft: Math.floor(Math.random() * 80) + 'vw',
                marginTop: Math.floor(Math.random() * 60) + 'vh',
                background: 'green'

            }

            diamondCards.push(
                <SingleDisplayCard style={style} type="diamond" index={i}/>
            )
        }

        let clubCards = [];
        for (var i = 0; i < 13; i++) {


            let style = {
                position: 'absolute',
                marginLeft: Math.floor(Math.random() * 80) + 'vw',
                marginTop: Math.floor(Math.random() * 60) + 'vh',
                background: 'yellow'

            }

            clubCards.push(
                <SingleDisplayCard style={style} type="clubs" index={i}/>
            )
        }

        let heartCards = [];
        for (var i = 0; i < 13; i++) {

            let style = {
                position: 'absolute',
                marginLeft: Math.floor(Math.random() * 80) + 'vw',
                marginTop: Math.floor(Math.random() * 60) + 'vh',
                background: 'blue'

            }


            heartCards.push(
                <SingleDisplayCard style={style} type="hearts" index={i}/>
            )
        }

        return (
            <div className='container-fluid'>
                {spadeCards}
                {diamondCards}
                {clubCards}
                {heartCards}
            </div>
        );
    }
}

export default CardDisplayComponent;
