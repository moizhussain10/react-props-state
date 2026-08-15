import React from 'react'

const Cards = () => {

    const cards = [
        {
            id:1,
            tittle: "Essence Mascara Lash Princess",
            detail: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula."
        },
        {
            id:2,
            tittle: "Eyeshadow Palette with Mirror",
            detail: "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application."
        },
        {
            id:3,
            tittle: "Powder Canister",
            detail: "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish."
        }
    ]


  return (
    <>
      <div className='grid grid-cols-3 place-items-center gap-20 p-20'>
        {cards.map((c)=>(
        <div className='card border border-gray-900 p-3'>
            <div className='card-content'>
                <p>{c.tittle}</p>
                <p>{c.detail}</p>
            </div>
        </div>
        ))}
      </div>
    </>
  )
}

export default Cards
