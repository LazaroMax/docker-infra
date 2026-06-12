# Docker Infra

Infraestructura reproducible con Docker Compose: servidor web Nginx con proxy hacia un servicio Node.js.

## Servicios

- **web**: Nginx sirviendo contenido estático en el puerto 8080
- **app**: API en Node.js corriendo en el puerto 3000

## Cómo correrlo

```bash
docker-compose up -d
```

Luego visita:
- `http://localhost:8080` — sitio web
- `http://localhost:8080/api/` — API proxy

## Detener

```bash
docker-compose down
```

## Tecnologías

- Docker Compose
- Nginx
- Node.js 18

## Proyectos relacionados

Este servicio es consumido por las pruebas E2E en [cypress-e2e-suite](https://github.com/LazaroMax/cypress-e2e-suite)