import Banner from "../components/banner";
import NewList from "../components/newProduct";
import Footer from "../components/footer";
import Header from "../components/header";
const HomePage = {
    render() {
        return /* html */ `
        ${Header.render()}
        <div class="mt-2">
        ${Banner.render()}
      </div>
      ${NewList.render()}
      ${Footer.render()}
      `;
    },
};
export default HomePage;