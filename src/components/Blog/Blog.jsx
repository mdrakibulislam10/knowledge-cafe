import React from 'react';

const Blog = () => {
    return (
        <section>
            <h1 style={{ color: "orange" }}>Welcome to my own blog!</h1>
            <div style={{ textAlign: "start" }}>
                <article>
                    <h2>1. Props vs state.</h2>
                    <p>
                        <b>#props:</b> Props is short form of properties. Props is used for sending data parent component to child component. When we passed data parent to child component then, the props parameter receive an object. Props is immutable. We can't change or update props value. But, we can used props's value.
                        <br />
                        <br />
                        <b>#state:</b> if something change on the website then, State is used. Use useState() method to use or modify the state. useState() method give us two value. First value is an initial(default) value and second value is a function. useState() is on kind of array. So, we can get two value with array destructuring. We can set, change or update value of state with setState() function. Props is mutable. We change or update state value and we can used state's value. We can passed state value parent to child component with props.
                    </p>
                </article>

                <article>
                    <h2>2. How does useState work?</h2>
                    <p></p>
                </article>

                <article>
                    <h2>3. Purpose of useEffect other than fetching data.</h2>
                    <p></p>
                </article>

                <article>
                    <h2>4. How Does React work?</h2>
                    <p></p>
                </article>
            </div>
        </section>
    );
};

export default Blog;