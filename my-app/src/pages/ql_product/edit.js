import Banner from "../../components/banner";
import axios from "axios";
import {
    edit,
    get
} from "../../api/product";
import Header from "../../components/header_db"

const AdminEditProducts = {
    async render(id) {
      console.log(id);
      const { data } = await axios.get('http://localhost:3001/products/'+id+'?_expand=category');
      console.log(data);
      const cate = await axios.get('http://localhost:3001/categories')
        return /* html */ `
            ${Header.render()}
            <main>
            <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div class="px-4 py-6 sm:px-0">
                    <div class="border-4 border-dashed border-gray-200 rounded-lg min-h-fit">
                    <div class="mt-10 sm:mt-0">
                      <div class="mt-5 md:mt-0 md:col-span-2">
                        <form id="formAddProduct">
                          <div class="shadow overflow-hidden sm:rounded-md">
                            <div class="px-4 py-5 bg-white sm:p-6">
                              <div class="grid grid-cols-6 gap-6">
                              <div class="col-span-6 sm:col-span-4">
                              <img width="30%" class="rounded" src="${data.img}" />
                              <input type="hidden" value="${data.img}" id="img-old">
                                </div>
                                <div class="col-span-6 sm:col-span-4">
                                  <label for="cate" class="block text-sm font-medium text-gray-700">Danh mục</label>
                                  <select id="cate" class="cate mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                  ${cate.data.map((cate) => `
                                      <option value="${cate.id}" ${data.category.id == cate.id ? `selected` : ``}>${cate.name}</option>
                                  `).join("")}
                                  </select>
                                </div>
                                <div class="col-span-6 sm:col-span-4">
                                  <label for="name" class="block text-sm font-medium text-gray-700">Tên sản phẩm</label>
                                  <input type="text" value="${data.name}" name="name" id="name" autocomplete="family-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                </div>

                                <div class="col-span-6 sm:col-span-4">
                                  <label for="color" class="block text-sm font-medium text-gray-700">Màu sắc</label>
                                  <input type="text" value="${data.color}" name="color" id="color" autocomplete="email" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                </div>
                  
                                <div class="col-span-6 sm:col-span-3">
                                  <label for="country" class="block text-sm font-medium text-gray-700">Ảnh</label>
                                  <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div class="space-y-1 text-center">
                                    <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                    <div class="flex text-sm text-gray-600">
                                    <label for="img-product" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                        <span>Upload a file</span>
                                        <input id="img-product" name="img-product" type="file" class="sr-only">
                                    </label>
                                    <p class="pl-1">or drag and drop</p>
                                    </div>
                                    <p class="text-xs text-gray-500">
                                    PNG, JPG, GIF up to 10MB
                                    </p>
                                </div>
                                </div>
                                </div>
                  
                                <div class="col-span-6">
                                  <label for="desc" class="block text-sm font-medium text-gray-700">Mô tả</label>
                                  <textarea name="" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" id="desc" cols="30" rows="10">${data.desc}</textarea>
                                  </div> 
                                <div class="col-span-6">
                                  <label for="price" class="block text-sm font-medium text-gray-700">Giá (đ)</label>
                                  <input type="text" value="${data.price}" name="price" id="price" autocomplete="price" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                </div>                   
                              </div>
                            </div>
                            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                              <button class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Lưu
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                  </div>
                    </div>
                </div>
            </div>
        </main>
        `
    },
    afterRender(id) {
        const imgO = document.querySelector("#img-old").value;
        const formAddPost = document.querySelector('#formAddProduct');
        const CLOUDINARY_PRESET = "jkbdphzy";
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/ecommercer2021/image/upload";

        formAddPost.addEventListener('submit', async function (e) {
            e.preventDefault();

            
            if (document.querySelector("#img-product").value) {
                // Lấy giá trị của input file
                const file = document.querySelector('#img-product').files[0];
                // Gắn vào đối tượng formData
                const formData = new FormData();
                formData.append('file', file);
                formData.append('upload_preset', CLOUDINARY_PRESET);


                // call api cloudinary, để upload ảnh lên
                const {
                    data
                } = await axios.post(CLOUDINARY_API_URL, formData, {
                    headers: {
                        "Content-Type": "application/form-data"
                    }
                });
                // call API thêm bài viết

                edit({
                    id: id,
                    name: document.querySelector('#name').value,
                    categoryId: document.querySelector('#cate').value,
                    img: data.url,
                    desc: document.querySelector('#desc').value,
                    color: document.querySelector('#color').value,
                    price: document.querySelector('#price').value
                })
                document.location.href = "/admin/products"
            } else {
                edit({
                    id: id,
                    img: imgO,
                    name: document.querySelector('#name').value,
                    categoryId: document.querySelector('#cate').value,
                    desc: document.querySelector('#desc').value,
                    color: document.querySelector('#color').value,
                    price: document.querySelector('#price').value
                })
                document.location.href = "/admin/products"
            }

        });
    }
};
export default AdminEditProducts;