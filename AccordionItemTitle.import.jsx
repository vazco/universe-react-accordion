
export default React.createClass({
  displayName: 'AccordionItemTitle',
  propTypes: {
    onClick: React.PropTypes.func,
    title: React.PropTypes.node,
    subtitle: React.PropTypes.node,
    gid: React.PropTypes.string
  },
  render() {
    return (
      <div aria-controls={`item-body-${ this.props.gid }`}
        className="header"
        id={`item-title-${ this.props.gid }`}
        onClick={this.props.onClick}
        style={{cursor: 'pointer', margin: 0}}>
          {this.props.title}
          {this.props.subtitle}
      </div>
    )
  }
});



