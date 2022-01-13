import Banner from "../components/banner";
import NewList from "../components/newsList";
const HomePage = {
    render() {
        return /* html */ `
        <div class="mt-2">
        ${Banner.render()}
      </div>
      ${NewList.render()}
      `;
    },
};
export default HomePage;