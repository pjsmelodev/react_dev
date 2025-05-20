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
            <MyApp />
        </div>
    );
}