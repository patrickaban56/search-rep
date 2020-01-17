import React, { Component } from 'react';

class Search extends Component {

    state = {
        terminal:''
    }

     
     

    apiConsult = () => {
        const terminal = this.state.terminal;
        const url = `https://api.github.com/search/repositories?q=${terminal}`;
        //console.log(url);
        fetch(url)
            .then(response => response.json() )
            .then(result => console.log(result.items) )
    }

    dataSearch = (terminal) =>{
        this.setState({
            terminal
        },() => {
           this.apiConsult(); 
        })
    }

    searchRef = React.createRef(); 
    handlerData =  (e) => {
        e.preventDefault();
       const terminal = this.searchRef.current.value;
       this.dataSearch(terminal)
       
    } 


    render(){
        return(
            
                <div className="app container">
                    <div className="jumbotron">
                        <p className="lead text-center">Buscador de repositorios</p>
                         
                        <form onSubmit={this.handlerData}>
                            <div className="row">
                                <div className="form-group col-md-8">
                                    <input ref={this.searchRef} type="text" className="form-control form-control-lg"
                                    placeholder="Busca repositorios. Ejemplo: tetris" />
                                </div>
                                <div className="form-group col-md-4">
                                    <input type="submit" className="btm btn-lg btn-danger btn-block"
                                    value="Buscar..." />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            
        );
    }
}

export default Search;