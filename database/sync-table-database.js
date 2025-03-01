import Order from '../models/Order.js';
import User from '../models/User.js';
import Product from '../models/Product.js';

const syncTableDatabase = async () => {
  await Order.drop(); 
  await User.drop(); 
  await Product.drop(); 

  await User.sync({ force: false }); 
  await Order.sync({ force: false }); 
  await Product.sync({ force: false });
};

export default syncTableDatabase;