import { NavLink, useParams } from 'react-router-dom';

const NewsSummary = ({ news }) => {

    const { id } = useParams();

    const detailedNews = news.map(singleNews =>
        <>
            <div key={singleNews} className="singleNews col-sm-8 col-md-6 col-lg-4">
                <NavLink target="_blank" rel='noopener noreferrer' to={singleNews.webUrl}>
                    <h4>{singleNews.fields.headline}</h4>
                </NavLink>
                <img src={singleNews.fields.thumbnail} alt="" className="img-thumbnail center" />
                <p>{singleNews.fields.bodyText}</p>
            </div>
        </>
    )[id]

    return (
        <>
            {!news.length && <div>News Summary not available</div>}
            {!Object.keys(detailedNews).length === 0 && <div>Processing Summary</div>}
            {Object.keys(detailedNews).length > 0 &&
                <>
                    {detailedNews}
                </>
            }
        </>
    )
}

export default NewsSummary;