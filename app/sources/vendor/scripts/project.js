const fs = require('fs')

const state = require('./state')
const splash = require('./splash')

function project() {

  this.states = []
  this.index = 0

  this.start = function() {
    if (this.states.length === 0) {
      this.states.push(new splash())
      //this.go.to_state(0)
      this.update()
    }
  }

  this.load = function (path) {
      console.log(`Load: ${path}`)
  
      let data
      try {
        data = fs.readFileSync(path, 'utf-8')
      } catch (err) {
        console.warn(`Could not load ${path}`)
        return
      }
      return data
  }

  this.update = function () {
    var text = `var game = new Phaser.Game(640, 360, Phaser.AUTO, 'vision', { preload: preload, create: create, update: update });` + this.states[0].text
    var splash = document.createTextNode(text)
    //var splashCode = document.createTextNode(this.states[0].text)
    editor.gamescript.appendChild(splash)
    //editor.codearea.appendChild(splashCode)
  }
}

module.exports = project; 