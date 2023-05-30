# 🥸 My React 101⚛
I recommend learning React after knowing:

- Basic Command line 
- HTML
- CSS
- JavaScript

Once you feel confident about your knowleadge in those topics, you can start learning React.

> I personally study duting 1 year html, css and Javascript before starting with React.
#### 📚 Resources
I'm using **Vite** to set the development enviroment of the project, to start a porject with *Vite* :
1. Run in the command line: ``npm create vite@latest`` and follow the instructions.

Of course I recommend having the documentation open in a browser to search for anything when needed, this time I'm using typescript so don't forget to include it: 
- [React ⚛️](https://react.dev/learn)
- [Vite ⚡️](https://vitejs.dev/guide/)
- [TypeScript](https://www.typescriptlang.org/docs/handbook/2/basic-types.html)

#### 🤓 Learning process
I'll be pointing some topics with their respective link to the documentation, so be sure you head to them when you don't understand the code written.

## 😵‍💫 Let's start
For someone that is not familiar with React yet, React is a way to develop more complex web sites in a structured manner, because you have to see your website as a Lego, you will have multiple pieces, some would look similar, some would be bigger, some will have the same form but with different color. When you see your website like that is not hard to understand a component.

### 🏗 [Components](https://react.dev/learn#components)
 > A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.

 In the next code you will see two components written in React, we define components using functions and naming them in *PascalCase* with the first letter capitalized.

 These components will be HTML elements later, and the structure is defined in the return. The first component will be a button, nothing strange there, right?.

~~~
function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
~~~

### ✍🏼 [JSX](https://react.dev/learn#writing-markup-with-jsx)

JSX is this syntax you see that looks like HTML but it isn't , as you already should know HTML think about JSX as a cousin language with some new features and a language that live and interact actively with JavaScript in the same file.

You will notice the differences between them in the process as we see how it works, so don't worry about it, I'll be sure to point out what's important to keep in mind.

Continuing with the above code, the second component (**MyApp**) return a div[^1] with two "tags" inside, the first one is an H1 element and the second one is a component, the one defined above, as you see, here is the first difference between HTML and JSX: components can be nested, you just have to wrap the name of the component in **<"NameHere"/>** so what will be there is the button tag defined in the first component.


[^1]: Component can only return a single tag, so if you want to send multiple siblings, you can wrap them in one tag or an empty one (<>`code`</>) also known as fragment.