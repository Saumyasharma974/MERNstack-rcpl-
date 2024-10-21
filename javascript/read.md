### What is the Event Loop in JavaScript?

The **Event Loop** is a fundamental concept in JavaScript that allows for **non-blocking, asynchronous** programming. Since JavaScript is **single-threaded** (it can only do one thing at a time), the event loop enables it to handle multiple tasks efficiently, like fetching data from a server, without waiting for each task to finish before starting another.

### Let's Break It Down

JavaScript executes code in a **single thread**. This means only one operation can happen at a time. But JavaScript is designed to handle asynchronous tasks (like timers, network requests, or file reading) without stopping the execution of other code. The **event loop** manages these tasks.

#### Components Involved:
1. **Call Stack**: Where the code is executed line by line.
2. **Web APIs (or Browser APIs)**: These are provided by the browser (or Node.js for server-side). They handle asynchronous tasks like `setTimeout()`, network requests, DOM events, etc.
3. **Callback Queue (Task Queue)**: Stores the callbacks (tasks) that are ready to be executed after being handled by Web APIs.
4. **Event Loop**: Continuously checks if the call stack is empty and moves tasks from the callback queue to the call stack when the stack is empty.

#### How It Works:

1. **Call Stack**: When JavaScript runs a program, it places each function in the **call stack** and executes them one by one.
2. **Synchronous Code**: If the code is synchronous (blocking), it will finish before moving to the next line.
3. **Asynchronous Code**: When an asynchronous task is encountered (like `setTimeout()`), JavaScript offloads the task to the **Web APIs** (not the call stack). For example, `setTimeout()` uses a timer to delay execution.
4. **Web APIs**: Once the asynchronous task is completed (like a timer finishing or data coming back from a server), the Web APIs send the corresponding callback to the **callback queue**.
5. **Event Loop**: The **event loop** constantly monitors the **call stack** and **callback queue**. If the call stack is empty, the event loop pushes the next callback from the callback queue to the call stack for execution.
6. **Completion**: The event loop keeps doing this indefinitely, ensuring that all tasks are eventually processed.

### Visual Example

Consider this simple code:

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Inside setTimeout");
}, 1000);

console.log("End");
```

#### What Happens:
1. **"Start"** is logged immediately because it's a synchronous operation.
2. When `setTimeout()` is encountered, the callback function (`console.log("Inside setTimeout")`) is offloaded to the **Web API** (the browser sets a timer).
3. **"End"** is logged immediately because it's synchronous, and the call stack is empty afterward.
4. After 1 second, the Web API finishes the timer and moves the callback to the **callback queue**.
5. The **event loop** checks that the call stack is empty and moves the `setTimeout` callback to the call stack, where `"Inside setTimeout"` is logged.

### Visualization:
1. **Call Stack**:
   - `console.log("Start")` → Print "Start".
   - `setTimeout()` → Offload to Web APIs (timer starts ticking).
   - `console.log("End")` → Print "End".
2. **Web APIs**:
   - Timer for `setTimeout()` (1 second).
3. **Callback Queue**:
   - After 1 second, the callback (`console.log("Inside setTimeout")`) moves to the callback queue.
4. **Event Loop**:
   - Call stack is empty, so the callback from the queue moves to the call stack and is executed.

### Event Loop Flow:

1. **Call Stack** → Synchronous code is executed.
2. **Web APIs** → Handles asynchronous tasks (e.g., timers, HTTP requests).
3. **Callback Queue** → Stores completed asynchronous tasks.
4. **Event Loop** → Moves tasks from the callback queue to the call stack when the stack is empty.

### Key Points to Remember:
- JavaScript is single-threaded (one task at a time).
- The **event loop** ensures that asynchronous tasks don't block the main thread.
- The **call stack** is where synchronous tasks run.
- **Web APIs** handle asynchronous tasks (e.g., timers, network requests).
- The **callback queue** holds ready-to-execute callbacks.
- The **event loop** moves callbacks from the queue to the call stack when it's empty.

### Example with Multiple Asynchronous Tasks

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Timeout 1");
}, 1000);

setTimeout(() => {
    console.log("Timeout 2");
}, 500);

console.log("End");
```

1. "Start" and "End" are logged immediately because they are synchronous.
2. The second `setTimeout()` (500ms) will be executed **before** the first one (1000ms) because it has a shorter delay.
3. The final output will be:
   - "Start"
   - "End"
   - "Timeout 2" (after 500ms)
   - "Timeout 1" (after 1000ms)

This shows that the event loop schedules asynchronous tasks based on when they finish, not the order they are written in the code.

### Summary

The **Event Loop** is what makes asynchronous JavaScript possible:
- It ensures that the browser can perform tasks like fetching data, timers, or handling user interactions without blocking the main thread.
- It moves tasks between the **call stack** and the **callback queue** based on their status.
- The **event loop** allows JavaScript to handle multiple asynchronous tasks efficiently, even though it's a single-threaded language!
Sure! Let's create an example that includes **callbacks**, **promises**, and **async/await**, all in one flow to show how they relate.

### Scenario:

You have three asynchronous tasks:
1. **Fetching user data**.
2. **Fetching the user's posts**.
3. **Fetching comments on a specific post**.

We’ll start with a basic **callback-based approach**, then convert it to **promises**, and finally, use **async/await**.

#### Step 1: Using Callbacks

```javascript
// Simulating asynchronous functions using setTimeout
function getUserData(callback) {
    setTimeout(() => {
        console.log("Fetched user data");
        callback({ id: 1, name: "Saumya" });
    }, 1000);
}

function getPostsByUser(userId, callback) {
    setTimeout(() => {
        console.log("Fetched posts for user", userId);
        callback([{ id: 101, title: "Post 1" }, { id: 102, title: "Post 2" }]);
    }, 1000);
}

function getCommentsByPost(postId, callback) {
    setTimeout(() => {
        console.log("Fetched comments for post", postId);
        callback(["Comment 1", "Comment 2"]);
    }, 1000);
}

// Callback Hell example
getUserData(function(user) {
    getPostsByUser(user.id, function(posts) {
        getCommentsByPost(posts[0].id, function(comments) {
            console.log("Comments:", comments);
        });
    });
});
```

This is an example of **callback hell** where callbacks are nested inside each other, making the code harder to read.

#### Step 2: Using Promises

To fix the callback hell issue, let’s refactor this code using **promises**.

```javascript
// Wrapping functions with promises
function getUserData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Fetched user data");
            resolve({ id: 1, name: "Saumya" });
        }, 1000);
    });
}

function getPostsByUser(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Fetched posts for user", userId);
            resolve([{ id: 101, title: "Post 1" }, { id: 102, title: "Post 2" }]);
        }, 1000);
    });
}

function getCommentsByPost(postId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Fetched comments for post", postId);
            resolve(["Comment 1", "Comment 2"]);
        }, 1000);
    });
}

// Promise chaining example
getUserData()
    .then((user) => {
        return getPostsByUser(user.id);  // Chain the next task
    })
    .then((posts) => {
        return getCommentsByPost(posts[0].id);  // Chain the next task
    })
    .then((comments) => {
        console.log("Comments:", comments);
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });
```

Here, we return promises and chain them with `.then()`. This makes the code easier to read compared to deeply nested callbacks.

#### Step 3: Using Async/Await

Now let’s use **async/await**, which simplifies the promise-based code even further by making it look more like synchronous code.

```javascript
// Using async/await
async function fetchData() {
    try {
        const user = await getUserData();
        const posts = await getPostsByUser(user.id);
        const comments = await getCommentsByPost(posts[0].id);
        
        console.log("Comments:", comments);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

// Calling the async function
fetchData();
```

In this case:
- We use `await` to pause the function execution until each promise is resolved.
- The code is sequential and easy to follow, without any nesting or chaining.
- Error handling is also straightforward using `try/catch`.

### Comparison

- **Callback Hell**: 
  - Nested structure that becomes unreadable with more steps.
  - Hard to maintain and debug.
  
- **Promises**: 
  - Solves nesting issues by allowing chaining.
  - More readable but still a bit verbose with `.then()` and `.catch()`.

- **Async/Await**:
  - Clearest and most readable.
  - Looks like synchronous code but handles asynchronous tasks.
  - Easier to manage and maintain.

By using **async/await**, we avoid callback hell and make the code more readable while handling asynchronous operations efficiently.