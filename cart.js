// ============================================================
// GIỎ HÀNG - lưu tạm trong localStorage (giỏ hàng của khách
// vãng lai không cần đăng nhập mới dùng được)
// ============================================================

const Cart = {
  KEY: "greenglow_cart",

  getItems() {
    try {
      const raw = localStorage.getItem(this.KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  },

  saveItems(items) {
    localStorage.setItem(this.KEY, JSON.stringify(items));
    this.updateBadge();
  },

  addItem(product, qty = 1) {
    const items = this.getItems();
    const existing = items.find((i) => i.id === product.id);
    if (existing) {
      existing.qty += qty;
    } else {
      items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image_url: product.image_url,
        qty: qty,
      });
    }
    this.saveItems(items);
  },

  updateQty(productId, qty) {
    let items = this.getItems();
    if (qty <= 0) {
      items = items.filter((i) => i.id !== productId);
    } else {
      const item = items.find((i) => i.id === productId);
      if (item) item.qty = qty;
    }
    this.saveItems(items);
  },

  removeItem(productId) {
    const items = this.getItems().filter((i) => i.id !== productId);
    this.saveItems(items);
  },

  clear() {
    localStorage.removeItem(this.KEY);
    this.updateBadge();
  },

  getTotal() {
    return this.getItems().reduce((sum, i) => sum + i.price * i.qty, 0);
  },

  getCount() {
    return this.getItems().reduce((sum, i) => sum + i.qty, 0);
  },

  updateBadge() {
    const badges = document.querySelectorAll("[data-cart-count]");
    const count = this.getCount();
    badges.forEach((b) => {
      b.textContent = count;
      b.style.display = count > 0 ? "inline-flex" : "none";
    });
  },

  formatVND(amount) {
    return amount.toLocaleString("vi-VN") + " ₫";
  },
};

document.addEventListener("DOMContentLoaded", () => Cart.updateBadge());
