######类的继承也是面向对象编程的基本知识。

* 比如人是一个类

```
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


```
* 上类代码中 Person 是父级
