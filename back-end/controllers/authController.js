const bcrypt = require('bcrypt');
const { User } = require('../db/models');

/**
 * Завершает запрос с ошибкой аутентификации
 * @param {object} res Ответ express
 */
function failAuth(res) {
  return res.status(401).end();
}

/**
 * Подготавливает пользователя для записи в сессию
 * Мы не хотим хранить пароль в сессии, поэтому извлекаем только нужные данные
 * @param {object} user Объект пользователя из БД
 */
function serializeUser(user) {
  return {
    id: user.id,
    name: user.name,
  };
}

exports.isValid = (req, res, next) => {
  next();
};

exports.createUserAndSession = async (req, res, next) => {
  const { name, password } = req.body;
  console.log('create session', req.session?.user)
  try {
    // Мы не храним пароль в БД, только его хэш
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user0 = await User.findOne({ where: { name: name }, raw: true });

    if (user0) {
      res.json(null)
    } else {
      const user = await User.create({
        name,
        password: hashedPassword,
      });

      // записываем в req.session.user данные (id & name) (создаем сессию)
      req.session.user = serializeUser(user); // req.session.user -> id, name
    }


  } catch (err) {
    console.error('Err message:', err.message);
    console.error('Err code', err.code);
    return failAuth(res);
  }
  res.json(req.session.user); // ответ 200 + отправка cookies в заголовке на сервер
};

exports.checkUserAndCreateSession = async (req, res, next) => {
  const { name, password } = req.body;
  console.log('check session', ['user'] in req.session)
  try {
    // Пытаемся сначала найти пользователя в БД
    const user = await User.findOne({ where: { name: name }, raw: true });
    if (!user) return res.json(null);

    // Сравниваем хэш в БД с хэшем введённого пароля
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) return res.json(null);

    req.session.user = serializeUser(user); // записываем в req.session.user данные (id & name) (создаем сессию)

  } catch (err) {
    console.error('Err message:', err.message);
    console.error('Err code', err.code);
    return res.json('ошибка');
  }
  res.json(req.session.user); // ответ 200 + отправка cookies в заголовке на сервер
};

exports.destroySession = (req, res, next) => {
  console.log('DESTROY')
  req.session.destroy((err) => {
    if (err) return next(err);
    res.clearCookie('sid');
    res.end();
  });
}

exports.checkAuth = (req, res, next) => {
  if (req.session.user) {
    res.json(req.session.user)
  } else {
    res.json(null)
  }
}

