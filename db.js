const Sequelize = require('sequelize')

const db = new Sequelize('shopdb', 'shopper', 'shoppassword', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        min: 0,
        max: 5,
    }
})

const Vendor = db.define('vendors', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})

const Product = db.define('products', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    vendor: Sequelize.STRING,
    price: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    },
    quantity:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
})



const Cart = db.define('cart',{
    vendor_id : {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    product_id : {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    description: {
        type: Sequelize.TEXT
    },
    quantity:{
        type: Sequelize.INTEGER
    },
    price : {
        type: Sequelize.INTEGER
    }
})

Cart.hasMany(Product);
Product.belongsTo(Cart);
Cart.hasMany(Vendor);
Vendor.belongsTo(Cart);
// Vendor.hasMany(Product);
// Product.belongsTo(Vendor);

db.sync()
    .then(() => console.log("Database has been synced"))
    .catch((err) => console.error("Error creating database"))

exports = module.exports = {
    Vendor, Product, Cart
}