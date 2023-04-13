FROM node:14 AS web-build
WORKDIR /usr/src/app
COPY . .
RUN npm install && npm run build

# Use official nginx image as the base image
FROM nginx:latest

# Copy the build output to replace the default nginx contents.
COPY --from=web-build /usr/src/app/build/ /usr/share/nginx/html

# Expose port 80
EXPOSE 80