import { IoMdRemoveCircle } from "react-icons/io";
import { useSelector } from "react-redux";
import { BookState, IBook } from "../Redux/Reducer";

interface BookCardProps {
  Bookdata: IBook;
  handleRemoveButton: (id: string) => void;
}

export const CartCart = ({ Bookdata, handleRemoveButton }: BookCardProps) => {
  const BookList = useSelector((state: BookState) => state.Cart);
  var count = BookList.filter((item) => item.id == Bookdata.id);
  console.log(count, "count");
  return (
    <div className="cart-container">
      <div className="image">
        <img className="cart-img" src={Bookdata.url} />
      </div>
      <div>
        <h2>{Bookdata.title}</h2>
        <h4>{Bookdata.author}</h4>
        <p className="cart-discription">{Bookdata.description}</p>
      </div>
      <div>
        <h3>
          {Bookdata.price}
          <span>X</span>
          {Bookdata.count}=
          {Bookdata.price * (Bookdata.count ? Bookdata.count : 1)}
        </h3>
      </div>
      <div>
        <h1 onClick={(e) => handleRemoveButton(Bookdata.id)}>
          <IoMdRemoveCircle size={30}></IoMdRemoveCircle>
        </h1>
      </div>
    </div>
  );
};
