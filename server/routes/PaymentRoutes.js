
// const express = require('express');
// const router = express.Router();
// const paymentController = require('../controllers/paymentController');

// // حماية route باستخدام middleware
// router.post('/payment', paymentController.processPayment);

// module.exports = router;
// routes/paymentRoutes.js
// const PaymentAuthMiddleware = require('../middleware/PaymentAuthMiddleware'); // استدعاء الميدل وير للحماية

// const authMiddleware = require('../middleware/PaymentAuthMiddleware'); // الميدل وير للتحقق من التوكن
// const {paymentController} = require('../controllers/paymentController');
// حماية مسار الدفع عبر ميدل وير التحقق من التوكن
// router.post('/payment',authMiddleware, paymentController.processPayment);
// router.post('/payment', authMiddleware, processPayment);
// router.post('/payment', isAuthenticated, processPayment);
// إدارة مسار الدفع 

const express = require('express');
const router = express.Router();
const { processPayment } = require('../controllers/paymentController');//يتم استيراد دالة processPayment من paymentController.js، وهي المسؤولة عن تنفيذ منطق الدفع.
const { isAuthenticated , isUser} = require('../middleware/PaymentAuthMiddleware');

router.post('/payment', isAuthenticated, isUser, processPayment);

module.exports = router;


// const express = require('express');
// const router = express.Router();
// const paymentController = require('../controllers/paymentController');

// // route بدون حماية
// router.post('/payment', paymentController.processPayment);

// module.exports = router;
