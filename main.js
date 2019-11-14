//viet theo react
import { getListProduct, addProduct, delProduct, showInfoProduct, updateProduct, callAPI } from "./utils/callAPI.js"

import Product from "./models/product.js"

//getElement
const getEle = id => document.getElementById(id);

//tạo content html
const renderHTML = () => {
    const contentHTML = `
    <div class="card text-white bg-dark">
    <div class="card-body">
        <h4 class="card-title">Danh sách sản phẩm</h4>
        <div class='container'>
            <div class="row">
                <div class="col-md-3">
                    <input id="maSP" class="form-control" placeholder="Mã SP" disabled />
                </div>
                <div class="col-md-3">
                    <input value="Iphone" id="tenSP" class="form-control" placeholder="Tên SP" />
                </div>
                <div class="col-md-3">
                    <input value="700" id="gia" class="form-control" placeholder="Giá" />
                </div>
                <div class="col-md-3">
                    <input value="/assets/img/sp_iphoneX.png" id="hinhAnh" class="form-control" placeholder="Link hình" />
                </div>
            </div>
            <br />
            <button id="btnThem" class="btn btn-success">Thêm sản phẩm</button>
            <button onclick="capNhatSP()" id="btnCapNhat" class="btn btn-success">Cap nhat</button>
        </div>
    </div>
</div>
<div class="container">
    <table class="table">
        <thead>
            <tr>
                <th>Mã SP</th>
                <th>Tên SP</th>
                <th>Giá </th>
                <th>Hình ảnh</th>
                <th></th>
            </tr>
        </thead>
        <tbody id="tblDanhSachSanPham">

        </tbody>
    </table>
</div>
    `;
    getEle("root").innerHTML = contentHTML;
}

//tạo bảng
const reanderTable = () => {
    // getListProduct()
    callAPI("GET", "product", null)
        .then(result => {
            // console.log(result);
            let content = "";
            result.data.map((item, index) => {
                content += `
                <tr>
                    <td>${item.id}</td>
                    <td>${item.tenSP}</td>
                    <td>${item.gia}</td>
                    <td><img width="100px" src="${item.hinhAnh}" alt="${item.tenSP}"></td>
                    <td>
                        <button onclick="suaSP(${item.id})" class="btn btn-success">Sửa</button>
                        <button onclick="xoaSP(${item.id})" class="btn btn-success">Xóa</button>
                    </td>
                </tr>
                `;
            })
            getEle("tblDanhSachSanPham").innerHTML = content;
        })
        .catch(error => {
            console.log(error);
        })
}



//goi ham
renderHTML();
reanderTable();

// add product
getEle("btnThem").addEventListener("click", () => {
    let name = getEle("tenSP").value;
    let price = getEle("gia").value;
    let img = getEle("hinhAnh").value;

    const product = new Product(name, price, img);
    console.log(product);
    // addProduct(product)
    callAPI("POST", "product", product)
        .then(result => {
            reanderTable();
        })
        .catch(error => {
            console.log(error);
        })

})

//del product
// console.log(window);

const xoaSP = id => {
    // delProduct(id)
    callAPI("DELETE", `product/${id}`, null)
        .then(result => {
            reanderTable();
        })
        .catch(error => {
            console.log(error);
        })
}
window.xoaSP = xoaSP;// vì nãy giờ khai báo nhiều file, chưa tạo ra html???<-check lại  -> nên phải ủy quyền lại window

//Sua san pham
//show
const suaSP = id => {
    // showInfoProduct(id)
    callAPI("GET", `product/${id}`, null)
        .then(result => {
            getEle("maSP").value = result.data.id;
            getEle("tenSP").value = result.data.tenSP;
            getEle("gia").value = result.data.gia;
            getEle("hinhAnh").value = result.data.hinhAnh;
        })
        .catch(error => {
            console.log(error);
        })
}
window.suaSP = suaSP;
const capNhatSP = () => {
    let id = getEle("maSP").value;
    let name = getEle("tenSP").value;
    let price = getEle("gia").value;
    let url = getEle("hinhAnh").value;
    const product = new Product(name, price, url);
    // updateProduct(id, product)
    updateProduct("PUT", `product/${id}`, product)
        .then(result => {
            reanderTable();
        })
        .catch(error => {
            console.log(error);
        })
}
window.capNhatSP = capNhatSP;