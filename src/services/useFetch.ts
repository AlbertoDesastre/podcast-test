import { useEffect, useState } from "react";

export default function useFecth(url: string) {
  const [data, setData] = useState<null | any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((rawData) => {
        setData(rawData);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}
