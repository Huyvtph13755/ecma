const Header = {
    render() {
        return /* html */`<div class="max-w-screen-lg m-auto font-sans">
        <div class="bg-slate-900">
        <a href=""><img class="py-4 mx-auto" src="https://picsum.photos/150/50" alt=""></a>
      </div>
      <div class="bg-amber-700 flex justify-between py-2 px-8 h-11">
        <div>
          <ul class="flex block">
            <li class="ml-8 hover:border-b-2 border-white"><a class="text-indigo-50 hover:text-sky-400" href="/">Trang chủ</a></li>
            <li class="ml-8 hover:border-b-2 border-white"><a class="text-indigo-50 hover:text-sky-400" href="product">Tuyển sinh</a></li>
            <li class="ml-8 hover:border-b-2 border-white"><a class="text-indigo-50 hover:text-sky-400" href="about">Chương trình đào tạo</a></li>
            <li class="ml-8 hover:border-b-2 border-white"><a class="text-indigo-50 hover:text-sky-400" href="">Góc sinh viên</a></li>
            <li class="ml-8 hover:border-b-2 border-white"><a class="text-indigo-50 hover:text-sky-400" href="">Tuyển dụng</a></li>
          </ul>
        </div>
        <div class="flex">
          <input class="outline-none pl-2" type="text">
          <button type="submit" class="bg-slate-900 text-slate-50 text-xs px-4 ml-2 hover:bg-slate-800 border-solid border-2 border-light-blue-500">TÌM KIẾM</button>
        </div>
      </div>
      </div>`;
    },
};
export default Header; 