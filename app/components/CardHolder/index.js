import React from 'react';
import SingleCardHolder from '../SingleCardHolder';
import { resetGame } from '../../redux-stuff/actions/Card';
import { connect } from 'react-redux';

class CardHolder extends React.Component {

    render() {
        console.log('------------------')
        console.log(this.props)
        console.log('------------------')

        const styles = {
          position: 'absolute',
          top: '80vh'
        }
        return (
            <div style={styles} className='container-fluid'>
                <SingleCardHolder holderName="Spade" numCard={this.props.cards.spades}/>
                <SingleCardHolder holderName="Diamond" numCard={this.props.cards.diamonds}/>
                <SingleCardHolder holderName="Clubs" numCard={this.props.cards.clubs}/>
                <SingleCardHolder holderName="Hearts" numCard={this.props.cards.hearts}/>
                <div onClick={this.props.resetGame}><button>Reset Game</button></div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        resetGame: () => {
            dispatch(resetGame());
        }
    };
};


const mapStateToProps = (state) => {
    return {
        cards: (state.cards)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CardHolder)
