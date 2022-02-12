// Фреймворк веб-приложений.
require('dotenv').config();
const express = require("express");
const app = express();
// HTTP request logger middleware for node.js.
// Логгирование деталей запросов.
const morgan = require("morgan");
const path = require('path');
const cors = require('cors');
const session = require('express-session')
const pgSessionStore = require('connect-pg-simple')(session)

const PORT = 3229;

app.use(cors())

// Обработка POST запросов.
// urlencoded.
app.use(express.urlencoded({ extended: true }));
// json.
app.use(express.json());


// Импорт маршрутов.
const indexRouter = require("./routes/indexRouter");
const authRouter = require("./routes/authRouter");

//Подключаем логгирование запросов
app.use(morgan("dev"));

app.use(
  session({
    name: 'sid', // название куки
    store: new pgSessionStore({
      conString: //  настройки для подключения к БД, которая хранит куки (в данном случае это та же самая БД, которую мы используем в проекте)
        process.env.DB_URL_DEV === 'production'
          ? process.env.DB_URL_DEV
          : process.env.DB_URL_DEV,
    }),
    secret: process.env.STR, // ключ для шифрования cookies // require('crypto').randomBytes(10).toString('hex')
    resave: false,                     // Если true,  пересохраняет сессию, даже если она не поменялась
    saveUninitialized: true, // Если false, куки появляются только при установке req.session
    cookie: {
      secure: process.env.NODE_ENV === 'production', // В продакшне нужно "secure: true" для HTTPS
      maxAge: 1000 * 60 * 60 * 24 * 10, // время жизни cookies, ms (10 дней)
    },
  })
);

// Подключаем импортированные маршруты с определенным url префиксом.
app.use('/', indexRouter);
app.use('/auth', authRouter)


app.listen(PORT, () => {
  console.log('server started at http://localhost:%s', PORT);
})
