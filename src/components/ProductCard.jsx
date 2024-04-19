import React from 'react'
import './productCard.css'

function ProductCard({prod}) {
  return (
    <div className='productCard'>
      {console.log('this' + prod.id)}
        {/* image */}
        <div className='cardImg'>
            <img src={prod.thumbnail} alt="" />
        </div>
        {/* detail */}
        <div className="detail">
            {/* deal */}{

            prod.discountPercentage > 10 
            ? <div className="deal">{prod.discountPercentage} Off</div>
            : 'Cancel'
            }
            <div className="title">{prod.title}</div>
            <div className='btnPrice'>
              <button className='btn'>Add</button>
              <span className="price">{prod.price}$</span>
            </div>
        </div>
    </div>
  )
}

export default ProductCard