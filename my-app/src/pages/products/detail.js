import { get } from '../../api/product';
import { addToCart } from '../../utils/cart';
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import Footer from "../../components/footer";
import Header from "../../components/header";

const ProductDetailPage = {
    async render(id) {
        const { data: product } = await get(id)
        return /* html */`
        ${Header.render()}
        <section>
        <div class="mt-2 max-w-7xl m-auto">
            <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Chi tiết sản phẩm</h2>
        </div>
        <div class="my-8 max-w-7xl m-auto md:flex bg-gray-500 items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
            <div class="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
                <img class="w-full rounded-3xl" alt="image of a girl posing"
                    src="${product.img}" />
            </div>
            <div class="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                <div class="border-b border-gray-200 pb-6">
                    <h1
                        class="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">
                        ${product.name}</h1>
                        <br>
                        <h2 class="lg:text-xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">${product.price}<u>đ</u></h2>
                        
                </div>
                <div class="py-4 border-b border-gray-200 flex items-center justify-between">
                    <p class="text-base leading-4 text-gray-800 dark:text-gray-300"><b>Màu sắc</b></p>
                    <div class="flex items-center justify-center">
                        <p class="text-sm leading-none text-gray-600 dark:text-gray-300">${product.color}</p>
                        <div class="w-6 h-6 ml-3 mr-4 cursor-pointer">
                        </div>
                    </div>
                </div>
                <div>
                    <p class="text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-7">
                        ${product.desc}</p>
                    <p class="text-base leading-4 mt-7 text-gray-600 dark:text-gray-300"><b>Mã sản phẩm:</b> ${product.id}
                    </p>
                    
                </div>
                <div>
                <p class="text-base leading-4 mt-7 text-gray-600 dark:text-gray-300"><b>Số lượng:</b>
                </p>
                <input type="number" id="inputValue" placeholder="1" class="form-input mt-1 block w-2/6 pl-2 outline-none py-1 rounded-sm"/>
            </div>
                
                <br>
                <button data-id="${product.id}" id="btnAddToCart" class="dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-gray-800 w-full py-4 hover:bg-gray-700 focus:outline-none">
                    Thêm vào giỏ hàng
                </button>
            </div>
        </div>



    </section>
        ${Footer.render()}
        `;
    },
    afterRender(){
        Header.afterRender();
        const btnAddToCart = document.querySelector('#btnAddToCart');
        const id = btnAddToCart.dataset.id;
        const inputValue = document.querySelector('#inputValue');

        btnAddToCart.addEventListener('click', async function(){
            // console.log(inputValue.value)
            const { data } = await get(id);
            console.log(data);
            addToCart({...data, quantity: inputValue.value ? inputValue.value : 1}, function(){
                toastr.success(`Thêm sản phẩm ${data.name} vào giỏ hàng thành công!`);
            })
        })
    }
};
export default ProductDetailPage;