// esempio di un oggetto di risposta api
/* 
{
    "id": 84,
    "title": "Frankenstein; Or, The Modern Prometheus",
    "authors": [
        {
            "name": "Shelley, Mary Wollstonecraft",
            "birth_year": 1797,
            "death_year": 1851
        }
    ],
    "translators": [],
    "subjects": [
        "Frankenstein's monster (Fictitious character) -- Fiction",
        "Frankenstein, Victor (Fictitious character) -- Fiction",
        "Gothic fiction",
        "Horror tales",
        "Monsters -- Fiction",
        "Science fiction",
        "Scientists -- Fiction"
    ],
    "bookshelves": [
        "Gothic Fiction",
        "Movie Books",
        "Precursors of Science Fiction",
        "Science Fiction by Women"
    ],
    "languages": [
        "en"
    ],
    "copyright": false,
    "media_type": "Text",
    "formats": {
        "text/html": "https://www.gutenberg.org/ebooks/84.html.images",
        "application/epub+zip": "https://www.gutenberg.org/ebooks/84.epub3.images",
        "application/x-mobipocket-ebook": "https://www.gutenberg.org/ebooks/84.kf8.images",
        "application/rdf+xml": "https://www.gutenberg.org/ebooks/84.rdf",
        "image/jpeg": "https://www.gutenberg.org/cache/epub/84/pg84.cover.medium.jpg",
        "text/plain; charset=us-ascii": "https://www.gutenberg.org/ebooks/84.txt.utf-8",
        "application/octet-stream": "https://www.gutenberg.org/cache/epub/84/pg84-h.zip"
    },
    "download_count": 73638
}
*/
import { useBooks } from "../context/BookContext";

function Books() {

  const {books} = useBooks();

    return (
          <>
            {books.map((book) => (
            <div className="col-3 g-2" key={book.id}>
              <div className="card">
                <img src={book.formats["image/jpeg"]} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="card-text">
                    {book.authors.map((author) => (
                      <span key={author.name}>{author.name}</span>
                    ))}
                  </p>
                  <a href={book.formats["text/html"]} className="btn btn-primary">
                    Leggi
                  </a>
                </div>
              </div>
            </div>
          ))
          }
          </>
    );
}

export default Books;