import React from 'react'

function Card() {
    const data = [
        {image: 'https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFtYXpvbiUyMGJveHxlbnwwfHwwfHx8MA%3D%3D',name: "Amazon",desc: "Lorem ipsum, dolor sit amet consecteturadipisci fugit in",instock: true},
        {image: 'https://images.unsplash.com/photo-1529612700005-e35377bf1415?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdvb2dsZSUyMGlhbWdld3xlbnwwfHwwfHx8MA%3D%3D',name: "Google",desc: "it’s one those moment when you look at something and get ",instock: true},
        {image: 'https://images.unsplash.com/photo-1662947036644-ecfde1221ac7?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',name: "Microsoft",desc: "Lorem ipsum, dolor sit amet consecteturadipisci fugit i",instock: true},
        {image: 'https://plus.unsplash.com/premium_photo-1669075652104-4f0763796446?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2FyYXRuJTIwbmFtZSUyMGxvZ298ZW58MHx8MHx8fDA%3D',name: "Sanratn",desc: "Lorem ipsum, dolor sit amet consecteturadipisci fugit",instock: false},
        {image: 'https://images.unsplash.com/photo-1529612700005-e35377bf1415?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdvb2dsZSUyMGlhbWdld3xlbnwwfHwwfHx8MA%3D%3D',name: "Google",desc: "it’s one those moment when you look at something and get ",instock: true},
        {image: 'https://images.unsplash.com/photo-1694878981829-da6c6a172c44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8WCUyMGxvZ298ZW58MHx8MHx8fDA%3D',name: "Twitter X",desc: "Lorem ipsum, dolor sit amet consecteturadipisci fugit i",instock: true},
        {image: 'https://images.unsplash.com/photo-1662947036644-ecfde1221ac7?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',name: "Microsoft",desc: "Lorem ipsum, dolor sit amet consecteturadipisci fugit i",instock: false},
    ]
  return (
    <div className='w-full h-screen bg-zinc-200 flex items-center gap-10 justify-center'>
        {data.map((elem,index)=>(
            <div key={index} className='w-52 bg-zinc-100 rounded-md overflow-hidden'>
            <div className='w-full h-28 bg-zinc-300'>
                <img className='w-full h-full object-cover' src={elem.image} alt='Product Image'/>
            </div>
            <div className='px-4 py-3'>
                <h2 className='font-semibold'>{elem.name}</h2>
                <p className='text-xs mt-5'>{elem.desc}</p>
                <button className={`px-4 py-1 text-xs ${elem.instock ? 'bg-blue-600' : 'bg-red-600'} rounded mt-3 text-zinc-100`}>
                    {elem.instock ? "In Stock" : "Out of Stock"}
                    </button>
            </div>
        </div> 
        ))}
    </div>
  )
}

export default Card