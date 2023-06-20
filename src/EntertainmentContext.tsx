import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const EnterteinmentContext = createContext<any>(null);

export const EntertainmentProvider = ({ children }: any) => {
  const [data, setData] = useState([]);
  const [bookmarked, setBookmarked] = useState<any[]>([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("/data.json");
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    getData();
  }, []);


  useEffect(() => {
    // Retrieve bookmarked state from localStorage
    const savedBookmarked = localStorage.getItem("bookmarked");
    if (savedBookmarked) {
      setBookmarked(JSON.parse(savedBookmarked));
    }
  }, []);


  useEffect(() => {
    // Save bookmarked state in localStorage
    localStorage.setItem("bookmarked", JSON.stringify(bookmarked));
  }, [bookmarked]);







  const contextValue = {
    data,
    bookmarked,
    setBookmarked,
  };


    console.log(data)
  return (
    <EnterteinmentContext.Provider value={contextValue}>
      {children}
    </EnterteinmentContext.Provider>
  );
};
