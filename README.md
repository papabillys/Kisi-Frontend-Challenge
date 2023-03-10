
<br>
<h1 align="center"> Kisi Frontend Challenge </h1> 
<br>

## Table of Contents

- [Introduction](#introduction)
- [Requirements](#requirements)
- [Repo Files](#repo-files)
- [Deploy Project](#deploy-project)
- [Github initial readMe](#github-initial-readme)
<br><br>


## Introduction
This repo is made as a challenge for Kisi. <br>

<br><br>

## Requirements
The requirements of this project are: 
* Data (cards, image, description) must be loaded from a public api (in this case Faker Api is used )
* Create a mosaic layout ( mosaic layout created grid)
* When a card is hovered, more informations must display. (To handle that, two function are used to keep track of the card's state)
* On button click, more cards should load on this layout (when page loads for first time it loads 7 cards and on every button click it loads 3 more cards, with max limit of cards equal to 40)
* Responsive layout (Responsive added to mosaic layout, but also adjusting font-size of cards a little)

<br><br>

## Repo Files
* Components/ MosaicLayout.vue: Component for mosaic layout
* Components/ Card.vue: Component for cards
* Components/ Icon.vue: Component for the arrow icon in every card
* helpers/ loadInfo.js: Contains a function that is used for fetching data. 
* App.vue: Main component that loads data and calls MosaicLayout
* main.js: Loads the application

<br><br>

## Deploy Project 
In order to deploy this project, Github pages is used and these steps followed: <br>
* Set the publib path to vue.config.js to match this pattern 
```
<github_username>.github.io/repo-name
```
* npm run build 
* git add dist -f 
* git commit -m "message"
* git subtree push --prefix dist origin gh-pages

<br><br>

## Github initial ReadMe

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
