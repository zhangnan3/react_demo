
class Dog{
  constructor(name){
    this.name=  name
    }
    sayName(){
      console.log(this.name)
  }
}
let doudou = new Dog('doudou');
let feifei = new Dog('feifei');
doudou.sayName()
feifei.sayName()
