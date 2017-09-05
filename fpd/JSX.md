jsx 是 React 项目组自己发明的一种文件格式。作用就是让我们可以在一个 js 文件中，使用类似 html 这样语法来写界面。

下面我们把 Hello World 程序写复杂一些。

JSX 跟普通 html 的区别

不能用 class ，而要用 className
jsx 中也可以去插入其他的 React 组件
拥有 html 没有的一些事件函数，例如 onClick/onSubmit
具体来说，一个 React 组件中 render 的 return 语句中包裹的内容就是 JSX ，例如：
```js
<div className='app'>
  <div className='header'>
    header
  </div>
  <div className='main'>
    main
  </div>
  <div className='footer'>
    footer
  </div>
</div>
全部代码

```



```js
index.html

<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    body {
      height: 100vh;
      margin: 0;
    }
    #root {
      height: 100%;
    }
  </style>
</head>
<body>
  <div id='root'></div>
</body>
</html>
index.js

import React from 'react'
import ReactDom from 'react-dom'
import App from './App'

ReactDom.render(<App />, document.getElementById('root'))
App.js

import React, { Component } from 'react'
import './app.css'

class App extends Component {
  render () {
    return (
      <div className='app'>
        <div className='header'>
          header
        </div>
        <div className='main'>
          main
        </div>
        <div className='footer'>
          footer
        </div>
      </div>
    )
  }
}

export default App
app.css

.app {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.header {
  height: 50px;
  background-color: green;
}

.main {
  flex-grow: 1;
  background-color: yellow;
}

.footer {
  height: 50px;
  background-color: red;
}


```
