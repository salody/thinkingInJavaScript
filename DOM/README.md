# DOM

## Node概述

### Node类型

Javascript中的所有的节点类型都继承自Node类型，因此所有的节点类型都共享着相同的基本属性和方法。

最常用的node类型(括号中数字代表nodeType的值)

* DOCUMENT_NODE(9)         
  ```
  window.document
  ```

* ELEMENT_NODE(1)                
  ```
  <body> <a> <p> <script> <html> <h1>
  ```

* ATTRIBUTE_NODE(2)         
  class="funEdges"

* TEXT_NODE(3)            
  lorem...

* DOCEMENT_FRAGMENT_NODE (11)       
  (document.createDocumentFragment())

* DOCUMENT_TYPE_NODE (10)
  ```
  <!DOCTYPE html>
  ```

### 浏览器中常用node接口（objects或者constructor函数）的继承模型

**A  <  B**代表 B继承A 

* Object  <  Node  <  Element  <  HTMLElement  <  (HTML*Element)
* Object  <  Node  <  Attr(在DOM 4中被废弃)
* Object  <  Node  <  CharacterData  <  Text
* Object  <  Node  <  Document  <  HTMLDocument
* Object  <  Node  <  DocumentFragment

**Node其实仅仅是一个Js中的构造函数，所以从逻辑上说Node继承于Object.prototype**

### Node中常用的属性和方法（会被所有的node对象继承）

**Node Properties:**

* childNodes
* firstChild
* lastChild
* nextSibling
* nodeName
* nodeType
* nodeValue
* parentNode
* previousSibling

**Node Methods:**

* appendChild()
* cloneNode()
* compareDocumentPosition()
* contains()
* hasChildNodes()
* insertBefore()
* isEqualNode()
* removeChild()
* replaceChild()

**Document Methods:**

* document.createElement()
* document.createTextNode()

**HTML * Element Properties:**

- innerHTML
- outerHTML
- textContent
- innerText
- outerText
- firstElementChild
- lastElementChild
- nextElementChild
- previousElementChild
- children

HTML element Methods:

- insertAdjacentHTML()

## Document Node
```
  console.log(window.document.constructor); //logs function HTMLDocument() { [native code] }
  console.log(window.document.nodeType); //logs 9, which is a numeric key mapping to DOCUMENT_NODE
  
```

## Element Node

- *createElement()*
- *tagName*
- *children*
- *getAttribute()*
- *setAttribute()*
- *hasAttribute()*
- *removeAttribute()*
- *classList()*
- *dataset*
- *attributes*

## Element Node Select

一些预先设定好的选择器。

You should be aware that there are some legacy, pre-configured arrays-like-lists, containing element nodes from an HTML document. Below I list a couple of these (not the complete list) that might be handy to be aware of.

- *document.all* - all elements in HTML document
- *document.forms* - all *<form>* elements in HTML document
- *document.images* - all *<img>* elements in HTML document
- *document.links* - all *<a>* elements in HTML document
- *document.scripts* - all *<script>* elements in HTML document
- *document.styleSheets* - all *<link>* or *<style>* objects in HTML document

## 元素节点的尺寸、位置，以及滚动位置



## 代码目录结构

### Charpter1 Node Overview

[创建元素和文本节点](./Charpter01/demo01.html)
[向DOM中添加节点](./Charpter01/demo02.html)
[删除替换](./Charpter01/demo03.html)
[克隆节点](./Charpter01/demo04.html)
[确定节点在DOM树中的位置](./Charpter01/demo05.html)
[判断两个节点是否一样](./Charpter01/demo06.html)

### Charpter2 Document Node

[判断浏览器的DOM level](./Charpter02/demo01.html)

