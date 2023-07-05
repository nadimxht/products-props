import React from 'react' ; 
import PropTypes from 'prop-types'


export default function Card({element:{thumbnail, id , title , price , description ,stock}}) {
  return (
    <div key={id} className='card col-4' style={{padding:"1rem" , margin:".3rem" , }}>
                    <img style={{width:'100%' , height:'50%' }} src={thumbnail} alt={title} /> 
                    <div className='row'>
                        <h4 className='col-8'>{title}</h4>
                        <span className='col-4'>{price} DT</span>
                    </div>
                    <p style={{fontSize:'.6rem'}} className='row'>
                        {description}
                    </p>
                    <p style={{color:stock > 0 ? "green" : "red" }}>
                        {stock > 0 ? "In stock" : "Out of stock" }
                    </p>
    </div>
    
  )
}

Card.defaultProps={
    data : "test" , 
    newFunction : ()=>alert('test')
}

Card.propTypes = {
    data : PropTypes.string.isRequired ,
    name : PropTypes.string ,
    newFunction : PropTypes.func , 
    children : PropTypes.any 
}
