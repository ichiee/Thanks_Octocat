// using onstructor

function Greetr(){
    his. greeting = 'Hello World!!';
    this.greet=function(){
        console.log(this.greeting);
    }
}

module.exports = new Greetr