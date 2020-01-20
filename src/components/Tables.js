import React , { Component } from 'react';

import { Table } from 'react-bootstrap';
import { Thead } from './Thead';
import { Tbody } from './Thead';
import  Pagination  from './Pagination';
class Tables extends Component {

   
    showItems = () => {
        const items = this.props.items;
        if(items.length === 0) return null;
         console.log(items)
        return(
            <React.Fragment>
                <Table striped bordered hover variant="dark">
                    <Thead/>
                    <tbody>
                         {items.map(item => (
                             <Tbody
                                key = {item.id}
                                id = {item.id}
                                name = {item.name}
                                autor = {item.owner.login}
                                description = {item.description}
                                language = {item.language}
                                created_at = {item.created_at}
                                

                             />
                         ))}
                    </tbody>
                </Table>
                <div className="row justify-content-center">
                  <Pagination
                    paginationBef = {this.props.paginationBef}
                    paginationAft = {this.props.paginationAft}
                  />
                </div>
                
            </React.Fragment>
        )
    }
    render() {
        return (
            <React.Fragment>
                {this.showItems()}
            </React.Fragment>
        );
    }

}

export default Tables;