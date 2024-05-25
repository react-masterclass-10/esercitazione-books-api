import Books from "../components/Books";
import Form from "../components/Form";

function Home(){
    return(
        <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Biblioteca Albero Bello</h1>
          </div>
          <Form/>
        </div>
        <div className="row">
          <Books/>
        </div>
      </div>
    )
}

export default Home;