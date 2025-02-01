import Order from '../models/Order.js';
import User from '../models/User.js';

const syncTableDatabase = async () => {
  await Order.sync({ force: false });
  await User.sync({ force: false });
};

export default syncTableDatabase;