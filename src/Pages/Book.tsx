import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BookState, IBook } from "../Redux/Reducer/index";
import { BookCard } from "../BookComponets/BookCard";
import { Header } from "../shared/componets/Header";
import { PageWraper } from "../shared/componets/PageWraper";
const getBooks = async (): Promise<IBook[]> => {
  var data = require("../data/booklist.json");
  var newData = data.map((item: any) => {
    return { ...item, url: `https://picsum.photos/id/${item.id}/300/200` };
  });
  return newData;
};

function Book() {
  const BookList = useSelector((state: BookState) => state.Books);
  const CartList = useSelector((state: BookState) => state.Cart);
  const dispatch = useDispatch();
  console.log(BookList, "departmnets");
  useEffect(() => {
    getBooks().then((data) => {
      dispatch({ type: "fetch", payload: data });
    });
  }, []);
  return (
    <>
      <PageWraper title="Home">
        <div className="continer-card">
          {BookList.length !== 0 ? (
            BookList.map((data: IBook) => (
              <BookCard
                key={data.id}
                Bookdata={data}
                handleCartButton={(bookdata) => {
                  dispatch({
                    type: "addToCart",
                    payload: bookdata,
                  });
                }}
              ></BookCard>
            ))
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      </PageWraper>
    </>
  );
}

export default Book;
