import Navbar from "./components/Navbar"
import Categories from "./components/categories"
import Saleimage from "./components/salesimages"
import Topics from "./components/topics"
import Recommended from "./components/recommended"
import Popular from "./components/popular"
import Footer from "./components/footer"
function App()
{
    return(
        <div>
<Navbar></Navbar>
<Categories></Categories>
<Saleimage></Saleimage>
<Recommended></Recommended>
<Topics></Topics>
<Popular></Popular>
<Footer></Footer>
  </div>
    )
}
export default App