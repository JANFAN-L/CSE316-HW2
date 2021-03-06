// IMPORT ALL THE THINGS NEEDED FROM OTHER JAVASCRIPT SOURCE FILES
import React, { Component } from 'react'
import Navbar from './Navbar.js'
import TextEditSidebar from './TextEditSidebar.js'
import TextEditWorkspace from './TextEditWorkspace.js'

export class EditScreen extends Component {
    constructor(props) {
        super(props);

        // DISPLAY WHERE WE ARE
        console.log("\tEditScreen constructor");

        this.state = {  
            deleteModalVisible: false
        }
    }

    componentDidMount = () => {
        console.log("\tEditScreen component did mount");
    }

    componentWillUnmount = () => {
        console.log("\tEditScreen component will unmount");
    }
    handleTempText(value){
        console.log(value);
        this.props.EditEnterCallback(value);
    }

    render() {
        // DISPLAY WHERE WE ARE
        console.log("\tEditScreen render");
        return (
            <div className="container">
                <Navbar goToHomeCallback={this.props.goToHomeCallback} deleteCallback={this.props.deleteCallback}/>
                <div className="row">
                    <TextEditSidebar
                        logo={this.props.logo}
                        textEditCallback={this.props.textEditCallback}
                        changeLogoCallback={this.props.changeLogoCallback}
                        undoCallback={this.props.undoCallback}                                          
                        canUndo={this.props.canUndo}
                        redoCallback={this.props.redoCallback}
                        canRedo={this.props.canRedo}
                        EditEnterCallback={this.props.EditEnterCallback}                   
                    />
                    <TextEditWorkspace
                        logo={this.props.logo} />

                </div>
            </div>
        )
    }
}

export default EditScreen