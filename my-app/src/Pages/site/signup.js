import Header from "../../components/header";
const signup = {
    render() {
        return /* html */ `
        ${Header.render()};
            <main class="relative z-10 flex-auto flex items-center justify-center text-sm text-center text-gray-600 py-16 px-4 sm:px-6 lg:px-8">
        <div class="w-full max-w-sm">
         
        <form action="#">
        <h1 class="pb-6 font-bold text-xl">ĐĂNG KÍ</h1>
        <div class="relative">
            <label for="name" class="sr-only">Họ và tên</label>
            <input x-ref="name" id="name" name="name" type="name" required class="text-gray-900 ring-gray-900 ring-opacity-5 placeholder-gray-400 appearance-none bg-white rounded-md block w-full px-3 py-2 border border-transparent shadow ring-1 sm:text-sm mb-4 focus:border-teal-500 focus:ring-teal-500 focus:outline-none" placeholder="Họ và tên" value="" @input="dirty = true"  />
            </div>
            <div class="relative">
            <label for="user" class="sr-only">Tên đăng nhập</label>
            <input x-ref="user" id="user" name="user" type="user" required class="text-gray-900 ring-gray-900 ring-opacity-5 placeholder-gray-400 appearance-none bg-white rounded-md block w-full px-3 py-2 border border-transparent shadow ring-1 sm:text-sm mb-4 focus:border-teal-500 focus:ring-teal-500 focus:outline-none" placeholder="Tên đăng nhâp" value="" @input="dirty = true"  />
            </div>
            <div class="relative">
            <label for="email-address" class="sr-only">Email</label>
            <input x-ref="email" id="email-address" name="email" type="email" required class="text-gray-900 ring-gray-900 ring-opacity-5 placeholder-gray-400 appearance-none bg-white rounded-md block w-full px-3 py-2 border border-transparent shadow ring-1 sm:text-sm mb-4 focus:border-teal-500 focus:ring-teal-500 focus:outline-none" placeholder="Email" value="" @input="dirty = true"  />
            </div>
        <div class="relative">
            <label for="password" class="sr-only">Mật khẩu</label>
            <input x-ref="password" id="password" name="password" type="password" required class="text-gray-900 ring-gray-900 ring-opacity-5 placeholder-gray-400 appearance-none bg-white rounded-md block w-full px-3 py-2 border border-transparent shadow ring-1 sm:text-sm mb-6 focus:border-teal-500 focus:ring-teal-500 focus:outline-none" placeholder="Mật khẩu" @input="dirty = true"  />
            </div>
            <div class="relative">
            <label for="re-password" class="sr-only">Nhập lại mật khẩu</label>
            <input x-ref="re-password" id="re-password" name="re-password" type="re-password" required class="text-gray-900 ring-gray-900 ring-opacity-5 placeholder-gray-400 appearance-none bg-white rounded-md block w-full px-3 py-2 border border-transparent shadow ring-1 sm:text-sm mb-6 focus:border-teal-500 focus:ring-teal-500 focus:outline-none" placeholder="Nhập lại mật khẩu" @input="dirty = true"  />
            </div>              
        <button type="submit" class="block w-full py-2 px-3 border border-transparent rounded-md text-white font-medium bg-gray-700 shadow-sm sm:text-sm mb-10 hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50">
            ĐĂNG KÍ
        </button>
        </form>
        </div>
        </main>
       `;
    },
};
export default signup;