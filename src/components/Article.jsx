import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ArticleDataContext } from '../providers/ArticleDataProvider';
function Article({ obj }) {
    const { ArticleData, setArticleData } = useContext(ArticleDataContext)

    return (
        <li className="articles__item">
            {(obj.img) ? (<img src={process.env.PUBLIC_URL + obj.img} alt="contetnt" className="articles__picture" />) : (<></>)}
            {(obj.video) ? (<div className="articles__video"><img src={process.env.PUBLIC_URL + obj.video} alt="contetnt" className="articles__picture" /> </div>) : (<></>)}
            <div className="articles__item-inner">
                <h2 className='articles__title'>{obj.title}</h2>
                <p className="articles__description">{obj.description}</p>
                <div className="articles__footer">
                    <div className="articles__footer-Wrapp">
                        <span className="articles__date">{obj.date}</span>
                        {(obj.category) ? (<span className="articles__categories">{obj.category}</span>) : (<></>)}
                    </div>
                    {(obj.opened) ? (<NavLink to="/ArticlePage" className="articles__link" onClick={() => {

                        setArticleData({
                            ...ArticleData,
                            title: obj.title,
                            img: obj.img,
                            video: obj.video,
                            description: obj.description,
                            date: obj.date,
                            category: obj.category
                        });
                    }}>читать</NavLink>) : (<a href="#" className="articles__link">оставить комментарий</a>)}

                </div>
            </div>
        </li >
    );
}

export default Article;