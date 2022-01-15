import data from "../data";
import Footer from "../components/footer";
import Header from "../components/header";
const DetailNewsPage = {
    render(id) {
        const found = data.find((element) => element.id === id);

        return `
        ${Header.render()};
        <div class="mx-auto max-w-screen-lg font-sans">
            <h1 class="font-bold text-cyan-900 text-xl my-6">${found.title}</h1>
            <img class="w-full" src="${found.img}" />
            <p>${found.desc}</p>
        </div>
        ${Footer.render()};
        `;
    },
};
export default DetailNewsPage; 