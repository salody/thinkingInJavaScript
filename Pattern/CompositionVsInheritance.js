/**
 *  继承
 *  下面有两个父类为Robot和Animal
 *  Robot有两个子类为CleanRobot和MurderRobot
 *  Robot
 *    .drive()
 *    
 *      CleanRobot
 *        .clean()
 * 
 *      MurderRobot
 *        .kill()
 * 
 *  Animal有两个子类为Dog和Cat
 *  Animal
 *    .poop()
 *  
 *    Dog
 *      .bark()
 * 
 *    Cat
 *      .meow()
 * 
 *  现在要定义一个子类MurderRobotDog。这时就比较麻烦
 *  
 *  
 */ 

/**
 *  js中使用composition来解决这个问题
 */
const barker = (state) => ({
  bark: () => console.log('woof, I am ' + state.name)
});

const driver = (state) => ({
  drive: () => state.position  = state.position + state.speed,
});

const killer = (state) => ({
  kill: () => console.log('kill')
});

// test
//barker({ name: 'salody'}).bark();

const murderRobotDog = (name) => {
  let state = {
    name,
    speed: 100,
    position: 0
  };
  return Object.assign(
    {},
    barker(state),
    driver(state),
    killer(state)
  );
};

murderRobotDog('Kar').kill();

/**
 * Inheritance is when you design your types
 * around what they are
 * 
 * Composition is when you design your types
 * around what they do
 */