/**
 * npm install functional-javascript-workshop 自己体会
 * 功能描述: map、filter、every、some、reduce
 * @author: liuguanbang
 * 2017/9/29
 */

function doubleAll(numbers) {
  return numbers.map((number) => number * 2)
}


// [{
//   message: 'Esse id amet quis eu esse aute officia ipsum.' // random
// },...]
function getShortMessages(messages) {
  return messages
    .filter((item) => item.message.length < 50)
    .map((item) => item.message);
}

/**
 * return return return 函数式一定要return。重要的事说三遍
                      .::::.
                    .::::::::.
                   :::::::::::
                ..:::::::::::'
             '::::::::::::'
               .::::::::::
          '::::::::::::::..
               ..::::::::::::.
             ``::::::::::::::::
              ::::``:::::::::'        .:::.
             ::::'   ':::::'       .::::::::.
           .::::'      ::::     .:::::::'::::.
          .:::'       :::::  .:::::::::' ':::::.
         .::'        :::::.:::::::::'      ':::::.
        .::'         ::::::::::::::'         ``::::.
    ...:::           ::::::::::::'              ``::.
   ```` ':.          ':::::::::'                  ::::..
                      '.:::::'                    ':'````..
*/
// function checkUsersValid(originUsers) {
//   return function allUsersValid(submittedUsers) {
//     return submittedUsers.every((item) => originUsers.map((item) => item.id).indexOf(item.id) !== -1)
//   }
// }
// 官方写法 感觉官方的比较规整和好理解。输入，输出一目了然。自己的写法有点随性
function checkUsersValid(originUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every((submittedUser) => {
      return originUsers.some((originUser) => {
        return originUser.id === submittedUser.id;
      })
    })
  }
}


// module.exports = doubleAll;
// module.exports = getShortMessages;
module.exports = checkUserValid;