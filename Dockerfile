# use nginx to serve static storybook
FROM nginx:latest

WORKDIR /styless

# copy static files into nginx www directory
COPY . .

RUN yarn install

RUN yarn test:output

RUN yarn storybook:build

RUN cp dist/storybook /storybook
RUN cp nginx/storybook.conf /etc/nginx/sites-enabled

# expose ports
EXPOSE 80/tcp
EXPOSE 443/tcp

# run nginx
CMD ["/usr/sbin/nginx"]