FROM node:lts-alpine as builder
WORKDIR '/app'
COPY package.json package-lock.json .
RUN npm ci
COPY . .
RUN npm run build

FROM node:lts-alpine
WORKDIR '/app'
COPY package.json package-lock.json server.js .
COPY --from=builder /app/build ./build
RUN npm ci --only=production
EXPOSE 8080
CMD ["node", "server.js"]