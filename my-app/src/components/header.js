import { reRender } from "../utils";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
const Header = {
    render() {
      const a = JSON.parse(localStorage.getItem('user'))
        return /* html */`<header>
        <div class="relative bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6">
                <div
                    class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                    <div class="flex justify-start lg:w-0 lg:flex-1">
                        <a href="/">
                            <span class="sr-only">Workflow</span>
                            <img class="h-8 w-auto sm:h-10"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/2560px-Playstation_logo_colour.svg.png"
                                alt="">
                        </a>
                    </div>
                    <nav class="hidden md:flex space-x-10">
                        <a href="/" class="text-base font-medium text-gray-500 hover:text-gray-900">
                            Trang chủ
                        </a>
                        <a href="/#/products" class="text-base font-medium text-gray-500 hover:text-gray-900">
                            Sản phẩm
                        </a>
                        <a href="news" class="text-base font-medium text-gray-500 hover:text-gray-900">
                            Tin tức
                        </a>
                        <a href="contact.html" class="text-base font-medium text-gray-500 hover:text-gray-900">
                            Liên hệ
                        </a>
                    </nav>
                    
  
  
                    ${localStorage.getItem('user') ? `<div class="bg-white flex flex-col justify-center">
                    <div class="flex items-center justify-center">
                        <div class=" relative inline-block text-left dropdown">
                            <span class="rounded-md shadow-sm"><button
                                    class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                                    type="button" aria-haspopup="true" aria-expanded="true"
                                    aria-controls="headlessui-menu-items-117">
                                    <span id="email"></span>
                                    <svg class="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </button></span>
                            <div
                                class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                                <div class="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                                    aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117"
                                    role="menu">
                                    <div class="py-1">
                                        <a href="/admin/products" tabindex="0"
                                            class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                                            role="menuitem">Dashboard</a>
                                        <a href="/cart" tabindex="1"
                                            class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                                            role="menuitem">Giỏ hàng</a>
                                        <a href="/" tabindex="1"
                                            class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                                            role="menuitem">Thanh toán</a>
                                    </div>
                                    <div class="py-1">
                                        <a href="javascript:void(0)" tabindex="3"
                                            class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                                            role="menuitem" id="logout">Đăng xuất</a>
                                    </div>
  
                        
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                  `: `<div class="bg-white flex flex-col justify-center">
                  <div class="flex items-center justify-center">
                      <div class=" relative inline-block text-left dropdown">
                          <span class="rounded-md shadow-sm"><button
                                  class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                                  type="button" aria-haspopup="true" aria-expanded="true"
                                  aria-controls="headlessui-menu-items-117">
                                  <span>Tài khoản</span>
                                  <svg class="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor">
                                      <path fill-rule="evenodd"
                                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                          clip-rule="evenodd"></path>
                                  </svg>
                              </button></span>
                          <div
                              class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                              <div class="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                                  aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117"
                                  role="menu">
                                  <div class="py-1">
                                      <a href="/signin" tabindex="1"
                                          class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                                          role="menuitem">Đăng nhập</a>
                                  </div>
                                  <div class="py-1">
                                      <a href="/signup" tabindex="3"
                                          class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                                          role="menuitem">Đăng kí</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>`}
                    <style>
                        .dropdown:focus-within .dropdown-menu {
                            opacity: 1;
                            transform: translate(0) scale(1);
                            visibility: visible;
                        }
                    </style>
                </div>
            </div>
        </div>
    </header>`;
    },
    afterRender(){
      // Lấy thông tin từ localStorage
      // Sử dụng JSON.parse để chuyển đổi chuỗi sang object
      const email = document.querySelector('#email');
      const logout =  document.querySelector('#logout');
      if(email){
        email.innerHTML = JSON.parse(localStorage.getItem('user')).email;
      }
      if(logout){
        logout.addEventListener('click', function(){
          localStorage.removeItem('user');
          reRender(Header, "#header");
          toastr.success("Logout thành công")
        })
      }
    }
};
export default Header;