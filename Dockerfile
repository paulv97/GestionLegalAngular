# Etapa 1: Construir la aplicación Angular
FROM node:20 as builder

WORKDIR /app

# Copiar los archivos del proyecto y las dependencias
COPY package*.json ./
RUN npm install

COPY . .

# Construir la aplicación en modo de producción
RUN npm run build --prod

#RUN ls

# Etapa 2: Ejecutar la aplicación con un servidor HTTP ligero
FROM nginx:alpine

# Copiar los archivos construidos desde la etapa anterior
#COPY --from=builder /app/dist/GestionLegal/ /usr/share/nginx/html

# Configuración opcional para Angular con rutas (p.ej. Angular Router)
# Si estás usando rutas en tu aplicación Angular, descomenta las siguientes líneas
# RUN rm /etc/nginx/conf.d/default.conf
# COPY nginx-custom.conf /etc/nginx/conf.d

EXPOSE 80

# Comando para iniciar el servidor
CMD ["nginx", "-g", "daemon off;"]
