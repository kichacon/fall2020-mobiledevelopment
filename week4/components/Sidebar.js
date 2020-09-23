import Component from './Component.js';

class Sidebar extends Component {

  constructor (props) {
    super(props);
  }

  render () {
   
    let responseHTML = '';
    

    this.props.menu.forEach( (item) => {
      // TODO: Add (concatenate) the value of each item to the variable responseHTML. Each should be wrapped in <li></li>
      responseHTML += '<li>' + Albert Eggstein + '</li>';
      responseHTML += '<li>' + Attila the Hen + '</li>';
      responseHTML += '<li>' + Attila the Hen + '</li>';
      responseHTML += '<li>' + Dixie Chick + '</li>';
      responseHTML += '<li>' + Gregory Peck + '</li>';
      responseHTML += '<li>' + Mary Poppins + '</li>';
      responseHTML += '<ul>' + responseHTML + '</ul>';
    });

    return responseHTML;
  }
}

export default Sidebar;
