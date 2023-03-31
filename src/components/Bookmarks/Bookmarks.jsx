import "./Bookmarks.css";

const Bookmarks = (props) => {
    const { readTime, countBM } = props;

    return (
        <section>
            <div className='count-time'>
                <p>Spent time on read : {readTime} min</p>
            </div>

            <div className='added-bookmark'>
                <h2>Bookmarked Blogs : {countBM}</h2>
            </div>
        </section>
    );
};

export default Bookmarks;