---
id: Tutorials
title: Tutorials
---
## Introduction

shuvi is a front-end application development solution that integrates modern tool chains, focuses on improving development experience and efficiency.



## Create your first app

We are going to make a simple blog demo through a series of operations.

We will learn the following:

- init project
- use page route
- data fetching
- use dynamic route
- use layout route
- use css modules
- how to deploy

### System Requirements

- [node ^14.x](https://github.com/nodejs/Release)

### Create a project

At the first we need to create a directory and init project.

```shell
mkdir blog
cd blog
npm init -y
npm install shuvi@next -D
```

Modify the script field in package.json to:

```
"scripts": {
    "dev": "shuvi dev"
}
```

### Create a route

Create the src/routes directory.

> notice: In the convention routing specification, 
> all our routing endpoint files are placed in the src/routes directory.

```shell
mkdir -p src/routes
```

We want to create a component handle to the `/posts` path.

Create the `src/routes/posts` directory.

```shell
mkdir -p src/routes/posts 
```

Create the `page.js` file in the `src/routes/posts` directory.

The file content of page.js is:

```jsx
export default function PostsPage() {
  return <div>posts</div>
}
```

Now visit `http://localhost:3000` and you will see the `PostsPage` component.

### Use loader data


Create the `posts-mock-data.js` file in the `src` directory.

```javascript
export const postsMockData = [
  {
    id:'1',
    title:"first-post",
    content:"first-post-content"
  },
  {
    id:'2',
    title:"second-post",
    content:"second-post-content"
  }
]
```

Modify the content of the `src/routes/posts/page.js` file to：

> Notice: Loaders can be synchronous or asynchronous

```jsx
import { useLoaderData } from '@shuvi/runtime';
import { postsMockData } from "../../posts-mock-data";

export default function PostsPage() {
  const data = useLoaderData();
  
  return <div>
    <ul>
      { data.posts?.map(post => {
        return (
          <li key={ post.id }>
            <h3>{ post.title }</h3>
            <h3>{ post.content }</h3>
          </li>
        );
      }) }
    </ul>
  </div>;
}

export const loader = () => {
  return new Promise(res => {
    setTimeout(() => {
      res({
        posts:postsMockData
      })
    },1000)
  });
};

```

### Dynamic route

Next, we need to access the details of a post.

Create the `page.js` file in the `blog/src/routes/posts/[id]` directory.

```jsx
import { useLoaderData } from "@shuvi/runtime";
import { postsMockData } from "../../../posts-mock-data";


export default function PostPage() {
  const { id,title,content } = useLoaderData();
  return (
    <div>
      <h1>{title}</h1>
      <h2>ID:{id}</h2>
      <p>{content}</p>
    </div>
  )
}

export const loader = ctx => {
  const { id } = ctx.params;
  return postsMockData.find(item => item.id === id)
}

```

>Notice: When `[id]` is used as a folder name, it will become a dynamic path rule.

When we visit /posts/1 or /posts/2, 
we will get the correct post content.

### Layout route

We also need a component to control nested routes as a common layout
component to avoid repeated rendering.

Change src/routes/post/page.js to src/routes/post.layout.js, 
and modify the file content as:

```jsx
import { useLoaderData, Link, RouterView } from '@shuvi/runtime';
import { postsMockData } from "../../posts-mock-data";


export default function PostsLayout() {
  const data = useLoaderData();
  
  return (
    <div>
      <ul>
        { data.posts?.map(post => {
          return (
            <li key={ post.id }>
              <Link to={ `/posts/${ post.id }` }>
                <h3>{ post.title }</h3>
                <h3>{ post.content }</h3>
              </Link>
            </li>
          );
        }) }
      </ul>
      <div>
        <RouterView/>
      </div>
    </div>
  );
}

export const loader = () => {
  return new Promise(res => {
    setTimeout(() => {
      res({
        posts: postsMockData
      });
    }, 1000);
  });
};

```

### Assets

Create the src/assets directory and place two image files at will.

Modify the content of the `src/post-mock-data.js` file to：

```jsx

import img1 from './assets/img1.png';
import img2 from './assets/img2.png';

export const postsMockData = [
  {
    id:'1',
    title:"first-post",
    content:"first-post-content",
    img:img1
  },
  {
    id:'2',
    title:"second-post",
    content:"second-post-content",
    img:img2
  }
]

```

Modify the content of the `src/routes/posts/[id]/page.js` file to：

```jsx
import { useLoaderData } from "@shuvi/runtime";
import { postsMockData } from "../../../posts-mock-data";


export default function PostPage() {
  const { id,title,content,img } = useLoaderData();
  return (
    <div>
      <h1>{title}</h1>
      <h2>ID:{id}</h2>
      <p>{content}</p>
      <p>
        <img src={img} alt=""/>
      </p>
    </div>
  )
}

export const loader = ctx => {
  const { id } = ctx.params;
  return postsMockData.find(item => item.id === id)
}

```

Revisit the post page and you can see that the image has been loaded.

### CSS modules

Create the `style.css` file in the `src/routes/posts` directory.

```
.headerNav {
  color: yellow;
}
```

Modify the content of the `src/routes/posts/layout.js` file to：

```jsx
import { useLoaderData, Link, RouterView } from '@shuvi/runtime';
import { postsMockData } from "../../posts-mock-data";
import styles from './style.css'

export default function PostsLayout() {
  const data = useLoaderData();
  
  return (
    <div className={styles.headerNav}>
      <ul>
        { data.posts?.map(post => {
          return (
            <li key={ post.id }>
              <Link to={ `/posts/${ post.id }` }>
                <h3>{ post.title }</h3>
                <h3>{ post.content }</h3>
              </Link>
            </li>
          );
        }) }
      </ul>
      <div>
        <RouterView/>
      </div>
    </div>
  );
}

export const loader = () => {
  return new Promise(res => {
    setTimeout(() => {
      res({
        posts: postsMockData
      });
    }, 1000);
  });
};
```



### Deploy

Modify the script field in package.json to:

```
"scripts": {
    "dev": "shuvi dev",
    "serve": "shuvi serve"
}
```

```shell
npm run serve
```
