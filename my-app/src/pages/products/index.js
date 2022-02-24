import { getAll } from '../../api/product';
import Header from "../../components/header";
import Footer from "../../components/footer";
import Banner2 from "../../components/sub_banner";
import ProductList from "../../components/showProduct";
const ProductPage = {
    async render() {
        const response = await getAll()
        return /* html */`
        ${Header.render()}
        ${Banner2.render()}
        ${await ProductList.render()}
        ${Footer.render()}
        `;
    },
    afterRender(){
        Header.afterRender()
    }
};
export default ProductPage;