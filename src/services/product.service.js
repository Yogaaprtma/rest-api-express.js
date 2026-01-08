const productRepo = require('../repositories/product.repository');
const HttpError = require('../utils/httpError');

const getAllProducts = async () => {
    return await productRepo.findAll();
};

const getProductById = async (id) => {
    const product = await productRepo.findById(id);
    if (!product) {
        throw new HttpError(404, 'Produk tidak ditemukan');
    }
    return product;
};

const createProduct = async (data) => {
    // Validasi sederhana
    if (!data.name || !data.price || !data.stock) {
        throw new HttpError(400, 'Nama, Harga, dan Stok wajib diisi');
    }
    return await productRepo.create(data);
};

const updateProduct = async (id, data) => {
    await getProductById(id);
    return await productRepo.update(id, data);
};

const deleteProduct = async (id) => {
    await getProductById(id);
    return await productRepo.remove(id);
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};