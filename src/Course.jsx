import React from 'react'

const Course = ({course}) => {
    const {id,title,description,price,image } = course;
  return (
    <div className='course'>
       
            <img className='img' src={image} width={500} height={250} />
            <h4 className='course-title'>{title}</h4>
            <p className='course-desc'>{description}</p>
            <h3 className='course-price'>{price}</h3>
            <hr />
        
    </div>
  )
}

export default Course