import Navigo from "navigo";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ProductPage from "./pages/products";
import AdminPosts from "./pages/posts";
import AdminAddPosts from "./pages/posts/add";
import AdminAddProducts from "./pages/ql_product/add";
import InCate from "./pages/products/inCate";
import AdminEditposts from "./pages/posts/edit";
import AdminEditproduct from "./pages/ql_product/edit";
import AdminEditcategory from "./pages/ql_cate/edit";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import ProductDetailPage from "./pages/products/detail";
import CartPage from "./pages/cart";
import AdminProducts from "./pages/ql_product";
import AdminCategories from "./pages/ql_cate";
import AdminAddCategories from "./pages/ql_cate/add";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (content, id) => {
    document.getElementById("app").innerHTML = await content.render(id);
    if(content.afterRender) await content.afterRender(id);
};
router.on("/admin/*", () => {}, {
    before: (done) =>{ 
        if(localStorage.getItem('user')){
            console.log('ahihi');
            const userId = JSON.parse(localStorage.getItem('user')).id;
            if(userId === 1){
                done();
            } else {
                document.location.href="/"
            }
        }
    }
})
router.on({
    "/": () => print(HomePage),
    "/about": () => print(AboutPage),
    "/products": () => print(ProductPage),
    "/products/:id": ({data}) => print(ProductDetailPage, data.id),
    "/category/:id": ({data}) => print(InCate, data.id),
    "/admin/posts": () =>print(AdminPosts),
    "/admin/posts/add": () =>print(AdminAddPosts),
    "/admin/products/add": () =>print(AdminAddProducts),
    "/admin/categories/add": () =>print(AdminAddCategories),
    "/admin/posts/:id/edit": ({data}) =>print(AdminEditposts, data.id),
    "/admin/products/:id/edit": ({data}) =>print(AdminEditproduct, data.id),
    "/admin/categories/:id/edit": ({data}) =>print(AdminEditcategory, data.id),
    "/signup": () => print(Signup),
    "/signin": () => print(Signin),
    "/admin/products": () =>print(AdminProducts),
    "/admin/categories": () =>print(AdminCategories),
    "/cart": () => print(CartPage)
});
router.resolve();
