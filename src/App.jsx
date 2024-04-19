// import React from 'react'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import CardsRow from './components/CardsRow'

// function App() {
//   return (
//     <div className="container">
//       <Navbar />
//       <Hero />
//       <CardsRow />
//     </div>
//   )
// }

// export default App


// todo::::: productCards :::::::::

// import React, {useEffect, useState} from 'react'
// import ProductCard from './components/ProductCard'
// import './components/productCard.css'

// function App() {

//   const [data,setData] = useState([]);

//   useEffect(()=>{
//     fetch('https://dummyjson.com/products')
//       .then(res=>res.json())
//       .then(data=>setData(data.products))
//     },[])
    
//     console.log(data);
//   return (
//     <div className='container'>
//       <h1>My Products Cards</h1>
//       {
//         data.map(item=>{
//           return <ProductCard prod = {item} key={item.id} />
//         })
//       }
//     </div>
//   )
// }

// export default App

// todo::::::::: UseMemo_Hook ::::::::::::::::::
import React from 'react'
import UseMemo_hook from './components/UseMemo_hook'

function App() {
  return (
    <>
      <UseMemo_hook />
    </>
  )
}

export default App