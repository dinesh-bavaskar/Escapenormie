const CART_KEY = "easyhunt_cart_v1";

export function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
}

export function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function addToCart(item, qty = 1) {
  const cart = getCart();
  const index = cart.findIndex((c) => c.id === item.id);

  if (index >= 0) {
    cart[index].qty += qty;
  } else {
    cart.push({ ...item, qty });
  }

  saveCart(cart);
  return cart;
}

export function removeFromCart(id) {
  const cart = getCart().filter((c) => c.id !== id);
  saveCart(cart);
  return cart;
}

export function updateQty(id, qty) {
  const cart = getCart().map((c) => (c.id === id ? { ...c, qty } : c));
  saveCart(cart);
  return cart;
}

export function cartTotal() {
  const cart = getCart();
  return cart.reduce((sum, c) => sum + c.price * c.qty, 0);
}
