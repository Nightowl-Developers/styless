# use nginx to serve static storybook
FROM nginx:latest

# copy static files into nginx www directory
COPY dist/storybook /storybook

# copy config files into nginx
COPY /Dockerfiles/config/storybook.conf /etc/nginx/sites-enabled

# expose ports
EXPOSE 80/tcp
EXPOSE 443/tcp

# run nginx
CMD ["/usr/sbin/nginx"]