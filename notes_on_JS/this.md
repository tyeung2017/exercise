// this is mainly a note to remind myself about behavior of this in event listener in JS.

//source : https://medium.com/humans-create-software/factory-functions-in-javascript-video-d38e49802555

class Dog {
  constructor() {
    this.sound = 'woof'
  }
  talk() {
    console.log(this.sound)
  }
}
const sniffles = new Dog()
sniffles.talk() // Outputs: "woof"

document.getElementsByTagName[0].click(sniffles.talk) //output undefined as 'this' has become the selected DOM element

Solution 1:

document.getElementsByTagName[0].click(sniffles.talk.bind(sniffles)) //bind the object

Solution 2: 

document.getElementsByTagName[0].click( () => sniffles.talk() )  // use arrow function to get 'this' from lexical environment

Solution 3: 

const dog = () => {
  const sound = 'woof'
  return {
    talk: () => console.log(sound)
  }
}

document.getElementsByTagName[0].click(sniffles.talk) // use factory functions and avoid using 'this' and get value of sound by closure
