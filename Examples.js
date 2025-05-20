// React apps are made out of components.
// A component is a piece of the UI (user interface) that has its own logic and appearance.
function MyFunction() {
    return (
        <button>I'm a button</button>
    );
}

// Components can be nested inside other components.
export default function MyApp() {
    return (
        <div>
            <h1>Welcome to my app</h1>
            <MyButton />
        </div>
    );
}

// Sintaxe de Markup -> JSX
// JSX is a syntax extension for JavaScript that looks similar to XML or HTML.
// JSX is stricter than HTML. You have to close tags like <br />. 
// Your component also can’t return multiple JSX tags. You have to wrap them into a shared parent, like a <div>...</div> or an empty <>...</> wrapper:
function AboutPage() {
    return (
        <>
            <h1>About</h1>
            <p>Hello there.<br />How do oyu do?</p>
            {/* É possível adicionar estilos usando uma referência a um arquivo CSS ou usando o atributo style. */}
            <img className="avatar" />
        </>
    );
}

// JSX lets you put markup into JavaScript.
return (
    <h1>
        {user.name}
    </h1>
);

// One can also “escape into JavaScript” from JSX attributes
return (
    <img
        className="avatar"
        src={user.imageUrl}
    />
);

// É possível usar condicionais dentro do JSX
let content;
if (isLoggedIn) {
    content = <AdminPanel />;
} else {
    content = <LoginForm />;
}
return (
    <div>
        {content}
    </div>
);

// If you prefer more compact code, you can use the conditional ? operator.
<div>
    {isLoggedIn ? (
        <AdminPanel />
    ) : (
        <LoginForm />
    )}
</div>

// When you don’t need the else branch, you can also use a shorter logical && syntax:
{/* <div>
    {isLoggedIn && <AdminPanel />}
</div> */}

// You will rely on JavaScript features like for loop and the array map() function to render lists of components.
const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 }
]

// Inside your component, use the map() function to transform an array of products into an array of <li> items:
const listItems = products.map(roduct =>
    // Para efeitos de identificação, cada item da lista deve ter uma chave única (key).
    <li key={product.id}>
        {product.title} 
    </li>
);

return (
    <ul>{listItems}</ul>
);
