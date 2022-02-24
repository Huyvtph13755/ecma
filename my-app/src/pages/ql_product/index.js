import { getAll } from '../../api/product';
import ProductList from "../../components/ql_product";
import axios from "axios";
import Header from "../../components/header_db"
const ProductPage = {
    async render() {

        return /* html */`
        ${Header.render()}
        ${await ProductList.render()}
        </div>
        `;
    },
    afterRender(){
        // Lấy danh sách button
        const btns = document.querySelectorAll('.btn');
        // tạo vòng lặp và lấy ra từng button
        btns.forEach(btn => {
            const id = btn.dataset.id;
            // Viết sự kiện khi click vào button call api và xóa sản phẩm
            btn.addEventListener('click', function(){
                const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?")
                if(confirm){
                    axios.delete(`http://localhost:3001/products/${id}`)
                    document.location.href = "/admin/products"
                }
            })
        })
    }
};
export default ProductPage;