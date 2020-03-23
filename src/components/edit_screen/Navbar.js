import React from 'react'
import ComfirmDelete from './ComfirmDelete'
class Navbar extends React.Component {
  constructor() {
    super();

    console.log("Navbar constructed");
    this.state={
      seen:false
    }
  }

  componentDidMount = () => {
      console.log("\tNavbar component did mount");
  }

  componentWillUnmount = () => {
      console.log("\tNavbar component will unmount");
  }

  handleGoHome = () => {
    console.log("handleGoHome");
    this.props.goToHomeCallback();
  }
  handleDelete =() =>{
    console.log("handleDelete");
    this.props.deleteCallback();
  }
  handletryDelete = () =>{
    console.log("textEdit");
    this.setState({
        seen:!this.state.seen
    });
    console.log(this.state.seen);
  }
  handleCancel=()=>{
    console.log("cancel delete")
    this.setState({
      seen:false
  });
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <div  className='brand-logo' 
                style={ {cursor: "pointer"} }
                onClick={this.handleGoHome}>
            goLogoLo
          </div>
          <ul id="nav-mobile" className="right hide-on-med-and-down" onClick={this.handletryDelete}>
            <li style={ {cursor: "pointer"} }>&#128465;</li>
          </ul>
          {this.state.seen?<ComfirmDelete ComfirmDelete={this.handletryDelete} ConfirmDeleteCallback={this.handleDelete} CancelDeleteCallback={this.handleCancel}/>:null}
        </div>
      </nav>
    )
  };
}

export default Navbar;