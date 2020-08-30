FROM node:lts as builder
WORKDIR /app
COPY . .
RUN npm i \
  && npm run build \
  && npm run test

FROM node:lts
WORKDIR /app
COPY --from=builder /app/coverage /coverage
COPY --from=builder /app/package.json /app/
COPY --from=builder /app/dist/ /app/
RUN npm i
CMD ["node", "index.js"]
