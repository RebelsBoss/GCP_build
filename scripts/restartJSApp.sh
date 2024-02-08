#!/bin/bash
# Determine the pid
PID=`ps -C node -o pid=`
kill -9 $PID

nohup node index.js > js-demo.log 2>&1 &
