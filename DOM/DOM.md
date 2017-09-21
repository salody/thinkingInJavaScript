# DOM

## Node概述

### Node类型

Javascript中的所有的节点类型都继承自Node类型，因此所有的节点类型都共享着相同的基本属性和方法。

最常用的node类型(括号中数字代表nodeType的值)

* DOCUMENT_NODE(9)         （e.g:   window.document）
* ELEMENT_NODE(1)                (<body> <a> <p> <script> <html> <h1>...)
* ATTRIBUTE_NODE(2)         (class="funEdges")
* TEXT_NODE(3)            (lorem………...)
* DOCEMENT_FRAGMENT_NODE (11)       (document.createDocumentFragment())
* DOCUMENT_TYPE_NODE (10)              (<!DOCTYPE html>)

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

### 判断一个node对象的type和name

```javascript
console.log(
	document.doctype.nodeName, //logs 'html' also try document.doctype to get <!DOCTYPE html>
	document.doctype.nodeType //logs 10 which maps to DOCUMENT_TYPE_NODE
);

//This is DOCUMENT_NODE or nodeType 9 because Node.DOCUMENT_NODE === 9
console.log(
	document.nodeName, //logs '#document'
	document.nodeType //logs 9 which maps to DOCUMENT_NODE
);

//This is DOCUMENT_FRAGMENT_NODE or nodeType 11 because Node.DOCUMENT_FRAGMENT_NODE === 11
console.log(
	document.createDocumentFragment().nodeName, //logs '#document-fragment'
	document.createDocumentFragment().nodeType //logs 11 which maps to DOCUMENT_FRAGMENT_NODE
);

//This is ELEMENT_NODE or nodeType 1 because Node. ELEMENT_NODE === 1
console.log(
	document.querySelector('a').nodeName, //logs 'A'
	document.querySelector('a').nodeType //logs 1 which maps to ELEMENT_NODE
);

//This is TEXT_NODE or nodeType 3 because Node.TEXT_NODE === 3
console.log(
	document.querySelector('a').firstChild.nodeName, //logs '#text'
	document.querySelector('a').firstChild.nodeType //logs 3 which maps to TEXT_NODE
);
```

### 获取node value

对于大多数节点类型来说，他的nodeValue值都是null。（除了Text和Comment）

### 创建元素和文本节点

* createElement()
* createTextNode()



