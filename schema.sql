
DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;


    CREATE TABLE products(
    item_id INTEGER AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(80) NOT NULL,
    department_name VARCHAR(80) NOT NULL,
    price FLOAT(6,2)NOT NULL,
    stock_quantity INTEGER NOT NULL ,
    PRIMARY KEY(item_id)
    );
    
    INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("iPhone X case", "Electronics", 19.99, 30), ("iPhone X", "Electronics", 1200.00, 15), ("Sofa", "Furniture", 499.99, 5), ("Backpack", "HandBags and Wallets", 100.00, 20),
    ("iPhone X Charger", "Electronics", 9.49, 50), ("Starbucks Coffe", "Groceries", 12.40, 100), ("Sour Gummies", "Groceries", 2.15, 200), ("Toothbrush", "Personal Care", 1.99, 70),("Deodorant", "Personal Care", 4.50, 35), ("Hand Cream ", "Personal Care ", 8.50, 10);
    
    SELECT * FROM products;