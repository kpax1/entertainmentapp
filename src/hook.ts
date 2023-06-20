import { useState } from 'react';


const useSearch = (data: any) => {
  const [filterList, setFilterList] = useState<any>(null);

  const search:any = (e: React.ChangeEvent<HTMLInputElement>
    ) => {
    const searchterm = e.target.value;
    if (searchterm.length >= 2) {
      const searched = data.filter((movie: any) =>
        movie.title.toLowerCase().includes(searchterm.toLowerCase())
      );
      setFilterList(searched);
    } else {
      setFilterList(null);
    }
  };

  return { filterList, search }; // Return the filterList state
};

export default useSearch;
