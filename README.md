# Setup  

```shell
npm i
```

## Build

```shell
npm run dev
```

## Start

```shell
npm run build
```

# Alternative jinja2 transpiler
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

