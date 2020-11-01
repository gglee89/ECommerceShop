# ECommerce Shop (Backend)

Node-Express Server with Mongoose

# Steps

- [x] Install `express`;
- [x] Copy `products` into `data/products.js`;
- [x] Setup `products` routes;
- [x] Setup `nvm` and install latest LTS;
- [x] Setup `ES Modules` instead of `CommonJS`;
- [x] Setup `MongoDB Cloud Atlas`
  - [x] Setup `MongoDB Cluster`;
  - [x] Setup `MongoDB Database User`;
  - [x] Setup `MongoDB Network` to 'Access to public'. (P.S: For production we should limit the access with the IP);
- [x] Setup `Mongoose`
  - [x] Install `npm i mongoose`;
  - [x] Setup environment variable `MONGO_URI`;
  - [x] Setup connection file `config/db.js` with connection string;
  - [x] Expected terminal console output:  
         `Server started in development. Listening to port 5000 MongoDB Connected: ecommerceshop-shard-00-02.vulhl.mongodb.net`
- [x] setup `colors.js`
  - [x] Install `npm i colors`
  - [x] Apply it to console messages, for example:
    1. console.log(Server started in ${process.env.NODE_ENV}. Listening to port ${PORT}`.yellow.bold`);
    2. console.log(MongoDB Connected: \${conn.connection.host}`.cyan.underline`);
    3. console.error(Error: \${error.message}`.red.underline.bold`);
  - [x] Setup `MongoDB` models
    - [x] `userModel`;
    - [x] `productModel`;
    - [x] `orderModel`;
