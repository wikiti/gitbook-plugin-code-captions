[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE.md) [![npm version](https://badge.fury.io/js/gitbook-plugin-code-captions.svg)](https://badge.fury.io/js/gitbook-plugin-code-captions)

# Gitbook Plugin: Add captions to code snippets

## Description

A simple gitbook plugin for adding captions or titles to code blocks.

This plugin is based on [gitbook-plugin-codeblock-filename](https://www.npmjs.com/package/gitbook-plugin-codeblock-filename).

## Installation

Add the plugin to your `book.json`:

```json
{
	"plugins": [ "code-captions" ]
}
```

Then install it with `gitbook`:

```sh
gitbook install
```

## Usage

Just add a `!CAPTION` sentence before the desired block:

````markdown
!CAPTION This the hello_world.rb file
```ruby
puts "Hello world"
```
````

Generating the following result:

![Sample](docs/sample.png)

To override the CSS style, include this in your CSS files:

```css
div.code-caption > span.code-caption-text {
  background-color: rgba(255, 0, 0, 0.07);
  /* Your css rules */
}
```

Generating the following result:

![Custom sample](docs/sample_custom.png)

## Contributors

This project has been developed by:

| Avatar | Name | Nickname | Email |
| ------ | ---- | -------- | ----- |
| ![](http://www.gravatar.com/avatar/2ae6d81e0605177ba9e17b19f54e6b6c.jpg?s=64)  | Daniel Herzog | Wikiti | [info@danielherzog.es](mailto:info@danielherzog.es)
