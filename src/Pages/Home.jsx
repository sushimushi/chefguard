import {
  Categories,
  MainBanner,
  TimelineComponent,
  WhatWeProvide,
  ProductGrid,
} from "../Components";

const data = [
  {
    img: "./src/assets/images/main-offer-banner.jpg",
    inStock: false,
    name: "Prestige Stainless Steel 1500 Watts Electric Kettle - PKGSS 1.7",
    type: "Kettle",
    price: "2070",
    discount: "15% off",
  },
  {
    img: "./src/assets/images/main-offer-banner.jpg",
    inStock: false,
    name: "Prestige Stainless Steel 1500 Watts Electric Kettle - PKGSS 1.7",
    type: "Kettle",
    price: "2070",
    discount: "15% off",
  },
  {
    img: "./src/assets/images/main-offer-banner.jpg",
    inStock: false,
    name: "Prestige Stainless Steel 1500 Watts Electric Kettle - PKGSS 1.7",
    type: "Kettle",
    price: "2070",
    discount: "15% off",
  },
  {
    img: "./src/assets/images/main-offer-banner.jpg",
    inStock: false,
    name: "Prestige Stainless Steel 1500 Watts Electric Kettle - PKGSS 1.7",
    type: "Kettle",
    price: "2070",
    discount: "15% off",
  },
  {
    img: "./src/assets/images/main-offer-banner.jpg",
    inStock: false,
    name: "Prestige Stainless Steel 1500 Watts Electric Kettle - PKGSS 1.7",
    type: "Kettle",
    price: "2070",
    discount: "15% off",
  },
  {
    img: "./src/assets/images/main-offer-banner.jpg",
    inStock: false,
    name: "Prestige Stainless Steel 1500 Watts Electric Kettle - PKGSS 1.7",
    type: "Kettle",
    price: "2070",
    discount: "15% off",
  },
];

function Home() {
  return (
    <>
      <div className="section-wrapper">
        <MainBanner />
      </div>
      <div className="section-wrapper">
        <h1 className="section-header">Products</h1>
        <ProductGrid data={data} />
      </div>
      {/* <Categories /> */}
      <div className="section-wrapper">
        <h1 className="section-header">Timeline</h1>
        <TimelineComponent />
      </div>
      <div className="section-wrapper">
        <h1 className="section-header">What We Provide</h1>
        <WhatWeProvide />
      </div>
    </>
  );
}

export default Home;
