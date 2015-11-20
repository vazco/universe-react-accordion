'use strict';

export default class AccordionItemTitle extends React.Component {

  render() {
    var style = {
      cursor: 'pointer',
      margin: 0,
      color : this.props.titleColor
    };

    return (
      <div aria-controls={`item-body-${ this.props.uuid }`}
        className="header"
        id={`item-title-${ this.props.uuid }`}
        onClick={this.props.onClick}
        style={style}>
        {this.props.title}
        {this.props.subtitle}
      </div>
    )
  }

}



AccordionItemTitle.propTypes = {
  onClick: React.PropTypes.func,
  title: React.PropTypes.node,
  subtitle: React.PropTypes.node,
  uuid: React.PropTypes.string
};
