import { getAll } from '../../api/product';
import Header from "../../components/header";
import Footer from "../../components/footer";
import Banner2 from "../../components/sub_banner";
import List from "../../components/showPrInCate";
const ProductPage = {
    async render() {
        const response = await getAll()
        return /* html */`
        ${Header.render()}
        ${Banner2.render()}
        ${await List.render()}
        ${Footer.render()}
        `;
    },
    afterRender(){
        Header.afterRender()
    }
};
export default ProductPage;