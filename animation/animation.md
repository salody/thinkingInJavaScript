# Animation	

## Smooth Animation

#### Animation-Friendly css 属性

- transform. This property allows you to change an element's position using the **translate**function, make it bigger/smaller using the **scale** function, set a rotation using the...um...**rotation** function, and skew the element using the **skew** function.
- opacity. This property allows you to adjust an element's transparency.
- filter. This property allows you to apply visual effects such as drop shadows, glows, color corrections, and more to your elements.

#### 尽量避免改变的属性

For animation purposes, unless you have a specific need, you absolutely should not animate the margin, padding, top, left, bottom, or right CSS properties. That's right...I said it! Since you probably use these properties a lot for various positioning-related tasks, I know this may sound a bit counterintuitive. The reason for my seemingly heretical stance has to do with performance. 

#### 启动GPU加速

by setting a **translate3d **(or **translateZ**) transform on the elements you want your GPU to handle.

**合理使用，不要滥用。**

Minimize the Elements You Want the GPU to Deal With

Push only to the elements you will be animating to the GPU. For every element that you send to the GPU, your browser will spend time and video memory (on your GPU) to store the element. The fewer elements you *optimize* in this way, the better off you will be.

Also, while it goes without saying, 请抵制住下面的诱惑，不要尝试:

```css
* {
  transform: translate3d(0,0,0);
}
```

This tells your browser to push every element to your GPU! For the performance and memory reasons mentioned earlier, you DEFINITELY shouldn’t do this.

**在合理的地方启动GUP加速**

Pushing an element to the GPU at the same time you are about to animate properties on it is not a good idea.

看下面的代码

```css
#blah {
  transition: all .2s ease-in-out;
  background-color: #FFF;
}
#blah:hover {
  transform: translate3d(0, 0, 0);
  background-color: #EEE;
} 
```

看似启动了GUP加速，好像是个好方法，但是事实不是这样的。

当你的元素被GUP调用时，浏览器已经开始处理transform属性的动画。你期望得到的所有的优化都不复存在。

正确的方法是，选择一个动画开始之前的时间点，将你的元素扔进GPU中。

修改上面的代码

```css
#blah {
  transition: all .2s ease-in-out;
  background-color: #FFF;
  transform: translate3d(0, 0, 0);
}
#blah:hover {
  background-color: #EEE;
} 
```

#### 神奇的will-change属性

（可能有兼容性问题）

This property allows you to tell your browser which properties you'd like to animate, and it's usage looks a little bit like this:

```css
.square {
  width: 450px;
  height: 450px;
   
  animation: robotSlide .2s linear;
  will-change: transform, opacity;
}
 
@keyframes robotSlide {
  0% {
    transform: translate(10px, 10px);
    opacity: 1;
  }
  50% {
    transform: translate(100px, 10px);
    opacity: .5;
  }
}
```

- **不要将 will-change 应用到太多元素上**：浏览器已经尽力尝试去优化一切可以优化的东西了。有一些更强力的优化，如果与 `will-change` 结合在一起的话，有可能会消耗很多机器资源，如果过度使用的话，可能导致页面响应缓慢或者消耗非常多的资源。
- **有节制地使用：**通常，当元素恢复到初始状态时，浏览器会丢弃掉之前做的优化工作。但是如果直接在样式表中显式声明了 `will-change` 属性，则表示目标元素可能会经常变化，浏览器会将优化工作保存得比之前更久。所以最佳实践是当元素变化之前和之后通过脚本来切换 `will-change` 的值。
- **不要过早应用 will-change 优化：**如果你的页面在性能方面没什么问题，则不要添加 `will-change` 属性来榨取一丁点的速度。 `will-change` 的设计初衷是作为最后的优化手段，用来尝试解决现有的性能问题。它不应该被用来预防性能问题。过度使用 `will-change` 会导致大量的内存占用，并会导致更复杂的渲染过程，因为浏览器会试图准备可能存在的变化过程。这会导致更严重的性能问题。
- **给它足够的工作时间：**这个属性是用来让页面开发者告知浏览器哪些属性可能会变化的。然后浏览器可以选择在变化发生前提前去做一些优化工作。所以给浏览器一点时间去真正做这些优化工作是非常重要的。使用时需要尝试去找到一些方法提前一定时间获知元素可能发生的变化，然后为它加上 `will-change 属性。`

## Css动画的问题

**Accessing the keyframes via JavaScript is a painful task, and changing the values of properties found inside any individual keyframe is even more painful.**Outside of a few generic properties, CSS animations were never designed to be dynamically changed once the animation has started running. They are a bit boring that way.

To contrast the boringness of CSS animations, you have our CSS transitions. Because of how CSS transitions react to property changes anywhere on the element or elements they are listening for changes on, they are a great fit for dealing with changes provoked by JavaScript. For this reason, don't be surprised if almost all of the animations we modify with JavaScript rely on a CSS transition somewhere to make it all work.

## animation vs transition

选择标准

- If what I want requires the flexibility provided by having multiple keyframes and easy looping, then I go with an animation.

- If I am looking for a simple from/to animation, I go with a transition.

- If I want to manipulate the property values that I wish to animate using JavaScript, I go with a transition.

   

## 不是所有的css属性都能添加动画

**Not all CSS properties can be animated**

**Certain CSS properties can be animated** using [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations) or [CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions). *Animation* means that their values can be made to change gradually over a given amount of time.

[Animatable CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties)



