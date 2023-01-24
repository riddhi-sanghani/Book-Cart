import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { BookState, IBook } from "../Redux/Reducer";

interface BookCardProps {
  Bookdata: IBook;
  handleCartButton: (data: IBook) => void;
}

export const BookCard = ({ Bookdata, handleCartButton }: BookCardProps) => {
  const BookList = useSelector((state: BookState) => state.Cart);
  var cartData = BookList.find((item) => item.id == Bookdata.id);

  console.log(Bookdata, "Bookdata");
  return (
    <div className={`book-item`}>
      <div className={"cart-icon"}>
        <div>
          <h3>{cartData?.count ? cartData.count : ""}</h3>
        </div>

        <AiOutlineShoppingCart
          size={30}
          onClick={(e) => handleCartButton(Bookdata)}
        ></AiOutlineShoppingCart>
      </div>

      <img className="card-img-top" alt="" src={Bookdata.url} />
      <div>
        <h3>{Bookdata.title}</h3>
        <div className="auther-price">
          <span>{Bookdata.author}</span>
          <h3>{Bookdata.price}</h3>
        </div>
        <p className="cart-discription">{Bookdata.description}</p>
      </div>
    </div>
  );
};
