# medium

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Task
Тестовое задание “Аналог Medium”.
Аутентификация.
Реализовать прототип аутентификации используя логин и пароль из базы данных.

Форма аутентификации должна валидироваться перед отправкой запроса. Для прототипа логин производится на фронте, подразумевается что Вы получите пользователя по полю email, сверите пароли и если они совпадают то “залогините” пользователя опираясь на его role.

Также должен быть реализован выход пользователя.
Не залогиненный пользователь.
Не залогиненый пользователь может лишь просматривать посты, он не может ни создавать новые, ни “хлопать” за существующие.
Читатель (role: reader).
Читатель не может создавать и редактировать существующие посты, но может хлопать за существующие, количество хлопков по типу Medium, не ограничено.
Писатель (role: writer).
Писатель может создавать, редактировать и удалять свои посты, но не может “хлопать”.
UI/UX.
Использование buefy обязательно. Кастомизировать его не нужно.


Требования к UI:


Наличие пагинации, если постов больше 10.
Наличие работоспособных кнопок для каждой роли.
Отдельный экран для логина.
Отдельный экран для создания / редактирования поста.

Значение кнопки хлопков должно изменяться без перезагрузки страницы.

Простой набросок приложения с разными вариантами карточек для разных ролей. 


Стек.
Vue 2.x+ (Vuex, VueRouter), Buefy, json-server (либо аналогичный, важно чтобы он полностью покрывал api создаваемое json-server).

db.json

```
{
  "users": [
    {
      "id": 1,
      "login": "writer@mail.com",
      "password": 123456,
      "role": "writer"
    },
    {
      "id": 2,
      "login": "reader@mail.com",
      "password": 123456,
      "role": "reader"
    }
  ],
  "posts": [
    {
      "id": 1,
      "title": "Название поста",
      "description": "Текст",
      "claps": 0,
      "createdAt": "2019-09-29T00:00:00.000Z",
      "updateAt": "2019-09-29T00:00:00.000Z",
      "userId": 1
    }
  ]
}
```