import data from "../data";
const HomePage = {
    render() {
        console.log(data);
        return /* html */ `<div class="max-w-screen-lg m-auto font-sans">
        <div class="mt-2">
        <a href=""><img class="w-full" src="https://picsum.photos/1000/400" alt=""></a>
      </div>
      <div>
        <h2 class="font-bold text-cyan-900 text-xl my-6">TIN TỨC HỌC TẬP</h2>
      </div>
      <div class="grid grid-cols-3 gap-6">
      ${data.map((post) => `
      <div class="border-solid border border-gray-300 py-4 px-4">
          <a href="/news/${post.id}"><img src="${post.img}" alt=""></a>
          <a class="text-amber-600 font-bold hover:text-orange-400" href="/news/${post.id}">${post.title}</a>
          <p class="text-xs">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, atque debitis eveniet soluta adipisci pariatur architecto animi deserunt iusto eligendi modi, consectetur non odio hic!</p>
        </div>
      `).join("")}
      </div>
      <div>
        <h2 class="font-bold text-cyan-900 text-xl my-6">HOẠT ĐỘNG SINH VIÊN</h2>
      </div>
      <div class="grid grid-cols-3 gap-6">
      ${data.map((post) => `
      <div class="border-solid border border-gray-300 py-4 px-4">
          <a href=""><img src="${post.img}" alt=""></a>
          <a class="text-amber-600 font-bold hover:text-orange-400" href="">${post.title}</a>
          <p class="text-xs">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, atque debitis eveniet soluta adipisci pariatur architecto animi deserunt iusto eligendi modi, consectetur non odio hic!</p>
        </div>
      `).join("")}
      </div></div>`;
    },
};
export default HomePage;