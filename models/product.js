const db=require("../util/database");
const Cart = require('./cart');




module.exports = class Product {
  constructor(id,title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute('INSERT INTO sys.products (title,price,imageUrl,description) VALUES (?,?,?,?)',
    [this.title,this.price,this.imageUrl,this.description]
    );

    
  }


  static deleteById(id) {
    return db.execute('DELETE FROM sys.products WHERE id = ?', [id]);
  }

   


  static fetchAll() {
    return db.execute('SELECT * FROM sys.products');
  }
  
  static findById(id){
    return db.execute('SELECT * FROM sys.products WHERE products.id = ?',[id]);
    
  
  }
};
