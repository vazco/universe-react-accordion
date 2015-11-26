'use strict';

export default React.createClass({
    displayName: 'AccordionItemBody',
    propTypes: {
        maxHeight: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number
        ]),
        overflow: React.PropTypes.string,
        gid: React.PropTypes.string
    },
    render() {
        var style = {
            maxHeight: this.props.maxHeight,
            overflow: this.props.overflow,
            transition: 'max-height .3s ease'
        };
        return (
            <div aria-labelledby={`item-title-${ this.props.gid }`}
                 className="item-body"
                 id={`item-body-${ this.props.gid }`}
                 style={style}>
                <div className="body-wrapper">
                    {this.props.children}
                </div>
            </div>
        );
    }
});

