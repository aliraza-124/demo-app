let products = {}; // Mock database

export default function handler(req, res) {
  if (req.method === "POST") {
    const { name, description } = req.body;
    const productId = Object.keys(products).length + 1;
    products[productId] = { name, description };
    return res.status(200).json({ success: true, productId });
  }
  return res.status(405).json({ message: "Method Not Allowed" });
}
