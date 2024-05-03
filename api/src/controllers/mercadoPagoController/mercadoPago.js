require("dotenv").config();
const mercadopago = require("mercadopago");
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

mercadopago.configure({
  access_token: ACCESS_TOKEN,
});

const mercadoPago = async (pendingOrderId, itemsBody) => {
  let preference = {
    metadata: { relatedOrderId: pendingOrderId },
    items: itemsBody,

    back_urls: {
      success: "https://viandaexpress.vercel.app/payment",
      failure: "https://viandaexpress.vercel.app/payment",
      pending: "https://viandaexpress.vercel.app/payment",
    },
    auto_return: "approved",
  };

  try {
    const response = await mercadopago.preferences.create(preference);
    return {
      id: response.body.id,
    };
  } catch (error) {
    console.log(error);
    throw new Error("Error creating MercadoPago preference");
  }
};

module.exports = mercadoPago;
