## Recommendations:

1. Use a remote-box: https://training.shoppinpal.com/solution.html
1. Use VSCode (visual studio) with an extension to sync any files between local and remote-box. This way you can use VSCode as an editor and the remote-box as the executor: https://training.shoppinpal.com/configuring-webstorm/sftp-with-visual-studio.html

## Run Redis

1. Setup environment variables with their respective values in `.env` file

    ```
    REDIS_PASS=value
    ```
1. `cd redis`
1. Start redis: `. ./setenv.sh && docker-compose up`

