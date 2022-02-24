import { signin } from "../api/user";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import Footer from "../components/footer";
import Header from "../components/header";
const Signin = {
    render(){
        return /* html */ `
        ${Header.render()}
        <section
        class="relative z-10 flex-auto flex items-center justify-center text-sm text-center text-gray-600 py-32 px-4 sm:px-6 lg:px-8">
        <div class="w-full max-w-sm">
            <form id="formSignin">
                <h1 class="pb-6 font-bold text-xl">ĐĂNG NHẬP</h1>
                <div class="relative">
                    <label for="email-address" class="sr-only">Email</label>
                    <input x-ref="email" id="email" name="email" type="email" required
                        class="text-gray-900 ring-gray-900 ring-opacity-5 placeholder-gray-400 appearance-none bg-white rounded-md block w-full px-3 py-2 border border-transparent shadow ring-1 sm:text-sm mb-4 focus:border-teal-500 focus:ring-teal-500 focus:outline-none"
                        placeholder="Email" value="" @input="dirty = true" />
                </div>
                <div class="relative">
                    <label for="password" class="sr-only">Mật khẩu</label>
                    <input x-ref="password" id="password" name="password" type="password" required
                        class="text-gray-900 ring-gray-900 ring-opacity-5 placeholder-gray-400 appearance-none bg-white rounded-md block w-full px-3 py-2 border border-transparent shadow ring-1 sm:text-sm mb-6 focus:border-teal-500 focus:ring-teal-500 focus:outline-none"
                        placeholder="Mật khẩu" @input="dirty = true" />
                </div>
                <button
                    class="block w-full py-2 px-3 border border-transparent rounded-md text-white font-medium bg-gray-700 shadow-sm sm:text-sm mb-10 hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50">
                    ĐĂNG NHẬP
                </button>
            </form>
        </div>
    </section>
        ${Footer.render()}
        `
    },
    afterRender(){
        const formSignin = document.querySelector('#formSignin');
        formSignin.addEventListener('submit', async (e) => {
            e.preventDefault();
            try {
                const { data } = await signin({
                    email: document.querySelector('#email').value,
                    password: document.querySelector('#password').value,
                });
                if(data){
                    console.log(data.user);
                    // Lưu thông tin user vào localStorage
                    localStorage.setItem("user", JSON.stringify(data.user));
                    toastr.success("Đăng nhập thành công, chuyển trang sau 2s");
                    setTimeout(() => {
                        document.location.href="/"
                    }, 2000)
                }

            } catch (error) {
                toastr.error(error.response.data);
            }
            
        })
    }
}
export default Signin;