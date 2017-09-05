## 组件属性是什么？

* 组件属性（props）的功能和 HTML attribute （翻译成中文也是属性）类似。换句话说， props 为组件提供配置值。

* React 组件可以看成一个函数，那么这个函数也是可以传递参数的，形式如下
```js
<Button text='注册' />
```
上面的 text 就被成为组件的一个**属性** 。属性是组件跟外部沟通的数据通道。

到 Button.js 组件内部，获取属性值的语句就是

```
this.props.propName
```

对应上面的情况，也就是

```
this.props.text
```

就可以拿到 "登录" 这个字符串了。

### 另外

属性中不仅仅可以传递字符串，也可以传递函数，对象等其他类型数据。

### Demo

来制作两个组件 Singup 和 Login ，里面都用到一个 Button 组件，我们来通过 props 的使用，让按钮显示不同的文字。

* 代码： https://github.com/happypeter/dj-demos/tree/master/props-demo

* 视频：props
