# Commandline jinja2 transpiler
## Setup

```shell
sudo dnf install python3-jinja2-cli
```

## Build

simple with a few params:
```shell
echo ENV_STATIC_ASSETS_URL: /static | jinja2 index.tmpl -o index.html
```

for common use:
```shell
echo '{ "ENV_STATIC_ASSETS_URL": "/static" }' > config.json
jinja2 index.tmpl config.json -o index.html
```

# Commandline less transpiler
## Setup  

```shell
npm install less -g
```

## Build

```shell
lessc styles.less styles.css
```

# Gulp watcher and browser using commandline transpilers above

## Setup  

```shell
npm i
```

## Build

```shell
gulp build
```
