
# ZTerminal

This "Terminal" is built using JavaScript. I've created this to mimic a console from a game server, but to be advertised on our website.


## Screenshots

![App Screenshot](https://i.imgur.com/5gKVQEI.gif)


## Demo

http://terminal.zooted.gg


## Features

- Autoscroll - No Scroll
- Hover Affects
- Speed Modifier
- More to come...


## Usage/Examples
#### How do I change hover affects?
Edit via styles.css
```css
.terminal-container {
    perspective: 1000px; /* Lower to help reduce hover affects */
}
```
```css
.terminal-container:hover {
    transform: rotateY(5deg) rotateX(5deg); /* Lower to help reduce hover affects */
}
```
#### How do I change the speed?
Edit via script.js
```javascript
setTimeout(typeCommand, 10); // Adjust typing speed here */
```


## Support

For support, join our community Discord channel http://discord.zooted.gg

