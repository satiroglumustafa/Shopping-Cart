import React from 'react'
import { Button, Card } from 'react-bootstrap'
import "./ProductItem.css"

 const ProductItem = ({product,cart,setCart}) => {
 
    const findProduct = cart.find((item)=>item.id===product.id)

    const addToCart = (product) => {
        // setCart([...cart,product])
        setCart((prevState) => [...prevState,product] )
    }

 
 
    return (
        <div className='col-12 col-md-6 col-lg-4 mb-4'>
            <Card>
                <div className='card-img'>
                    <Card.Img variant="top" src={product.image}/>
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                      <strong> Fiyat: </strong> {product.price}  TL
                    </Card.Text>
                    <Button className='w-100 text-center rounded' variant="danger" onClick={()=>addToCart(product) } disabled={findProduct}>Sepete Ekle</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
export default ProductItem