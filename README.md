# Thinking in JavaScript

## Functions

### Guidelines for helping write better functions

* Don't Repeat Yourself(DRY)

  Once you have established a pattern for something that gets repeated again in the code, it's time to write a function, object, or module that encapsulates that pattern so that it can be easily reused.

* Do One Thing(DOT)

  Each function should do only one thing, and do that one thing as well as it can. Following this principle will make your function more reusable, more readable, and easier to debug.

* Keep It Simple Stupid(KISS)

  Programmers are often tempted to come up with clever solutions to problems. That's a good thing, of course, but sometimes programmers are *too clever,* and the solutions are cryptic. This tends to happen when a single line of code is used to accomplish more than a single atomic goal.

* Less Is More

  In order to aid readability and reduce the temptation to do more than one thing, functions should be as short as possible: Just enough code to do the one thing they were made to do, and no more.

### Minimize Side Effects

Side Effects是有别于纯函数的一个概念。在多个函数操作同一个变量或对象属性时有可能发生。

在性能允许的情况下，尽量使用纯函数。也就是把数据拷贝一份，再进行操作。

## Objects

1. 面向接口编程，而不是面向实现
2. 组合永远比继承好

混合各方优点

### Prototypes

在两种情况下可以使用prototypes：

1. delegate access to a single, shared prototype object (called a delegate)
2. make clones of the prototype.

基于原型的继承，一定要分清楚属性是在原型上还是在实例上。在实例上可以随时创建一个新的属性出来，而覆盖掉原型上的属性。



