import { useEffect, useState } from "react";
import Card from "./components/Cards";
import { Cards } from "./components/Cards/styles";
import Cart from "./components/Cart";
import { Empty } from "./components/Cart/styles";
import CartCard from "./components/CartCards";
import { CartCards } from "./components/CartCards/styles";
import Form from "./components/Form";
import { Input } from "./components/Form/styles";
import Header from "./components/Header/";
import Search from "./components/Search";
import Total from "./components/Total";
import { api } from "./services/api";
import { ButtonPrimary } from "./styles/Button";
import { ContainerMain, GlobalStyles } from "./styles/GlogbalStyles";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [products, setProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [valueInput, setValueInput] = useState("");

  const total = currentSale.reduce(
    (previous, current) => previous + current.price,
    0
  );

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await api.get("products");

        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    getProducts();
  }, []);

  function addToCart(idItem) {
    const hasProductCart = currentSale.find(({ id }) => id == idItem);

    if (!hasProductCart) {
      const foundProduct = products.find(({ id }) => id == idItem);

      setCurrentSale([...currentSale, foundProduct]);

      toast.success("Item adicionado ao Carrinho");
    } else {
      toast.error("Item já adicionado ao Carrinho");
    }
  }

  function removeToCart(currentItem) {
    const filtered = currentSale.filter((item) => item != currentItem);

    setCurrentSale(filtered);

    toast.success("Item removido");
  }

  function handleOnChange(event) {
    setValueInput(event.target.value);
  }

  function handleOnSubmit(event) {
    event.preventDefault();
    const searchProducts = products.filter((product) => {
      return (
        product.name.toLowerCase().includes(valueInput.toLocaleLowerCase()) ||
        product.category.toLowerCase().includes(valueInput.toLocaleLowerCase())
      );
    });
    setFilteredProducts(searchProducts);
  }

  function clearSearch() {
    setValueInput("");
    setFilteredProducts([]);
  }

  return (
    <main>
      <GlobalStyles />
      <Header>
        <Form onSubmit={handleOnSubmit}>
          <Input
            type="text"
            value={valueInput}
            onChange={handleOnChange}
            placeholder="Buscar produto"
          />
          <ButtonPrimary height="medium" type="submit">
            Pesquisar
          </ButtonPrimary>
        </Form>
      </Header>

      {filteredProducts.length ? (
        <Search valueInput={valueInput} onClick={clearSearch} />
      ) : (
        ""
      )}

      <ContainerMain filteredProducts={filteredProducts.length}>
        <Cards>
          {filteredProducts.length
            ? filteredProducts.map(({ id, name, category, price, img }) => {
                return (
                  <Card
                    key={id}
                    id={id}
                    name={name}
                    category={category}
                    price={price}
                    img={img}
                    onClick={() => addToCart(id)}
                  />
                );
              })
            : products.map(({ id, name, category, price, img }) => {
                return (
                  <Card
                    key={id}
                    id={id}
                    name={name}
                    category={category}
                    price={price}
                    img={img}
                    onClick={() => addToCart(id)}
                  />
                );
              })}
        </Cards>

        <Cart>
          {currentSale.length ? (
            <div>
              <CartCards>
                {currentSale.map((item) => {
                  return (
                    <CartCard
                      key={item.id}
                      img={item.img}
                      name={item.name}
                      category={item.category}
                      onClick={() => removeToCart(item)}
                    />
                  );
                })}
              </CartCards>
              <Total total={total} onClick={() => setCurrentSale([])} />
            </div>
          ) : (
            <Empty>
              <p>Sua sacola está vazia</p>
              <span>Adicione itens</span>
            </Empty>
          )}
        </Cart>
        <Toaster position="top-right" reverseOrder={true} />
      </ContainerMain>
    </main>
  );
}

export default App;
