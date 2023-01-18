import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import ArticlePageImg from './../images/articlePageImg.png'
import valak from './../images/valak.png'
import den from './../images/den.png'
import { ArticleDataContext } from '../providers/ArticleDataProvider';

function ArticlePage(props) {

    const { ArticleData, setArticleData } = useContext(ArticleDataContext);
    return (
        <div className='articlePage'>
            <div className="articlePage__header">
                <NavLink to={"/"} className="articlePage__close">вернуться назад</NavLink>
                <div className='articlePage__share-inner'>
                    <a className="articlePage__share">поделиться</a>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.8594 12.9688C14.7017 12.9688 13.6731 13.5313 13.0321 14.3973L7.51375 11.5772C7.60633 11.2627 7.65625 10.93 7.65625 10.5859C7.65625 10.1199 7.56488 9.67484 7.39945 9.26746L13.183 5.79254C13.8284 6.54996 14.7887 7.03125 15.8594 7.03125C17.7979 7.03125 19.375 5.45414 19.375 3.51562C19.375 1.57711 17.7979 0 15.8594 0C13.9209 0 12.3438 1.57711 12.3438 3.51562C12.3438 3.96367 12.4282 4.3923 12.5816 4.78672L6.78359 8.27031C6.13875 7.53523 5.19301 7.07031 4.14062 7.07031C2.20211 7.07031 0.625 8.64742 0.625 10.5859C0.625 12.5245 2.20211 14.1016 4.14062 14.1016C5.31727 14.1016 6.36063 13.5205 6.9991 12.6302L12.5014 15.4421C12.399 15.7716 12.3438 16.1216 12.3438 16.4844C12.3438 18.4229 13.9209 20 15.8594 20C17.7979 20 19.375 18.4229 19.375 16.4844C19.375 14.5459 17.7979 12.9688 15.8594 12.9688ZM15.8594 1.17188C17.1517 1.17188 18.2031 2.22328 18.2031 3.51562C18.2031 4.80797 17.1517 5.85938 15.8594 5.85938C14.567 5.85938 13.5156 4.80797 13.5156 3.51562C13.5156 2.22328 14.567 1.17188 15.8594 1.17188ZM4.14062 12.9297C2.84828 12.9297 1.79688 11.8783 1.79688 10.5859C1.79688 9.29359 2.84828 8.24219 4.14062 8.24219C5.43297 8.24219 6.48438 9.29359 6.48438 10.5859C6.48438 11.8783 5.43297 12.9297 4.14062 12.9297ZM15.8594 18.8281C14.567 18.8281 13.5156 17.7767 13.5156 16.4844C13.5156 15.192 14.567 14.1406 15.8594 14.1406C17.1517 14.1406 18.2031 15.192 18.2031 16.4844C18.2031 17.7767 17.1517 18.8281 15.8594 18.8281Z" fill="white" />
                    </svg>
                </div>
            </div>
            <h2 className='articlePage__title'>{ArticleData.title}</h2>
            <span className="articles__date">{ArticleData.date}</span>
            <span className="articles__categories">{ArticleData.category}</span>
            <div className="articlePage__content">
                <div className="articlePage__contentInner">
                    <img className='ArticlePageImg' src={ArticleData.img} alt="ArticlePageImg" />
                    <p className='articlePage__content-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.</p>
                    <img className='ArticlePage__Img' src={ArticlePageImg} alt="ArticlePageImg" />
                    <p className='articlePage__content-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.</p>
                </div>
                <div className="recommendations">
                    <h5 className='recommendations__Title'>Интересно почитать</h5>
                    <div className="recommendations__Container">
                        <div className="recommendations__Inner">
                            <h6 className="recommendations__ItemTitle">Как я сходил на FrontEnd Conf 2021</h6>
                            <span className="articles__date">{props.date}21.06.2020</span>
                        </div>
                        <div className="recommendations__Inner">
                            <h6 className="recommendations__ItemTitle">Как писать код быстро и  ...</h6>
                            <span className="articles__date">{props.date}21.06.2020</span>
                        </div>
                        <div className="recommendations__Inner">
                            <h6 className="recommendations__ItemTitle">Купил новый ноутбук за 150 000 руб</h6>
                            <span className="articles__date">{props.date}21.06.2020</span>
                        </div>
                        <div className="recommendations__Inner">
                            <h6 className="recommendations__ItemTitle">Купил новый ноутбук за 150 000 руб</h6>
                            <span className="articles__date">{props.date}21.06.2020</span>
                        </div>
                    </div>
                </div>
                <div className="comentaries__Container">
                    <div className="comentaries__Input">
                        <h6 className="comentaries__Title">Обсуждение</h6>
                        <textarea className='comentaries__TextInput' placeholder="Текст комментария"></textarea>

                        <button className='BTNSend'>Отправить</button>
                    </div>
                    <div className="comentaries">
                        <div className="comentaries__Item">
                            <div className="comentaries__Item-inner">
                                <div className="comentaries__Autor">
                                    <img className="comentaries__AutorIMG" src={valak} alt="comentaries__AutorIMG" />
                                    <div className="comentaries__AutorDesc">
                                        <h6 className="comentaries__Name">Дмитрий Валак</h6>
                                        <span className="comentaries__date">1 неделю назад</span>
                                    </div>
                                </div>
                                <div className="comentaries__text">Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.</div>
                                <a className="articles__link">ответить</a>
                            </div>
                            <div className="comentaries__Item">
                                <div className="comentaries__Item-inner">
                                    <div className="comentaries__Autor">
                                        <img className="comentaries__AutorIMG" src={den} alt="comentaries__AutorIMG" />
                                        <div className="comentaries__AutorDesc">
                                            <h6 className="comentaries__Name">Джонни</h6>
                                            <span className="comentaries__date">1 неделю назад</span>
                                        </div>
                                    </div>
                                    <div className="comentaries__text">Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.</div>
                                    <a className="articles__link">ответить</a>
                                </div>

                            </div>
                            <div className="comentaries__Item">
                                <div className="comentaries__Item-inner">
                                    <div className="comentaries__Autor">
                                        <img className="comentaries__AutorIMG" src={den} alt="comentaries__AutorIMG" />
                                        <div className="comentaries__AutorDesc">
                                            <h6 className="comentaries__Name">Джонни</h6>
                                            <span className="comentaries__date">1 неделю назад</span>
                                        </div>
                                    </div>
                                    <div className="comentaries__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, esse.</div>
                                    <a className="articles__link">ответить</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default ArticlePage;