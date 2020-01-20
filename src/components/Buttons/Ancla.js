import React from 'react';
import PropTypes from 'prop-types';


 const Ancla = ({
     children,onClick,className,...attrs
 }) => {
     const onClickAction = e => {
         return onClick(e)
     };

    return(
        <a
        onClick = {onClickAction}
        {...attrs}
        >
            {children}
        </a>
    );
}

Ancla.propTypes = {
    children:PropTypes.node,
    onClick:PropTypes.func,
}

Ancla.defaultProps ={
    children:'',
    onClick:() =>{},
    

}

export default Ancla;




