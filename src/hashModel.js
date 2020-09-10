import React from 'react';
import Art from './components/Art';
import Math from './components/Math';
import MainShow from './components/mainShow';
import './hashModel.css';
export default class HashModel extends React.Component{
    constructor(props){
        super(props);
        this.state={
            hash:"/art",
            email:"zehong.luo@qq.com",
            name:"zehong.luo",
            artScore:"",
            mathScore:"",
            artExtras:"",
            mathExtras:"",
        }
        window.location.hash=this.state.hash;
        window.addEventListener('hashchange', this.load.bind(this),false)
    }
    load(){
        this.setState({
            hash:window.location.hash.substr(1)
        })
    }
    changeEmailAndName=(value)=>{
        var index=value.indexOf('@');
        this.setState({
            email:value,
            name:value.substring(0,index)
        })
    }
    getArtScore=(newInput)=>{
        this.setState({
            artScore:this.state.artScore+newInput
        })
    }
    getMathScore=(newInput)=>{
        this.setState({
            mathScore:this.state.mathScore+newInput
        })
    }
    getArtExtras=(value)=>{
        this.setState({
            artExtras:value
        })
    }
    getMathExtras=(value)=>{
        this.setState({
            mathExtras:value
        })
    }
    getArtHash=(value)=>{
        this.setState({
            hash:value.substring(value.indexOf("#")+1)
        })
    }
    getMathHash=(value)=>{
        this.setState({
            hash:value.substring(value.indexOf("#")+1)
        })
    }
    render(){
        return(
            <div className="content">
                <div className="main">
                    {this.state.hash==="/main"&&<MainShow 
                        changeEmailAndName={this.changeEmailAndName}
                        artScore={this.state.artScore}
                        mathScore={this.state.mathScore}
                        artExtras={this.state.artExtras}
                        mathExtras={this.state.mathExtras}
                    />}
                </div>
                <div className="art">
                    {this.state.hash==="/art"&&<Art 
                    email={this.state.email} 
                    getArtScore={this.getArtScore}
                    getArtExtras={this.getArtExtras}
                    getArtHash={this.getArtHash}
                    />}
                </div>
                <div className="math">
                    {this.state.hash==="/math"&&<Math 
                    name={this.state.name}
                    getMathScore={this.getMathScore}
                    getMathExtra={this.getMathExtras}
                    getMathHash={this.getMathHash}
                    />}
                </div>
            </div>
        )
    }
}