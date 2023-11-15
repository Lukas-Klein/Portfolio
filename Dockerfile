FROM node:19.5.0-alpine AS build

WORKDIR /app

COPY . .

RUN npm i -g pnpm

RUN pnpm install
RUN pnpm build

FROM nginxinc/nginx-unprivileged:stable-alpine AS deploy

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]