import React from 'react';
import ReactDOM from 'react-dom';

import classNames from 'classnames';

import AccordionItemBody from './AccordionItemBody';
import AccordionItemTitle from './AccordionItemTitle';

export default React.createClass({
    displayName: 'AccordionItem',
    propTypes: {
        expanded: React.PropTypes.bool,
        onClick: React.PropTypes.func,
        title: React.PropTypes.node,
        subtitle: React.PropTypes.node
    },
    getInitialState() {
        return ({
            maxHeight: this.props.expanded ? 'none' : 0,
            overflow: this.props.expanded ? 'visible' : 'hidden'
        })
    },
    componentWillMount() {
        this.gid = Random.id();
    },

    componentDidMount() {
        this.setMaxHeight();
    },

    componentDidUpdate(prevProps) {
        if (prevProps.expanded !== this.props.expanded) {
            this.setMaxHeight();
        }
    },

    allowOverflow() {
        this.setState({overflow: 'visible'});
    },

    setMaxHeight() {
        var bodyNode = ReactDOM.findDOMNode(this.refs.body);
        var images = bodyNode.querySelectorAll('img');

        if (images.length > 0) {
            return this.preloadImages(bodyNode, images);
        }

        this.setState({
            maxHeight: this.props.expanded ? bodyNode.scrollHeight + 'px' : 0,
            overflow: 'hidden'
        });
    },

    // Wait for images to load before calculating maxHeight
    preloadImages(node, images) {
        var imagesLoaded = 0;

        var imgLoaded = () => {
            imagesLoaded++;

            if (imagesLoaded === images.length) {
                this.setState({
                    maxHeight: this.props.expanded ? node.scrollHeight + 'px' : 0,
                    overflow: 'hidden'
                });
            }
        };

        for (let i = 0; i < images.length; i += 1) {
            let img = new Image();
            img.src = images[i].src;
            img.onload = img.onerror = imgLoaded;
        }
    },

    getProps() {
        var props = {
            className: classNames([
                'item',
                {'item-expanded': this.props.expanded}
            ]),
            role: 'tabpanel'
        };

        if (this.props.expanded) {
            props['aria-expanded'] = true;
        } else {
            props['aria-hidden'] = true;
        }

        return props;
    },

    render() {
        return (
            <div {...this.getProps()} ref="item">
                <AccordionItemTitle
                    title={this.props.title}
                    subtitle={this.props.subtitle}
                    onClick={this.props.onClick}
                    gid={this.gid}/>
                <AccordionItemBody maxHeight={this.state.maxHeight}
                                   overflow={this.state.overflow}
                                   ref='body'
                                   gid={this.gid}>
                    {this.props.children}
                </AccordionItemBody>
            </div>
        );
    }

})
