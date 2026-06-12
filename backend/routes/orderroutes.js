import express from 'express';
const router = express.Router();
import { addOrderItems, getMyOrders, getOrderById, updateOrderToPaid, updateOrderToDelivered, getOrders } from '../controllers/ordercontroller.js';
import { protect, admin } from '../middleware/authmiddleware.js';

 router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders);
 router.route('/me').get(protect,getMyOrders);
 router.route('/:id').get(protect, getOrderById);
 router.route('/:id/pay').put(protect, updateOrderToPaid);
 router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered);


export default router;