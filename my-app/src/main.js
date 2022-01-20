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

const router = new Navigo("/", {
    linksSelector: "a"
});

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
    "/news/:id": ({
        data
    }) => {
        const {
            id
        } = data;
        print(DetailNewsPage.render(id));
    },
    "/news/edit/:id": ({
        data
    }) => {
        const {
            id
        } = data;
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

// const a = 10;
// const b = 20;

// function display(result){
//     document.getElementById('app').innerHTML = result;
// }
// function sum(a, b, callback){
//     const c = a + b;
//     callback(c);
// }
// sum(a, b, function(result){
//     console.log(result);
//     document.getElementById('app').innerHTML = result;
// })


// function loadScript(src, callback){
//     const script = document.createElement('script');
//     script.src = src;
//     script.onload = () => {
//         callback(null, script);
//     }
//     script.onerror = () => {
//         callback(new Error("Couldn't load"));
//     }
//     document.head.append(script);
// }
// loadScript('https://classroom.google.com/u/1/c/NDUxNDg3NDYyMDE4/m/NDQ4NDEyNzEzMDc2/details', function(error,script){
//     console.log(`${script.src} is loaded`);
//     if(error){
//         console.log(error);
//     }else{
//         console.log(error)
//     }
// })


// const toTinh = new Promise(function (resolve, reject) {
//     const status = true;
//     setTimeout(() => {
//         if (status) {
//             resolve("gật")
//         } else {
//             reject("Lắc")
//         }
//     }, 3000)
// })

// toTinh.then(function (result) {
//         console.log(result)
//     })
//     .then(() => {
//         setTimeout(() => {
//             console.log("Hinh nhu co gi khong dung")
//         }, 3000)
//     })
//     .catch(errr)


// function loadScript(src){
//     return new Promise((resolve, reject) => {
//         const script = document.createElement("script");
//         script.src = src;
//         script.onload = () => {
//             resolve(script);
//         }
//         script.onerror = () => {
//             reject(new Error("Lỗi kết nối"));
//         }
//         document.head.append(script);
//     })
// }
// loadScript ('https://classroom.google.com/u/1/c/NDUxNDg3NDYyMDE4/m/NDQ4NDEyNzEzMDc2/details')
// .then(script => console.log(script))
// .catch(error => console.log(error))