import { api } from "../../services/api"
import { useEffect, useState } from "react"
import { HeaderForm } from "../Header"
import Cards from "../Cards"
import { RingLoader } from "react-spinners"
import { UlStyled } from "./styled"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { LoadingStyled } from "./loading"

export function Feed() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await api.get('/products', {
          params: {
            name_like: search,
          }
        })
        setProducts(response.data)
      } catch (error) {
        console.error(error)

      } finally {
        setLoading(false)
      }
    }
    getProducts()
  }, [search])

  if (loading) {
    return (
      <LoadingStyled>
        <RingLoader color="#27ae60" loading={true} />
      </LoadingStyled>
    );
  }
  return (
    <>
      <HeaderForm callback={(inputSearch) => setSearch(inputSearch)} cart={cart} setCart={setCart} />
      <main>
        <ToastContainer />
        <UlStyled>
          {products.map((products) => <Cards key={products.id} products={products} setCart={setCart} cart={cart} />)}
        </UlStyled>
      </main>
    </>
  )
}

export default Feed
