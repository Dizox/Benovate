const express = require('express');
const cors = require('cors')
const port = process.env.PORT || 3636;
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(cors());
// app.use(bodyParser());

const firstNames = [
  "Андрей",
  "Алексей",
  "Дмитрий",
  "Александр",
  "Иннос",
  "Ватрас",
  "Маттео",
  "Андре",
  "Бромор",
  "Онар",
  "Ли",
  "Феллан"
];

const secondNames = [
  "Яркендаров",
  "Хоринисов",
  "Рудников",
  "Краснов",
  "Черноусов",
  "Линтов",
  "Дьяконов",
  "Реактов",
  "Жейков",
  "Роспискинов",
  "Джейдов",
  "Пагов",
  "Вебпаков"
]

const groups = [
  "",
  "Администрация",
  "Бухгалтерия",
  "Отдел кадров",
  "Руководство",
  "Отдел продаж",
  "Высшее руководство",
  "Этаж 12",
  "Этаж 25"
]

const getRandomValue = (array) => {
  const arrayLength = array.length;
  return array[randomInteger(0, arrayLength - 1)];
}

const randomInteger = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const generateUsers = () => {
  let generatedUsers = [];

  for (let i = 0; i < 10000; i++) {
    generatedUsers.push({
      "id": i,
      "firstName": getRandomValue(firstNames),
      "secondName": getRandomValue(secondNames),
      "group": getRandomValue(groups)
    })
  }

  return generatedUsers;
}

const users = generateUsers();

app.get('/users', (req, res) => {
  res.json(users);
})

app.post('/users', (req, res) => {
  const user = req.body;
  users.push(user);
  res.json(user);
})

app.listen(3636)