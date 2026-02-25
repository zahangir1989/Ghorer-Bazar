import "./App.css";
import Collection from "./component/home/Collection";
import Footer from "./component/home/Footer";
import Navbar from "./component/home/Navbar";
import Product from "./component/Product";

function App() {
  return (
    <>
      
      <Navbar />
      <Product />
      <Collection/>
      <Footer/>
    </>
  );
}

export default App;
