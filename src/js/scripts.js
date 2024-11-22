// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  try {
    const orderNumber = (await input('What is your order number?: ')).trim();
    const orders = new Set();
    const orderQuantites = [];
    if (orderNumber.length != 6) {
      throw new Error('Order number must be 6 characters long.');
    }
    if (!/^[a-zA-Z0-9]+$/.test(orderNumber)) {
      throw new Error('Order number must be alphanumeric.');
    }
    if (!orders.has(orderNumber)) {
      orders.add(orderNumber);
    }
    else {
      throw new Error('Order number already exists.');
    }

    const quantity = (await input('What is the quantity?: ')).trim();
    if (isNaN(quantity) || !Number.isInteger(Number(quantity))) {
      throw new Error('Quantity must be a whole number.');
    }
    if (quantity < 1 || quantity > 100) {
      throw new Error('Quantity must be between 1 and 100.');
    }
    orderQuantites.push(quantity);
  }

  catch (error) {
    output(error.message);
  }
}
