//
// class Dog{
//   constructor(name){
//     this.name=  name
//     }
//     sayName(){
//       console.log(this.name)
//   }
// }
// let doudou = new Dog('doudou');
// let feifei = new Dog('feifei');
// doudou.sayName()
// feifei.sayName()


class Person {
  sayKind(){
    console.log('human')
  }
}
class Men  extends Person{
  sayGender(){
    console.log('Male');
  }
}
class Women extends Person{
  sayGender(){
    console.log('Famale')
  }
}
const peter =new Men
const billie =new  Women
peter .sayKind()
billie .sayKind()
