## Recommendations:

1. Use a remote-box: https://training.shoppinpal.com/solution.html
1. Use VSCode (visual studio) with an extension to sync any files between local and remote-box. This way you can use VSCode as an editor and the remote-box as the executor: https://training.shoppinpal.com/configuring-webstorm/sftp-with-visual-studio.html

## Run Producer

1. Setup environment variables with their respective values in `.env` file

    ```
    REDIS_URL=value
    ```
1. `cd producer`
1. Start producer on local machine (w/o docker):

    ```
    npm install && \
      chmod 744 setenv.sh && \
      . ./setenv.sh && \
      node redisKueProducer.js
    ```
1. OR, start producer on remote machine (w/ docker):

    ```
    npm install && \
      chmod 744 setenv.sh && \
      . ./setenv.sh && \
      docker-compose up
    ```
1. Scale to multiple producers on remote machine:

    ```
    npm install && \
      chmod 744 setenv.sh && \
      . ./setenv.sh && \
      docker-compose scale worker=5
    ```

TODO: `npm install` should happen inside the docker container instead of being volume mounted.
Otherwise you could mistakenly mount binaries resulting from `npm install` for a non-6.x version into a container that runs 6.x!!