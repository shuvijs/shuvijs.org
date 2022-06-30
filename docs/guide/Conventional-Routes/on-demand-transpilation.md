---
sidebar_position: 04
id: On Demand Transpilation
---

Each route is a dynamic entry in shuvi. Some optimizations based on it.

1. On demand transpilation when Developer visit a route

    1. not yet visit /about
        ```javascript
        //empty route
        export default function(){
          return null
        }
        ```
   1. when visit /about
        ```javascript
        //about route is compiling...
        ```
   2.  after compiled, about route will be replace to empty route by [fast fresh](../fast-refresh.md).
         ```javascript
        //about route
        export default function(){
          return <div>about</div>
        }
        ```
2. Each route is lazy entry in production. it is on demand loaded when user visit a route.
