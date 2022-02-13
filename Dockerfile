# use nginx to serve static storybook
FROM nginx:latest

WORKDIR /styless

# copy static files into nginx www directory
COPY dist/storybook .
COPY nginx /etc/nginx/sites-enabled

# expose ports
EXPOSE 8080/tcp
EXPOSE 443/tcp

# run nginx
CMD ["/usr/sbin/nginx"]