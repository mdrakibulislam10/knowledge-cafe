import "./Bookmarks.css";
import MarkTitle from "../MarkTitle/MarkTitle";

const Bookmarks = (props) => {
    const { readTime, countBM, selectedBlogs } = props;

    return (

        <section>
            <div className='count-time'>
                <p>Spent time on read : {readTime} min</p>
            </div>

            <div className='added-bookmark'>
                <h2>Bookmarked Blogs : {countBM}</h2>
                <div style={{ textAlign: "start" }}>
                    {
                        selectedBlogs.map(blog => <MarkTitle
                            title={blog.title}
                            key={blog.id}
                        ></MarkTitle>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Bookmarks;