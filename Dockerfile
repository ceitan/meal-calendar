# Usar la imagen base de Node.js
FROM node:16

# Crear el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos necesarios al contenedor
COPY package.json ./
COPY index.js ./

# Instalar dependencias
RUN npm install

# Exponer el puerto
EXPOSE 3232

# Comando para ejecutar la aplicación
CMD ["node", "index.js"]