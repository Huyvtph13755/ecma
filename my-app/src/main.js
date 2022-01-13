// class Animal {
//     constructor(color, type) {
//         this.color = color;
//         this.type = type;
//     }

//     showInfo() {
//         console.log(`
//             Màu sắc: ${this.color}
//             Loại: ${this.type}
//         `);
//     }
// }
// const cat = new Animal("Màu vàng", "Mèo mun");
// const cat2 = new Animal("Màu xanh", "Mèo");
// cat.showInfo();
// cat2.showInfo();

import Navigo from "navigo";
import HomePage from "./Pages/home";
import About from "./Pages/about";
import Product from "./Pages/product";
import Header from "./components/header";
import Footer from "./components/footer";
import DetailNewsPage from "./Pages/detailNews";
const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.getElementById("header").innerHTML = Header.render();
    document.getElementById("app").innerHTML = content;
    document.getElementById("footer").innerHTML = Footer.render();
};


router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/about": () => {
        print(About.render());
    },
    "/product": () => {
        print(Product.render());
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(DetailNewsPage.render(id));
    },
});
router.resolve();