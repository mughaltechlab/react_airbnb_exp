import React from 'react'
import Card from './Card';
import cardData from './data'



// card data
// const cardData = [
//     {
//         img : './src/assets/card_img1.png',
//         rating: '3.5',
//         review: '7',
//         country: 'USA',
//         title: 'Mountain Biking Group',
//         price: 50,
//         isStatus: true,
//         status : 'sold',
//     },
//     {
//         img : './src/assets/card_img2.png',
//         rating: '5',
//         review: '6',
//         country: 'USA',
//         title: 'Learn wedding photography',
//         price: 120,
//         isStatus: false,
//     },
//     {
//         img : './src/assets/card_img3.png',
//         rating: '4',
//         review: '16',
//         country: 'USA',
//         title: 'Life lessons with Katie Zaferes',
//         price: 136,
//         isStatus: true,
//         status : 'online',
//     },
//     {
//         img : './src/assets/card_img1.png',
//         rating: '3.5',
//         review: '7',
//         country: 'USA',
//         title: 'Mountain Biking Group',
//         price: 50,
//         isStatus: true,
//         status : 'close',
//     },
//     {
//         img : './src/assets/card_img2.png',
//         rating: '5',
//         review: '6',
//         country: 'USA',
//         title: 'Learn wedding photography',
//         price: 120,
//         isStatus: true,
//         status : 'sales end',
//     },
//     {
//         img : './src/assets/card_img3.png',
//         rating: '4',
//         review: '16',
//         country: 'USA',
//         title: 'Life lessons with Katie Zaferes',
//         price: 136,
//         isStatus: false,
//     },
// ];

// console.log(cardData);

function CardsRow() {
  return (
    <section className="cardsRow">
        {cardData.map((item,index)=>{
           return <Card data = {item} key={index}/>
        })}
    </section>
  )
}

export default CardsRow