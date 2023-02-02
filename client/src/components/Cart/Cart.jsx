import React from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import "./Cart.css";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg",
      img2: "https://images.pexels.com/photos/899740/pexels-photo-899740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Vestido Asiatico",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa alias sit tempore voluptates veritatis illum natus minima nobis ut non, modi sequi dolore corrupti incidunt perspiciatis autem soluta aperiam suscipit!",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/899740/pexels-photo-899740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        img2: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg",
        title: "Vestido Asiatico dos",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa alias sit tempore voluptates veritatis illum natus minima nobis ut non, modi sequi dolore corrupti incidunt perspiciatis autem soluta aperiam suscipit!",
        isNew: true,
        oldPrice: 17,
        price: 10,
      },
  ];
  return (
    <div className="cart">
      <h2>Products in your cart</h2>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="imagen" />
          <div className="details">
            <h3>{item.title}</h3>
            <p>{item.desc.substring(0, 100)}</p>
            <div className="price">1 x ${item.price}</div>
          </div>
          <DeleteOutlinedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;