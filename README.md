# routes-mai

## 1. Полезные ссылки

### Trello
https://trello.com/b/ArGHW6hz/routes

### Макеты
https://www.figma.com/file/U48u7BUlVQXPNtKj9uI6zR/Routes

### Bootstrap элементы для Figma
https://www.figma.com/file/SOKxEK5GCOvJ6Emh5L3x8I/Bootstrap-v4-uikit-(Copy)

### Документация bootstrap
https://react-bootstrap.github.io/

## 2. Локальная раскатка сервиса

### Фронт
- Зайти в папку `frontend`:  
`cd frontend/`  
- Подтянуть правильные версии зависимостей:  
`yarn`
- Запустить фронтенд сервер:  
`yarn start`

### Бекенд
- Зайти в папку `backend`:  
`cd backend/`  
- Подтянуть правильные версии зависимостей:  
`yarn`
- Запустить бекенд сервер:  
`yarn start`

### База
- В корне проекта ввести команду для запуска докер контейнеров:  
`docker-compose -f docker-compose.dev.yml up`

Для остановки контейнеров:  
`docker-compose -f docker-compose.dev.yml down`

(!) При запуске базы прогоняются все скрипты из папки `/scripts` в лексикографическом порядке.  
_01_script.sql_ - для генерации таблиц  
_02_script.sql_ - для генерации тестовых данных  

Для просмотра содержимого базы напрямую (без бека): 
- Узнать хеш контейнера с базой:  
`docker container ls`
- Зайти внутрь запущенного контейнера с базой:  
`docker exec -it 86483cb170bf /bin/bash` - поменять хеш
- Подключиться к базе _routes-mai_ под пользователем _mai_:  
`psql routes-mai mai`
