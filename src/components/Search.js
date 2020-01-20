import React, { Component } from 'react';
import Tables from './Tables';
class Search extends Component {

    searchRef = React.createRef(); 

    state = {
        terminal:'',
        items : [],
        pagination:''
    }
    paginationBef = () => {
        let pagination = this.state.pagination;
        if(pagination === 1) return null;
         pagination += 1;
         
         this.setState({
            pagination
         });
         console.log(pagination)

    }

    paginationAft = () => {
         let pagination = this.state.pagination;
         pagination += 1;
         
         this.setState({
            pagination
         });
         console.log(pagination)
    }



     
     

    apiConsult = () => {
        const terminal = this.state.terminal;
        const url = `https://api.github.com/search/repositories?q=${terminal}`;
       
        fetch(url)
            .then(response => response.json() )
            .then(result => this.setState({items: result.items}) )
    }

    dataSearch = (terminal) => {
        this.setState({
            terminal: terminal,
            pagination:  1
        },() => {
           this.apiConsult(); 
        })
    }

     
    handlerData =  (e) => {
        e.preventDefault();
       const terminal = this.searchRef.current.value;
       this.dataSearch(terminal);
       
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
                    <Tables
                    items= {this.state.items}
                    paginationBef = {this.paginationBef}
                    paginationAft = {this.paginationAft}
                    />
                    
                </div>
            
        );
    }
}

export default Search;