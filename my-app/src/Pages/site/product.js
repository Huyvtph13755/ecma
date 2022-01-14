import ListProduct from "../../components/listProduct";
import Header from "../../components/header";
import Footer from "../../components/footer";
const Product = {
    render() {
        return /* html */ `
        ${Header.render()};
        ${ListProduct.render()}
       ${Footer.render()}
       `;
    },
};
export default Product;