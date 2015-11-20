'use strict';

export default class AccordionItemBody extends React.Component {

  render() {
    var style = {
      maxHeight: this.props.maxHeight,
      overflow: this.props.overflow,
      transition: 'max-height .3s ease'
    };

    return (
      <div aria-labelledby={`item-title-${ this.props.uuid }`}
        className="item-body"
        id={`item-body-${ this.props.uuid }`}
        style={style}>
        <div className="body-wrapper">
          {this.props.children}
        </div>
      </div>
    );
  }

}

AccordionItemBody.propTypes = {
  maxHeight: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
  ]),
  overflow: React.PropTypes.string,
  uuid: React.PropTypes.string
};
