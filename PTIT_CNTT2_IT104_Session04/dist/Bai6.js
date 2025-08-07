"use strict";
// tính giá cuối cùng sau giảm giá
function getFinalPrice_bai6(product) {
    if (product.discount) {
        return product.price - product.discount;
    }
    return product.price;
}
//in ra thông tin chi tiết của 1 sản phẩm
function printProductInfo_bai6(product) {
    console.log(`Tên: ${product.name}`);
    console.log(`Giá gốc: ${product.price.toLocaleString("vi-VN")} VND`);
    //nếu có giảm giá thì in thêm giá sau giảm
    if (product.discount) {
        let finalPrice = getFinalPrice_bai6(product);
        console.log(`Giá sau giảm: ${finalPrice.toLocaleString("vi-VN")} VND`);
    }
    console.log(`Danh mục: ${product.category.name}`);
}
const listProduct_bai6 = [
    {
        id: "P001",
        name: "Áo sơ mi",
        price: 300000,
        category: { id: "A001", name: "Thời trang nam" },
        discount: 60000,
    },
    {
        id: "P002",
        name: "Giày Nike",
        price: 1200000,
        category: { id: "A002", name: "Giày dép" },
    },
    {
        id: "P003",
        name: "Túi xách LV",
        price: 850000,
        category: { id: "A003", name: "Phụ kiện thời trang" },
        discount: 150000,
    },
];
for (const product of listProduct_bai6) {
    printProductInfo_bai6(product);
}
