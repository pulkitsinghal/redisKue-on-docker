## Recommendations:

1. Use a remote-box: https://training.shoppinpal.com/solution.html
1. Use VSCode (visual studio) with an extension to sync any files between local and remote-box. This way you can use VSCode as an editor and the remote-box as the executor: https://training.shoppinpal.com/configuring-webstorm/sftp-with-visual-studio.html

## Run Monitor

1. Setup environment variables with their respective values in `.env` file

    ```
    REDIS_URL=value
    ```
1. `cd monitor`
1. Start monitor on local machine:

    ```
    npm install && \
      chmod 744 setenv.sh && \
      . ./setenv.sh && \
      node monitor.js
    ```
1. OR, start monitor on remote machine:

    ```
    npm install && \
      chmod 744 setenv.sh && \
      . ./setenv.sh && \
      docker-compose up
    ```

## Goal: see how many get stuck versus how many finish

## Bonus: measure throughput