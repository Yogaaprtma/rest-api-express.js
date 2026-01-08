const prisma = require('../config/prisma');

const findAll = async () => {
    return await prisma.product.findMany({
        orderBy: { createdAt: 'desc' }
    });
};

const findById = async (id) => {
    return await prisma.product.findUnique({
        where: { id: parseInt(id) }
    });
};

const create = async (data) => {
    return await prisma.product.create({
        data: {
            name: data.name,
            price: data.price,
            stock: data.stock,
            description: data.description
        }
    });
};

const update = async (id, data) => {
    return await prisma.product.update({
        where: { id: parseInt(id) },
        data: data
    });
};

const remove = async (id) => {
    return await prisma.product.delete({
        where: { id: parseInt(id) }
    });
};

module.exports = { findAll, findById, create, update, remove };