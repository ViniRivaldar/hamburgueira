import Nav from "./components/Nav";
import Header from "./components/Header";
import Home from "./pages/Home";

export default function Page() {
  return(
    <>
      <Nav/>
      <Header src='/burgerHome.png' alt='header page home'/>
      <Home/>
    </>
  )
}
