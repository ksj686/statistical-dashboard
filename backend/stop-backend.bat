@echo off
echo Stopping Nest.js backend server on port 3000...
FOR /F "tokens=5" %%G IN ('netstat -aon ^| findstr ":3000"') DO (
    IF NOT "%%G" == "0" (
        echo Found process with PID: %%G
        taskkill /F /PID %%G
    )
)
echo Server stopped.
