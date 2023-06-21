FROM node:18-alpine as node

FROM node as deps
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node as builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN yarn build && yarn install --production --ignore-scripts --prefer-offline

FROM node as final
ENV NODE_ENV=production
WORKDIR /app
COPY --from=builder /app/next.config.js /app/next-i18next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder --chown=node:node /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
USER node
EXPOSE 3000
CMD ["node_modules/.bin/next", "start"]
