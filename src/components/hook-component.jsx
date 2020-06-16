// import React, { Component } from "react";
import React, { Component ,useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

// class Hooks extends Component {

     
//     constructor(props){
//         super(props);
       
//         this.state = {
//             count : 0 ,
                // test : null
//         }
    
        
//     }

//     componentDidMount(){
//         document.title = `Title Change: ${this.state.count}`
//     }
   
//     componentDidUpdate(){
//         document.title = `Title Change: ${this.state.count}`
//     }

//     componentWillUnmount(){
//         document.title = `React App `
//     }

//     onUpdate = () => {
//         this.setState({
//             count : this.state.count + 1
//         });
//     }


//     render(){
//         return(
//             <div className="container">
//                 <p>Nilai saya saat ini adalah : {this.state.count} </p>
//                 <button className="btn btn-primary" onClick={this.onUpdate}>Update Nilai</button>
//             </div>
//         );

//     }


// }

const Hooks = () => {
    const [count , setCount] =  useState(0);
    // const [test , setTest] =  useState(nulll);

    useEffect(() => {
        document.title = `Title Change: ${count}`
        return () => {
            document.title = `React App`
        }
    });
    
    return(
        <div className="container">
            <p>Nilai saya saat ini adalah : {count} </p>
            <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Update Nilai</button>
        </div>
    );
}

 export default Hooks;