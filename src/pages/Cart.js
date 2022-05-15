import React from "react";
import { useGobalContext } from "../context";
import Suit from "../images/suit-cart.png";
import Submenu from "../components/Submenu";
import SuitStyle from "../components/SuitStyle";
import { Link } from "react-router-dom";
import DesignPage from "./DesignPage";

function Cart() {
  const {
    billItems,
    custmoisedLook,
    custmoisedShirtLook,
    shirt,
    Shirt, //defaultimage
    trouser,
    jacket,
    needShirt,
    setNeedShirt,
    needMeasure,
    subTotal,
    total,
    setTotal,
    setDesignPage,

    addons,
    setdropdownValue,
  } = useGobalContext();

  const getValues = (obj) => {
    const values = Object.values(obj).filter(function (value) {
      return value.length !== 0;
    });
    return values;
  };
  console.log(addons);

  const shipping = 149.99;
  setTotal(subTotal + shipping);

  function editShirt() {
    setdropdownValue("Shirt");
    setDesignPage(1);
  }
  return (
    <>
      <Submenu />
      <div className="cart-page">
        <div className="cart-header">
          {/* <YouTube videoId="wcA9_bPfFuU" playing={true} /> */}
          Your suit is almost ready . . .
        </div>
        <div className="cart-body">
          <div className="cart-items">
            <ul>
              <li className="cart-item">
                <div className="cart-item-left">
                  <img className="cart-image" src={Suit} alt="suitimage" />
                  <div className="cart-details">
                    <ul>
                      <li>
                        <div>
                          <span className="cart-value">Suit</span>
                          <span className="cart-subvalue">
                            {custmoisedLook.name}
                          </span>
                        </div>
                      </li>
                      <li
                        className="selected-fabric"
                        style={{
                          backgroundImage: `url(${custmoisedLook.image})`,
                        }}
                      ></li>

                      <li>
                        <div>
                          <span className="cart-value">Trouser</span>
                          <span className="cart-subvalue">
                            /{getValues(trouser).join(", ")}
                          </span>
                        </div>
                      </li>
                      <li>
                        <div>
                          <span className="cart-value">Jacket</span>
                          <span className="cart-subvalue">
                            /{getValues(jacket).join(", ")}
                          </span>
                        </div>
                      </li>
                      <li>
                        <div>
                          <span className="cart-value">Addons</span>
                          <span className="cart-subvalue">
                            /{getValues(addons).join(", ")}
                          </span>
                        </div>
                      </li>
                      <li>
                        <div>
                          <span className="cart-value">Measurement</span>
                          <span className="cart-subvalue">
                            /{needMeasure ? "Bespoke" : "Pending"}
                          </span>
                        </div>
                      </li>
                    </ul>
                    <button
                      onClick={() => {
                        setDesignPage(0);
                      }}
                      className="edit"
                    >
                      <Link to="/design" className="cover-grid-item-4">
                        Edit
                      </Link>
                    </button>
                  </div>
                </div>
                <button className="close">X</button>
              </li>
              {needShirt ? (
                <li className="cart-item">
                  <div className="cart-item-left">
                    <img className="cart-image" src={Shirt} alt="suitimage" />
                    <div className="cart-details">
                      <ul>
                        <li>
                          <div>
                            <span className="cart-value">Shirt</span>
                            <span className="cart-subvalue">
                              {" "}
                              /{getValues(shirt).join(", ")}
                            </span>
                          </div>
                        </li>
                        <li
                          className="selected-fabric"
                          style={{
                            backgroundImage: `url(${custmoisedShirtLook.image})`,
                          }}
                        ></li>
                      </ul>
                      <button className="edit" onClick={() => editShirt()}>
                        <Link to="/design" className="cover-grid-item-4 ">
                          Edit
                        </Link>
                      </button>
                    </div>
                  </div>
                  <button onClick={() => setNeedShirt(false)} className="close">
                    X
                  </button>
                </li>
              ) : (
                <></>
              )}
            </ul>
          </div>
          <div className="cart-bill">
            <h3>Order Summary</h3>
            <table class="order-totals-table ">
              <tbody>
                <tr class="order-subtotal">
                  <th scope="row">Subtotal</th>
                  <td class="text-right">₹ {subTotal}</td>
                </tr>
                <tr class="order-shipping">
                  <th scope="row">Estimated Shipping</th>
                  <td class="text-right"> ₹ {shipping} </td>
                </tr>
                <tr class="order-total">
                  <th scope="row">Estimated Total</th>
                  <td class="text-right">₹ {total}</td>
                </tr>
              </tbody>
            </table>
            <button className="checkout-btn">
              <Link to="/checkout" className="cover-grid-item-4">
                CHECKOUT NOW
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
