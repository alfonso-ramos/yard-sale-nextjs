import { useEffect, useState } from "react";
import axios from 'axios';


const useGetProducts = (API) => {
  const [products, setProducts] = useState([])

  const getData = async () => {
      const res = await axios.get(API)
      setProducts(res.data)
  }

  useEffect(() => {
      getData()
  }, [])

  return products
}

export default useGetProducts
