import { useDispatch, useSelector } from "react-redux";
import { CartCart } from "../CartComponets/CartCart";
import { BookState, IBook } from "../Redux/Reducer";
import { PageWraper } from "../shared/componets/PageWraper";

function Cart() {
  const CartList = useSelector((state: BookState) => state.Cart);
  const dispatch = useDispatch();
  let Total = 0;
  CartList.map((x) => (Total += x.price * (x.count ? x.count : 1)));

  return (
    <>
      <PageWraper title="Cart">
        <div className="continer-card">
          {CartList.length !== 0 ? (
            <div>
              <div>
                {CartList.map((data: IBook) => (
                  <CartCart
                    Bookdata={data}
                    handleRemoveButton={(bookId) => {
                      dispatch({ type: "RemoveFromCart", payload: { bookId } });
                    }}
                  ></CartCart>
                ))}
              </div>
              <div className="cart-container border-hide">
                <div />
                <div />
                <h1>{Total}</h1>
              </div>
            </div>
          ) : (
            <div className="empty-div">
              <h1>Your Crat is empty</h1>
            </div>
          )}
        </div>
      </PageWraper>
    </>
  );
}

export default Cart;
