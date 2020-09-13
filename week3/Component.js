// Component is the parent
class Component {
  constructor (props) {
    this.props = props;
  }

  render () {
    // Child objects define their own render() methods
    return (
      <div>
        {this.props}
      </div>
      
    )
  }
}

export default Component;
