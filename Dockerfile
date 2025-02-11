FROM node:20.18.3

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

COPY . .

CMD [ "npm", "run", "dev" ]
