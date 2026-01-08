const productService = require('../services/product.service');
const { successResponse, errorResponse } = require('../utils/response');

const index = async (req, res) => {
    try {
        const products = await productService.getAllProducts();
        successResponse(res, 200, 'Berhasil mengambil data produk', products);
    } catch (error) {
        errorResponse(res, error.statusCode || 500, error.message);
    }
};

const show = async (req, res) => {
    try {
        const product = await productService.getProductById(req.params.id);
        successResponse(res, 200, 'Detail produk ditemukan', product);
    } catch (error) {
        errorResponse(res, error.statusCode || 500, error.message);
    }
};

const store = async (req, res) => {
    try {
        const newProduct = await productService.createProduct(req.body);
        successResponse(res, 201, 'Produk berhasil dibuat', newProduct);
    } catch (error) {
        errorResponse(res, error.statusCode || 500, error.message);
    }
};

const update = async (req, res) => {
    try {
        const updated = await productService.updateProduct(req.params.id, req.body);
        successResponse(res, 200, 'Produk berhasil diupdate', updated);
    } catch (error) {
        errorResponse(res, error.statusCode || 500, error.message);
    }
};

const destroy = async (req, res) => {
    try {
        await productService.deleteProduct(req.params.id);
        successResponse(res, 200, 'Produk berhasil dihapus');
    } catch (error) {
        errorResponse(res, error.statusCode || 500, error.message);
    }
};

module.exports = { index, show, store, update, destroy };