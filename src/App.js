import React, { Component } from 'react';
import './App.css';


class App extends Component {
    constructor(){
        super();
        this.state={isi1: ""}
    }

    klik (){
        var Picture = this.refs.nilai1.value;
        var gambar = `https://robohash.org/${Picture}`

        this.setState({isi1:gambar
        })
    }
        
    render(){
        return(
          <center>
            <div id="no1" >
                <input id="ipt" type="text" ref="nilai1" placeholder="Ketik kan sesuatu cuy"></input>
                <br/><br/>
                <button id="btn" class="btn btn-danger" onClick={()=>{this.klik()}} >Buat Profile Picture!</button>
                <br/><br/>
                <img id="img" src={this.state.isi1}></img>
            </div>
          </center>
        )
    }
}
export default App;


