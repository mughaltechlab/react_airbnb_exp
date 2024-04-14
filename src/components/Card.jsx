import React from 'react'

// * React.createElement('h1',{
//     children : 
// });

// * class components --deprecated
// class Tourch extends React.Component{

     

//     render(){
//         return (
//             <div>Hello</div>
//         )
//     }
// }

const Status = ({status})=>(
    <div className="status">{status}</div>
)


function Card({data}) {
    return (
    <div className="card">
        {/* {data.isStatus ? <Status status = {data.status} /> : ''} */}
        {data.isStatus && <Status status = {data.status} />}
        <img src={data.img} />
        <div className="ratingRow">
            <i className="bi bi-star-fill"></i>
            <span className="rating">{data.rating}</span>
            <span className="review">({data.review})</span> &#x2022;
            <span className="country">{data.country}</span>
        </div>
        <div className="title">
            {data.title}
        </div>
        <div className="price"><span>From ${data.price}</span> / person</div>
    </div>
  )
}

export default Card