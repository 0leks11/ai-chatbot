# Шаг 1: Используем базовый образ Node.js
FROM node:16-alpine

# Шаг 2: Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Шаг 3: Копируем package.json и package-lock.json в рабочую директорию
COPY package*.json ./

# Шаг 4: Устанавливаем зависимости проекта
RUN npm install

# Шаг 5: Копируем остальные файлы приложения в рабочую директорию
COPY . .

# Шаг 6: Собираем React-приложение для production
RUN npm run build

# Шаг 7: Указываем порт, который будет использоваться приложением
EXPOSE 3000

# Шаг 8: Запускаем собранное приложение с помощью HTTP-сервера
RUN npm install -g serve
CMD ["serve", "-s", "build", "-l", "3000"]