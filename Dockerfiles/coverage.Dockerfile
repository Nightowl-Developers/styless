# use nginx to serve static storybook
FROM nginx:latest

# copy static files into nginx www directory
COPY ../dist/coverage /coverage

# copy config files into nginx
COPY ./config/coverage.conf /etc/nginx/sites-enabled

# expose ports
EXPOSE 80/tcp
EXPOSE 443/tcp

# run nginx
