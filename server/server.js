require("dotenv").config();
require('./models');
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const connectDB = require("./config/db");
// const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const journalistRoutes = require("./routes/journalistRoutes");
const articleRoutes = require("./routes/articleRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
//heba
// const newsRoutes = require("./routes/newsRoutes");

const radioRoutes = require("./routes/radioRoutes");

const mostViewRoute = require("./routes/mostViewRoute");
///////////////////////////////////
const videoRoutes = require('./routes/videoRoutes');

const adminRoutes = require('./routes/adminRoutes');
const contactMessage = require("./routes/contactMessageRoutes");
// const radioRoutes = require("./routes/radioRoutes");

const paymentRoutes = require('./routes/PaymentRoutes'); // ربط الـ API بـ paymentRoutes///////////////////////////
const bookmarkRoutes = require("./routes/bookMarkRoute");///////////////////////


const path = require("path");
const app = express();
// path: مكتبة مضمنة في Node.js تساعد في التعامل مع مسارات الملفات.
// app = express();: إنشاء تطبيق Express لتشغيل الخادم.



app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// يجعل مجلد uploads متاحًا عبر HTTP، بحيث يمكن الوصول إلى الملفات المرفوعة.


app.use(express.json());
// يتيح للخادم قراءة البيانات بتنسيق JSON التي يتم إرسالها في الطلبات

app.use(cookieParser());
// يسمح للخادم بقراءة الكوكيز (Cookies) التي يرسلها المستخدم في الطلبات

app.use(
  cors({
    origin: (_, callback) => {////////////////يسمح بطلبات CORS من أي نطاق (callback(null, true)).
      // credentials: true: يسمح بإرسال ملفات تعريف الارتباط (Cookies) مع الطلبات.
      callback(null, true);
    },
    credentials: true,
  })
);


connectDB();//يتصل بقاعدة البيانات عند تشغيل الخادم.

app.use("/user", bookmarkRoutes);////////////////
app.use('/api', paymentRoutes); /////////////////

app.use("/auth", authRoutes);
app.use("/api", contactMessage);
app.use("/api/articles", articleRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/journalist", journalistRoutes);
app.use("/api/videos", videoRoutes);
app.use('/admin', adminRoutes);
app.use("/api/radios", radioRoutes);
app.use('/uploads', express.static('uploads'));

//heba 
// app.use("/api/news", newsRoutes);
app.use("/api", mostViewRoute);
app.use("/api/radios", radioRoutes);


const PORT = process.env.PORT || 5000;//////////يتم تحديد رقم المنفذ (Port) من ملف البيئة .env أو استخدام 5000 إذا لم يكن محددًا.
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
 
