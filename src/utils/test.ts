/***
 * 
 * 同时发多个相同的请求，如果第一个请求成功，那么剩余的请求都不会发出，成功的结果作为剩余请求返回
如果第一个请求失败了，那么接着发编号为2的请求，如果请求成功，那么剩余的请求都不会发出，成功的结果作为剩余请求返回
如果第二个请求失败了，那么接着发编号为3的请求，如果请求成功，那么剩余的请求都不会发出，成功的结果作为剩余请求返回
...以此递推，直到遇到最坏的情况需要发送最后一个请求
 */
const _URL = 'http://localhost:3000/api/user'
export const tester = () => {}
