const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

export default function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

// You can respond to events by declaring event handler functions inside your components:
function MyButton() {
    function handleClick() {
        alert('You clicked me!');
    }

    return (
        <button onClick={handleClick}>
            Click me
        </button>
    );
    // Notice how onClick={handleClick} has no parentheses at the end!
    // Do not call the event handler function: you only need to pass it down.
    // React will call your event handler when the user clicks the button.
}

// Often, you’ll want your component to “remember” some information and display it
import { useState } from 'react';

function MyFunction() {
    const [count, setCount] = useState(0);
    // You’ll get two things from useState: the current state (count), and the function that lets you update it (setCount).
    // You can give them any names, but the convention is to write [something, setSomething].
    function MyButton() {
        const [count, setCount] = useState(0);

        function handleClick() {
            setCount(count + 1);
        }

        return (
            <button onClick={handleClick}>
                Clicked {count} times
            </button>
        );
    }
}
// The first time the button is displayed, count will be 0 because you passed 0 to useState(). 
// When you want to change state, call setCount() and pass the new value to it.
// Clicking this button will increment the counter: