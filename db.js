const Sequelize = require('sequelize')

const db = new Sequelize('shopdb', 'shopper', 'shoppass', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        min: 0,
        max: 5,
    }
})

const User = db.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING;
        allowNull: false
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
    manufacturer: Sequelize.STRING,
    price: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    }
})

const Cart = db.define('cart',{
    user_id : {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    product_id : {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    description: {
        type: Sequelize.TEXT
    },
    amount : {
        type: Sequelize.INTEGER
    }
})

db.sync()
    .then(() => console.log("Database has been synced"))
    .catch((err) => console.error("Error creating database"))

exports = module.exports = {
    User, Product, Cart
}