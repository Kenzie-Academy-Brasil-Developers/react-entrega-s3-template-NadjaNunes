import { api } from "../../services/api"
import { useEffect, useState } from "react"
import { HeaderForm } from "../Header"
import Cards from "../CarProducts"
import { RingLoader } from "react-spinners"

export function Feed() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState('')

      useEffect(() => {
        const getProducts = async () => {
          try{
            const response = await api.get('/products', {
                params: {
                    name_like: search,
                }
            })
            
          setProducts(response.data)
          } catch (error){
            console.error(error)
            
          } finally {
            setLoading(false)
          }
        }
        getProducts()
      }, [search])
  
      if(loading){
        return <RingLoader color="#27ae60" loading={true} />
      }
      
    return (
      <>
        <HeaderForm callback={(inputSearch) => setSearch(inputSearch)} />
        <main>
        {products.map((products) => <Cards key={products.id} {... products}/>)}
        </main>
      </>
    )
  }
  
  export default Feed
  