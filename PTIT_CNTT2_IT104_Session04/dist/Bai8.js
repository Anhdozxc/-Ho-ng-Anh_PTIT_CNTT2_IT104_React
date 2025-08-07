"use strict";
// tính tổng đơn hàng
function calculateOrderTotal(order) {
    let total = 0;
    for (const item of order.items) {
        total += item.product.price * item.quantity;
    }
    return total;
}
//in đơn hàng ra console
function printOrder(order) {
    console.log(`Đơn hàng: #${order.orderId}`);
    console.log(`Khách hàng: ${order.customerName}`);
    console.log("Sản phẩm:");
    for (const item of order.items) {
        let name = item.product.name;
        let qty = item.quantity;
        let price = item.product.price;
        let lineTotal = price * qty;
        console.log(`- ${name} x ${qty} = ${lineTotal.toLocaleString("vi-VN")} VND`);
    }
    let total = calculateOrderTotal(order);
    console.log(`Tổng cộng: ${total.toLocaleString("vi-VN")} VND`);
    if (order.note) {
        console.log(`Ghi chú: ${order.note}`);
    }
}
const orderExample = {
    orderId: "ORD001",
    customerName: "Đỗ Hoàng Anh",
    items: [
        {
            product: { masp: "SP001", name: "Áo sơ mi", price: 250000 },
            quantity: 2,
        },
        {
            product: { masp: "SP002", name: "Quần tây", price: 400000 },
            quantity: 1,
        },
    ],
    note: "Giao sau 18h",
};
printOrder(orderExample);
