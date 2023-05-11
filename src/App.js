import { useState } from "react";
import { Container } from "react-bootstrap";
import Category from "./Components/Category";
import Header from "./Components/Header";
import Items from "./Components/Items";
import NavBar from "./Components/NavBar";
import { items } from "./data";

function App() {
  const [itemsData, setItemsData] = useState(items);
  const allCat = ["الكل", ...new Set(items.map((item) => item.cat))];
  const filterByCat = (cat) => {
    if (cat === "الكل") {
      setItemsData(items);
    } else {
      const newArr = items.filter((item) => item.cat === cat);
      setItemsData(newArr);
    }
  };
  const filterBySearch = (word) => {
    if (word !== "") {
      const searchArray = items.filter((item) => item.title === word);
      setItemsData(searchArray);
    }
  };
  return (
    <div className="font color-body">
      <NavBar filterBySearch={filterBySearch} />
      <Container>
        <Header />
        <Category filterByCat={filterByCat} allCat={allCat} />
        <Items itemsData={itemsData} />
      </Container>
    </div>
  );
}

export default App;
