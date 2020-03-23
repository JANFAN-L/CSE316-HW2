import React,{Component} from 'react'
//import App from '../../App';
//import Nabar from './Navbar.js'
//import TextEditSidebar from './TextEditSidebar' 
//import TextEditWorkspace from './TextEditWorkspace'

export class ComfirmDelete extends Component{
    constructor(props) {
        super(props);

        // DISPLAY WHERE WE ARE
        console.log("\tComfirmDeletePrompt constructor");

        this.state = {  
            value:""
        }
    }

    componentDidMount = () => {
        console.log("\tTextEditScreen component did mount");
    }

    componentWillUnmount = () => {
        console.log("\tTextEditScreen component will unmount");
    }
    handleComfirm=()=>{
        console.log("handleEnter");
        this.props.ConfirmDeleteCallback();
    }
    handleCancel=()=>{
        console.log("handleCancel");
        this.props.CancelDeleteCallback();
    }
    handleName=()=>{
        console.log("name change");
    }
    handleChange=(event)=>{
        this.setState({value: event.target.value});
    }

    render() {
        // DISPLAY WHERE WE ARE
        console.log("\tTextEditScreen render");
        return (
            <div className="container" style={{float: 'right'}}>
                <div className="container">
                        <div>Are you sure to delete this logo?</div>
                        <div>
                            <button
                            onClick={this.handleComfirm}>
                            Comfirm
                            </button>
                            <button
                            onClick={this.handleCancel}>
                            Cancel
                            </button>
                        </div>
                </div>
            </div>
        )
    }
}

export default ComfirmDelete