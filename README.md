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

# TODO (May 5 2021)

1. Project stylesheets and classnames convention
2. Project folders and files structure
3. Landings Wireframe - common approach to markup wavy transitions between landing page GROUPS
4. SVG masks collection
5. Macroses https://jinja.palletsprojects.com/en/2.11.x/templates/#import to make smth like
```jinja2
{% import "shapes.html" as shapes %}
<li class="navmenu__item">
  {{ shapes.button(class="round-button", text="Get your prescription") }}
</li>
```