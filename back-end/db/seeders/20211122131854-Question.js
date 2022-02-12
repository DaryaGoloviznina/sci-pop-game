'use strict';

module.exports = {
 up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Questions', [
     { question: 'Какая корпорация отвечает за развитие атомной энергетики в России? ', answer: 'Росатом', points: 100, topic_id: 1, createdAt: new Date(), updatedAt: new Date(), },
     { question: 'Какая корпорация отвечает за строительство ядерных ракет в России?', answer: 'Росатом', points: 200,  topic_id: 1, createdAt: new Date(), updatedAt: new Date(), },
     { question: 'Зарубежные проекты Росатом финансируются засчет средств российских налогоплательщиков? ', answer: 'Да', points: 300, topic_id: 1, createdAt: new Date(), updatedAt: new Date(), },
     { question: 'Мощность АЭС малой мощности в среднем составляет ... МВт?', answer: '100', points: 400, topic_id: 1, createdAt: new Date(), updatedAt: new Date(), },
     { question: 'Стоимость строительства двухблочной атомной станции большой мощности за рубежом сегодня: ... млрд долл США ', answer: '15', points: 500, topic_id: 1, createdAt: new Date(), updatedAt: new Date(), },
     
     { question: 'Конденсационный след самолета — облако? ', answer: 'Да', points: 100, topic_id: 2, createdAt: new Date(), updatedAt: new Date(), },
     { question: 'Загрязнение окружающей среды приводит к образованию кислотных дождей?', answer: 'Да', points: 200,  topic_id: 2, createdAt: new Date(), updatedAt: new Date(), },
     { question: 'Прогноз на неделю сегодня точнее прогноза на день 40 лет назад? ', answer: 'Нет', points: 300, topic_id: 2, createdAt: new Date(), updatedAt: new Date(), },
     { question: 'Потопы и наводнения связывают с разрушением озонового слоя Земли?', answer: 'Да', points: 400, topic_id: 2, createdAt: new Date(), updatedAt: new Date(), },
     { question: 'Термин «Эль-Ниньо в Тихом океане» используется для измерения уровня воды? ', answer: 'Нет', points: 500, topic_id: 2, createdAt: new Date(), updatedAt: new Date(), },
     
     { question: 'Айзек Азимов сформулировал два закона робототехники? ', answer: 'Нет', points: 100, topic_id: 3, createdAt: new Date(), updatedAt: new Date(), },
     { question: 'Слово «робот» – чешского происхождения', answer: 'Да', points: 200, topic_id: 3, createdAt: new Date(), updatedAt: new Date(), },
     { question: 'Министерство обороны Индии ведет разработку боевых роботов?', answer: 'Да', points: 300, topic_id: 3, createdAt: new Date(), updatedAt: new Date(), },
     { question: 'Русский робот Федор умеет садиться на шпагат? ', answer: 'Да', points: 400, topic_id: 3, createdAt: new Date(), updatedAt: new Date(), },
     { question: 'Boston Dynamics принадлежит японской SoftBank? ', answer: 'Нет', points: 500,  topic_id: 3, createdAt: new Date(), updatedAt: new Date(), },

     { question: 'WWF Russia финанисруется большей частью из России?', answer: 'Нет', points: 100, topic_id: 4, createdAt: new Date(), updatedAt: new Date(), },
     { question: 'Сколько литров воды нужно, чтобы вырастить одно авокадо?', answer: '80', points: 200, topic_id: 4, createdAt: new Date(), updatedAt: new Date(), },
     { question: 'Китайские производителя меда мешают мед с сиропом для увеличения объемов поставок?', answer: 'Да', points: 300, topic_id: 4, createdAt: new Date(), updatedAt: new Date(), },
     { question: 'На что заменяют орехи в индийских блюдах в недорогих ресторанах? ', answer: 'Арахис', points: 400, topic_id: 4, createdAt: new Date(), updatedAt: new Date(), },
     { question: 'Сколько глобальных поставщиков какако-сырья для проиводства шоколада в мире? ', answer: '3', points: 500,  topic_id: 4, createdAt: new Date(), updatedAt: new Date(), },

     { question: 'В россии есть рабочие поезда на технологии маглев?', answer: 'Нет', points: 100, topic_id: 5, createdAt: new Date(), updatedAt: new Date(), },
     { question: 'Ширина жд колеи в России ... мм?', answer: '1520', points: 200, topic_id: 5, createdAt: new Date(), updatedAt: new Date(), },
     { question: 'Китайские производителя жд техники - крупнешие в мире?', answer: 'Да', points: 300, topic_id: 5, createdAt: new Date(), updatedAt: new Date(), },
     { question: 'Сколько в России производителей подвижного состава? ', answer: '2', points: 400, topic_id: 5, createdAt: new Date(), updatedAt: new Date(), },
     { question: 'Пассажироперевозки РЖД убыточны? ', answer: 'Да', points: 500,  topic_id: 5, createdAt: new Date(), updatedAt: new Date(), },

    ], {});
   
 },

 down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Questions', null, {});
   
 }
};
