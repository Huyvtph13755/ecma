import { reRender } from "../utils";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
const Header = {
    render() {
      const a = JSON.parse(localStorage.getItem('user'))
        return /* html */`<div class="min-h-full">
        <nav class="bg-gray-800">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-16">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <a href="/"></a>

                        </div>
                        <div class="hidden md:block">
                            <div class="ml-10 flex items-baseline space-x-4">
                                <a href="/"
                                    class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                                    aria-current="page">Home</a>
                                <a href="#"
                                    class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>
                                <a href="/admin/categories"
                                    class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Danh mục</a>

                                <a href="/admin/products"
                                    class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sản phẩm</a>
                                    
                                <a href="/admin/news"
                                    class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Tin
                                    tức</a>

                                <a href="#"
                                    class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Tài
                                    khoản</a>

                                <a href="logout"
                                    class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Đăng
                                    xuất</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
`;
    },
};
export default Header;