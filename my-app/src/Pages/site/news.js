import NewsList from "../../components/newsList";
import Header from "../../components/header";
import Footer from "../../components/footer";
const news = {
    render() {
        return /* html */ `
        ${Header.render()};
        ${NewsList.render()}
       ${Footer.render()}
       `;
    },
};
export default news;