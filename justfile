set dotenv-load

default:
  @just --list

boot:
  @deno run --allow-net --allow-read --allow-env src/server/main.ts &
  @sleep 1

start:
  @just boot
  @firefox http://$DOMAIN:$PORT

stop:
  @killall deno

restart:
  @just stop
  @just start


test:
  @just stop
  @just boot
  @curl http://$DOMAIN:$PORT
