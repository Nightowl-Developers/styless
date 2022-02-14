# use nginx to serve static storybook
FROM nginx:latest

WORKDIR /styless

RUN rm -f /etc/nginx/sites-enabled/*.conf

# copy static files into nginx www directory
COPY dist/storybook /storybook
COPY nginx /etc/nginx

# expose ports
EXPOSE 80/tcp
EXPOSE 443/tcp