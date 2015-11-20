'use strict';

import {classNames} from '{universe:utilities-react}';

import AccordionItemBody from './AccordionItemBody';
import AccordionItemTitle from './AccordionItemTitle';

export default class AccordionItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            maxHeight: props.expanded ? 'none' : 0,
            overflow: props.expanded ? 'visible' : 'hidden'
        };
    }

    componentWillMount() {
        this.uuid = Meteor.uuid();
    }

    componentDidMount() {
        this.setMaxHeight();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.expanded !== this.props.expanded) {
            this.setMaxHeight();
        }
    }

    allowOverflow() {
        this.setState({overflow: 'visible'});
    }

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
    }

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
    }

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
    }

    render() {
        return (
            <div {...this.getProps()} ref="item">
                <AccordionItemTitle
                    title={this.props.title}
                    subtitle={this.props.subtitle}
                    onClick={this.props.onClick}
                    titleColor={this.props.titleColor}
                    uuid={this.uuid}/>
                <AccordionItemBody maxHeight={this.state.maxHeight}
                                   overflow={this.state.overflow}
                                   ref="body"
                                   uuid={this.uuid}>
                    {this.props.children}
                </AccordionItemBody>
            </div>
        );
    }

}

AccordionItem.propTypes = {
    expanded: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    title: React.PropTypes.node,
    subtitle: React.PropTypes.node
};
