// Project Nova - Merged configuration
// Supports production and sandbox payment modes

const paymentMode = process.env.PAYMENT_MODE === "production"
  ? "production"
  : "sandbox";

module.exports = { paymentMode };