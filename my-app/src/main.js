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
import AboutPage from "./Pages/about";
import ProductPage from "./Pages/site/product";
import NewsPage from "./Pages/site/news";
import Signin from "./Pages/site/signin";
import Signup from "./Pages/site/signup";
import DetailNewsPage from "./Pages/detailNews";
import DashBoardPage from "./Pages/admin/dashboard";
import AddNewsPage from "./Pages/admin/news/add";
import AdminNewsPage from "./Pages/admin/news";
import EditNews from "./Pages/admin/news/edit";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.getElementById("app").innerHTML = content;
};


router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/about": () => {
        print(AboutPage.render());
    },
    "/product": () => {
        print(ProductPage.render());
    },
    "/news": () => {
        print(NewsPage.render());
    },
    "/signin": () => {
        print(Signin.render());
    },
    "/signup": () => {
        print(Signup.render());
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(DetailNewsPage.render(id));
    },
    "/news/edit/:id": ({ data }) => {
        const { id } = data;
        print(EditNews.render(id));
    },
    "/admin/dashboard": () => {
        print(DashBoardPage.render());
    },
    "/admin/news": () => {
        print(AdminNewsPage.render());
    },
    "/admin/news/add": () => {
        console.log("12");
        print(AddNewsPage.render());
    },
});
router.resolve();