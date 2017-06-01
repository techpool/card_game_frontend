import React from 'react';
import { Draggable } from 'react-drag-and-drop';
import { connect } from 'react-redux';

class SingleDisplayCard extends React.Component {

    render() {

        if (this.props.cards.addedCards.indexOf(this.props.type + this.props.index) > -1) {
            return (<div></div>);
        }

        return (
            <div style={this.props.style} key={this.props.type + this.props.index}>
                <Draggable type={this.props.type} data={this.props.type + this.props.index}>
                    <div>
                        Drag this Increase {this.props.type} Count
                    </div>
                </Draggable>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cards: (state.cards)
    };
};


export default connect(
    mapStateToProps
)(SingleDisplayCard)
