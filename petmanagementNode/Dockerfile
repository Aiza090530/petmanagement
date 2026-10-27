FROM node:24-alpine
WORKDIR /app
COPY --chown=node:node package.json server.js ./
ENV NODE_ENV=production
ENV PORT=3001
USER node
EXPOSE 3001
CMD ["node", "server.js"]
