
# API REST Proyectos Académicos

API desarrollada con **Node.js, Express y MongoDB** para gestionar proyectos académicos.

## Módulos

- Clientes
- Universidades
- Tipos de Proyecto
- Etapas
- Proyectos

## Instalación

```bash
npm install
npm start
```

Servidor:

```
http://localhost:3000
```

## Endpoints principales

### Clientes
GET /clientes  
POST /clientes  
PUT /clientes/:id  
DELETE /clientes/:id  

### Universidades
GET /universidades  
POST /universidades  

### Tipos de Proyecto
GET /tipos-proyecto  
POST /tipos-proyecto  

### Etapas
GET /etapas  
POST /etapas  

### Proyectos
GET /proyectos  
POST /proyectos  

## Ejecutar con Docker

```bash
docker-compose up --build
```

Esto levantará:

- API Node.js
- MongoDB

## Probar con Postman

Ejemplo:

POST  
http://localhost:3000/clientes

Body JSON:

```
{
"nombre":"Juan Perez",
"email":"juan@gmail.com"
}
```
