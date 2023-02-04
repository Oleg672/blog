import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import CommentariesInput from '../CommentariesInput';
import { ArticleDataContext } from '../providers/ArticleDataProvider';
function Article({ obj ,index}) {
    const { ArticleData, setArticleData } = useContext(ArticleDataContext);
    const [comments, setComments] = useState(false);
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
                    }}>читать</NavLink>) : (
                    <button onClick={()=>setComments(!comments)}  className="articles__link">{comments?"скрыть комментарий":"оставить комментарий"}</button> 
                    
                    )}

                </div>
                {comments?<CommentariesInput/>:null}
            </div>

        </li >

    );
}

export default Article;