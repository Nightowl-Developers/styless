# use nginx to serve static storybook
FROM nginx:latest



LABEL hash=git rev-parse --verify HEAD

# copy static files into nginx www directory
COPY ../dist/storybook /path/to/nginx

# copy config files into nginx
COPY ./config /etc/nginx

# expose ports
EXPOSE 80/tcp
EXPOSE 443/tcp

# run nginx

