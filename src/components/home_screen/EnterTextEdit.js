import React,{Component} from 'react'
//import App from '../../App';
//import Nabar from './Navbar.js'
//import TextEditSidebar from './TextEditSidebar' 
//import TextEditWorkspace from './TextEditWorkspace'

export class EnterTextEdit extends Component{
    constructor(props) {
        super(props);

        // DISPLAY WHERE WE ARE
        console.log("\tTextEditScreen constructor");

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
    handleEnter=()=>{
        console.log("handleEnter");
        console.log("the final name is"+this.state.value)
        this.props.EditEnterCallback(this.state.value);
    }
    handleCancel=()=>{
        console.log("handleCancel");
    }
    handleName=()=>{
        console.log("name change");
    }
    handleSubmit=(event)=>{
        console.log("the name submit is "+this.state.value)
        event.preventDefault();
    }
    handleChange=(event)=>{
        this.setState({value: event.target.value});
    }

    render() {
        // DISPLAY WHERE WE ARE
        console.log("\tTextEditScreen render");
        return (
            <div className="container">
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <div>Enter New Name</div>
                        <div>
                            <input type="text" value={this.state.value} onChange={this.handleChange}/>
                            <button
                            onClick={this.handleEnter}>
                            Enter
                            </button>
                            <button
                            onClick={this.handleCancel}>
                            Cancel
                            </button>
                        </div>
                        
                    </form>
                </div>
            </div>
        )
    }
}

export default EnterTextEdit