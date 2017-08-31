######类的继承也是面向对象编程的基本知识。

* 比如人是一个类

~~~~
class Person {
  sayKind() {
    console.log('I am human');
  }
}
人的基础之上男人又形成一类

class Men {
  sayGender() {
    console.log('Male');
  }
}
~~~~



* 其实我们可以采用继承的方式，让 Men 中可以拥有 Person 中的属性和方法。





* 代码


~~
class Person {
  sayKind () {
    console.log('human')
  }
}

class Men extends Person {
  sayGender () {
    console.log('Male')
  }
}

class Women extends Person {
  sayGender () {
    console.log('Female')
  }
}


const peter = new Men
const billie = new Women
peter.sayKind()
billie.sayKind()
~~
