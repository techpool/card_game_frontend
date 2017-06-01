import React from 'react';
import { Droppable } from 'react-drag-and-drop'
import { addSpade, addHeart, addDiamond, addClubs, getCards } from '../../redux-stuff/actions/Card';
import { connect } from 'react-redux';

class SingleCardHolder extends React.Component {

    componentWillMount() {
      this.props.getCards();
    }

    render() {

        const holderNameToAllowed = {
            'Spade': 'spade',
            'Diamond': 'diamond',
            'Clubs': 'clubs',
            'Hearts': 'hearts'
        }

        const styles = {
          display: 'inline-block'
        }

        return (
            <div style={styles} className='container-fluid'>
                {this.props.holderName}
                <br/>
                No. of Cards: {this.props.numCard}
                <Droppable
                    types={[holderNameToAllowed[this.props.holderName]]} // <= allowed drop types
                    onDrop={this.onDrop.bind(this)}>
                    <div>
                        Drop Here
                    </div>
                </Droppable>
            </div>
        );
    }

    onDrop(data) {
      console.log(data)
        switch (this.props.holderName) {
            case 'Spade':
                this.props.incrementSpade(data.spade);
                break;
            case 'Diamond':
                this.props.incrementDiamond(data.diamond);
                break;
            case 'Clubs':
                this.props.incrementClubs(data.clubs);
                break;
            case 'Hearts':
                this.props.incrementHearts(data.hearts);
                break;
            default:
                break;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        cards: (state.cards)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        incrementSpade: (cardId) => {
            dispatch(addSpade(cardId));
        },

        incrementDiamond: (cardId) => {
            dispatch(addDiamond(cardId));
        },

        incrementClubs: (cardId) => {
            dispatch(addClubs(cardId));
        },

        incrementHearts: (cardId) => {
            dispatch(addHeart(cardId));
        },

        getCards: () => {
            dispatch(getCards());
        }

    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SingleCardHolder)
