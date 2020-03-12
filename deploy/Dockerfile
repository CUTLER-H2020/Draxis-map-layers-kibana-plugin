FROM node:10.15.2 

# Add user since Kibana can't bootstrap plugins with root users
RUN useradd -ms /bin/bash kibana-user

USER kibana-user

WORKDIR /home/kibana-user/

# Clone Kibana source code for caching
RUN git clone https://github.com/elastic/kibana.git kibana --progress

COPY build-plugin.sh /shell/

ENTRYPOINT ["/bin/bash", "/shell/build-plugin.sh"]
