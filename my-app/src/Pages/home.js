import Banner from "../components/banner";
import Banner2 from "../components/sub_banner";
import Footer from "../components/footer";
import Header from "../components/header";
import ProductList from "../components/productList";
import NewsList from "../components/newsList";

const HomePage = {
    async render() {
        return /* html */`
            
                <div id="header">
                    ${Header.render()}
                </div>
                <div class="banner">
                   ${Banner.render()}
                </div>
                <div class="product">
                    ${await ProductList.render()}
                </div>
                <div class="banner">
                    ${Banner2.render()}
                </div>
                <div class="news">
                    ${await NewsList.render()}
                </div>
                ${Footer.render()}
            
        `;
    },
    afterRender(){
        Header.afterRender();
    }
};
export default HomePage;