import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import {cloneWithProps} from 'meteor/universe:utilities-react';

export default React.createClass( {
    displayName: 'Accordion',
    propTypes: {
        allowMultiple: React.PropTypes.bool,
        activeItems: React.PropTypes.oneOfType([
            React.PropTypes.number,
            React.PropTypes.array
        ])
    },
    getDefaultProps (){
        return {
            activeItems: [0],
            allowMultiple: false
        }
    },
    getInitialState () {
        let activeItems = !Array.isArray(this.props.activeItems) ?
            [this.props.activeItems] : this.props.activeItems;
        return {activeItems};
    },

    componentDidMount() {
        this.state.activeItems.forEach((index) => {
            if (this.refs[`item-${ index }`]) {
                this.refs[`item-${ index }`].allowOverflow();
            }
        });

        // allow overflow for absolute positioned elements inside
        // the item body, but only after animation is complete
        ReactDOM.findDOMNode(this).addEventListener('transitionend', () => {
            this.state.activeItems.forEach((index) => {
                this.refs[`item-${ index }`].allowOverflow();
            });
        });
    },

    handleClick(index) {
        let newState = {};

        // clone active items state array
        newState.activeItems = this.state.activeItems.slice(0);

        const position = newState.activeItems.indexOf(index);

        if (position !== -1) {
            newState.activeItems.splice(position, 1);
        } else if (this.props.allowMultiple) {
            newState.activeItems.push(index);
        } else {
            newState.activeItems = [index];
        }

        this.setState(newState);
    },

    renderItems() {
        const {children} = this.props || {};
        if (!children) {
            return null;
        }

        return React.Children.map(children, (item, index) => {
            const expanded = this.state.activeItems.indexOf(index) !== -1;
            return React.cloneElement(item, {
                expanded,
                key: item.key || index,
                onClick: this.handleClick.bind(this, index),
                ref: `item-${ index }`
            });
        });
    },

    render() {
        return (
            <div className={classNames("universe-accordion", this.props.className)} role="tablist">
                {this.renderItems()}
            </div>
        );
    }

});


