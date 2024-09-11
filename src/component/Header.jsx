import CartIcon from "./CartIcon"
import "./Header.css"

const Header = ({cartItems})=> {
    return(
        <>
            <h1 className="app-title text-center text-md-start d-flex align-items-center flex-wrap justify-content-between mb-4">
                React ile Sepet Uygulaması
                <CartIcon  cartItems= {cartItems} />
            </h1>
        </>
    )
}
export default Header