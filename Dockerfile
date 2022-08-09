# specify base image
FROM node:16-alpine


# install some dependencies
COPY ./ ./
RUN npm run install
RUN npm run build
RUN npm run seed

# default command
# CMD ["npm", "run", "seed"]
# CMD ["npm", "run", "build"]
CMD ["npm", "run", "start"]