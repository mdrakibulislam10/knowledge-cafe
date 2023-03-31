import React from 'react';

const Blog = () => {
    return (
        <section>
            <h2 style={{ color: "orange", fontSize: "35px" }}>Welcome to my own blog!</h2>
            <div style={{ textAlign: "start" }}>
                <article>
                    <h2>1. Props vs state.</h2>
                    <p>
                        <b>#Props:</b> Props is short form of properties. Props is used for sending data parent component to child component. When we passed data parent to child component then, the props parameter receive an object. Props is immutable. We can't change or update props value. But, we can used props's value.
                        <br />
                        <br />
                        <b>#State:</b> if something change on the website then, State is used. Use useState() method(hook) to use or modify the state. State is mutable. We can set, change or update value of state with setState() function. We can passed state value parent to child component with props.
                    </p>
                </article>

                <article>
                    <h2>2. How does useState work?</h2>
                    <p>
                        <b>#useState():</b> useState() is react hook. useState() use for set / update state value. useState() returns an array with two values. First value is an initial(default) value and second value is a function. We can get two value with array destructuring. set, change or update state value by setState() method.
                    </p>
                </article>

                <article>
                    <h2>3. Purpose of useEffect other than fetching data.</h2>
                    <p>
                        <b>#useEffect():</b> useEffect() is react hook. useEffect() use for side effect such as: fetching API data, local storage data, etc. Also we can use useEffect() for updating DOM. We can load data and set to state and passed data in JSX element and displayed on UI. We can use useEffect() for- event handlers, dynamic data load(get), update state value, make animation and more. How many times the arrow function of useEffect will be executed can be control by  dependency.
                    </p>
                </article>

                <article>
                    <h2>4. How Does React work?</h2>
                    <p>
                        <b>#React:</b> React is JavaScript library for building UI. React keep copy of original DOM as virtual DOM. When, we change any content of website then, virtual dom is compare with the original dom and find out where the changed content and update with babel compiler without full website re-rendering. React have some hook. We can use hook for easily maintain js code. We can write html in js file with JSX. It's not real html. Babel is used for convert JSX to js object.
                    </p>
                </article>
            </div>
        </section>
    );
};

export default Blog;