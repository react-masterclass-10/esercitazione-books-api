import { createContext, useContext, useState } from "react";

const BooksContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useBooks = () => useContext(BooksContext);
// eslint-disable-next-line react/prop-types
export const BooksProvider = ({children}) => {
    const [books, setBooks] = useState([]);

    return (
        <BooksContext.Provider value={{books, setBooks}}>
            {children}
        </BooksContext.Provider>
    )
}