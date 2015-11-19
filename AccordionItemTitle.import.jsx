'use strict';

export default class AccordionItemTitle extends React.Component {

  render() {
    var style = {
      cursor: 'pointer',
      margin: 0,
      color : this.props.titleColor
    };

    return (
      <h3 aria-controls={`react-sanfona-item-body-${ this.props.uuid }`}
        className="react-sanfona-item-title"
        id={`react-safona-item-title-${ this.props.uuid }`}
        onClick={this.props.onClick}
        style={style}>
        {this.props.title}
      </h3>
    )
  }

}

AccordionItemTitle.propTypes = {
  onClick: React.PropTypes.func,
  title: React.PropTypes.string,
  uuid: React.PropTypes.string
};
