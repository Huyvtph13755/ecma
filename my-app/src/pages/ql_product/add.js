import Banner from "../../components/banner";
import axios from "axios";
import {
  add
} from "../../api/product";
import Header from "../../components/header_db"
import {
  getAll
} from '../../api/category';

const AdminAddProduct = {
  async render() {
    const response = await getAll()
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
                              
                              <div class="col-span-6 sm:col-span-4">
                                  <label for="cate" class="block text-sm font-medium text-gray-700">Danh mục</label>
                                  <select id="cate" class="cate mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                  ${response.data.map((cate) => `
                                      <option value="${cate.id}">${cate.name}</option>
                                  `).join("")}
                                  </select>
                                </div>
                                <div class="col-span-6 sm:col-span-4">
                                  <label for="name" class="block text-sm font-medium text-gray-700">Tên sản phẩm</label>
                                  <input type="text" name="name" id="name" autocomplete="family-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                </div>
                  
                                <div class="col-span-6 sm:col-span-4">
                                  <label for="color" class="block text-sm font-medium text-gray-700">Màu sắc</label>
                                  <input type="text" name="color" id="color" autocomplete="email" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                </div>
                  
                                <div class="col-span-6 sm:col-span-3">
                                  <label for="country" class="block text-sm font-medium text-gray-700">Ảnh</label>
                                  <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div class="space-y-1 text-center">
                                <img id="preview" width="30%" class="mx-auto text-gray-400">
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
                                  <textarea name="" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" id="desc" cols="30" rows="10"></textarea>
                                </div> 
                                <div class="col-span-6">
                                  <label for="price" class="block text-sm font-medium text-gray-700">Giá (đ)</label>
                                  <input type="text" name="price" id="price" autocomplete="price" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                </div>                   
                              </div>
                            </div>
                            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                              <button class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Thêm mới
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
  afterRender() {
    const imgLink = "";

    const imgPro = document.querySelector('#img-product')
    // preview
    imgPro.addEventListener('change', async function (e) {
      console.log(e);
      const CLOUDINARY_PRESET = "jkbdphzy";
      const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/ecommercer2021/image/upload";
      // Lấy giá trị của input file
      const file = document.querySelector('#img-product').files[0];
      if (file) {
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
        document.getElementById("preview").setAttribute("src", data.url)
        const formAddProduct = document.querySelector('#formAddProduct');
        formAddProduct.addEventListener('submit', async function (e) {
          e.preventDefault();
          // call API thêm bài viết
          add({
            name: document.querySelector('#name').value,
            categoryId: Number(document.querySelector('#cate').value),
            img: data.url,
            desc: document.querySelector('#desc').value,
            color: document.querySelector('#color').value,
            price: document.querySelector('#price').value
          })
          document.location.href = "/admin/products"
        });
      }
    })
  }
};
export default AdminAddProduct;