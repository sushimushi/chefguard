import React from "react";
import { Header, Footer } from "./Components";
import { Home, Product, ProductDetails } from "./Pages";
import { Route, Routes } from "react-router-dom";
// import "./style.css";
import './app.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/product/:id" element={<ProductDetails />}></Route>
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App


// import React from "react";
// import { MenuHeader } from "./MenuHeader";
// import "./style.css";

// export const Header = () => {
//   return (
//     <div className="header">
//       <div className="div">
//         <img className="rectangle" alt="Rectangle" src="rectangle-6.png" />
//         <MenuHeader
//           className="navbar"
//           divClassName="menu-header-variant"
//           divClassName1="menu-header-variant"
//           divClassName2="menu-header-variant"
//           divClassNameOverride="menu-header-variant"
//           hasDiv={false}
//           text="Home"
//           text1="About"
//           text2="Services"
//           text3="Products"
//         />
//         <button className="contact-button">
//           <div className="overlap-group">
//             <div className="text-wrapper-2">Contact Us</div>
//           </div>
//         </button>
//       </div>
//     </div>
//   );
// };

{/* <div className="header">
      <div className="div">
        <img className="rectangle" alt="Rectangle" src="rectangle-6.png" />
        <MenuHeader
          className="navbar"
          divClassName="menu-header-variant"
          divClassName1="menu-header-variant"
          divClassName2="menu-header-variant"
          divClassNameOverride="menu-header-variant"
          hasDiv={false}
          text="Home"
          text1="About"
          text2="Services"
          text3="Products"
        />
        <button className="contact-button">
          <div className="overlap-group">
            <div className="text-wrapper-2">Contact Us</div>
          </div>
        </button>
      </div>
    </div> */}