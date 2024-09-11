import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {

        const request = await fetch(url)
        const products = await request.json()
        setData(products)

    } catch (error) {
        console.error("Veri çekme hatası:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data;
};

export default useFetch;
