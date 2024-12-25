import { Fragment, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseQty,
  deleteProduct,
} from "../app/features/cart/cartSlice";
import NavBar from "../components/Navbar/Navbar";

const Cart = () => {
  const { cartList } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  // middlware to localStorage
  const totalPrice = cartList.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );
  useEffect(() => {
    window.scrollTo(0, 0);
    // if(CartItem.length ===0) {
    //   const storedCart = localStorage.getItem("cartItem");
    //   setCartItem(JSON.parse(storedCart));
    // }
  }, []);

  let [empty,setEmpty]=useState(false);
  let customerDetails=[]
  const createOrder=(e)=>{
       e.preventDefault()
       let inpName=e.target.name.value
       let inpPhone=e.target.phone.value
       let inpAddress=e.target.address.value
      if(inpName===""||inpPhone===""||inpAddress===""){
        setEmpty(true);
      }else{
        setEmpty(false);



      let customer={name:inpName,phone:inpPhone,address:inpAddress}  
      customerDetails.push(customer)
      customerDetails.push(cartList)
      console.log(customerDetails)
      }   
  }




  return (
    <Fragment>
      <NavBar/>
    <section className="cart-items">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            {cartList.length === 0 && (
              <h1 className="no-items product">No Items are add in Cart</h1>
            )}
            {cartList.map((item) => {
              const productQty = item.price * item.qty;
              return (
                <div className="cart-list" key={item.id}>
                  <Row>
                    <Col className="image-holder" sm={4} md={3}>
                      <img src={item.imgUrl} alt="" />
                    </Col>
                    <Col sm={8} md={9}>
                      <Row className="cart-content justify-content-center">
                        <Col xs={12} sm={9} className="cart-details">
                          <h3>{item.productName}</h3>
                          <h4>
                            ${item.price}.00 * {item.qty}
                            <span>${productQty}.00</span>
                          </h4>
                        </Col>
                        <Col xs={12} sm={3} className="cartControl">
                          <button
                            className="incCart"
                            onClick={() =>
                              dispatch(addToCart({ product: item, num: 1 }))
                            }
                          >
                            <i className="fa-solid fa-plus"></i>
                          </button>
                          <button
                            className="desCart"
                            onClick={() => dispatch(decreaseQty(item))}
                          >
                            <i className="fa-solid fa-minus"></i>
                          </button>
                        </Col>
                      </Row>
                    </Col>
                    <button
                      className="delete"
                      onClick={() => dispatch(deleteProduct(item))}
                    >
                      <ion-icon name="close"></ion-icon>
                    </button>
                  </Row>
                </div>
              );
            })}
          </Col>
          <Col md={4}>
            <div className="cart-total">
              <h2>Cart Summary</h2>
              <div className=" d_flex">
                <h4>Total Price :</h4>
                <h2>${totalPrice}.00</h2>
                
                <form onSubmit={createOrder}>
                <h3 style={{paddingTop:"15px"}}>Name:</h3>
                <input className="customer-data" type="text" name="name" placeholder=" Enter your name"/> 
                <h3 style={{paddingTop:"15px"}}>Phone:</h3>
                <input className="customer-data" type="number" name="phone" placeholder=" Enter your phone number"/>
                <h3 style={{paddingTop:"15px"}}>Address:</h3>
                <textarea className="customer-data" style={{height:"80px"}} type="text" name="address" placeholder=" Enter your address"/> <br />
                <button class="confirm " type="submit"> 
                  Confirm Order
                </button>            
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </Fragment>
  );
};

export default Cart;
