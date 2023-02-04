import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ArticlePageImg from './../images/articlePageImg.png'
import valak from './../images/valak.png'
import den from './../images/den.png'
import { ArticleDataContext } from '../providers/ArticleDataProvider';
import SendMessage from './SendMessage';
import CommentariesInput from '../CommentariesInput';


function ArticlePage(props) {
    const [Modal, setModal] = useState(false);
    const { ArticleData, setArticleData } = useContext(ArticleDataContext);
    return (
        <>

            <article className='articlePage'>
                <div className="articlePage__header">
                    <NavLink to={"/"} className="articlePage__close">вернуться назад</NavLink>
                    <div className='articlePage__share-inner' onClick={() => {setModal(!Modal)}}>
                        <a className="articlePage__share">поделиться</a>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.8594 12.9688C14.7017 12.9688 13.6731 13.5313 13.0321 14.3973L7.51375 11.5772C7.60633 11.2627 7.65625 10.93 7.65625 10.5859C7.65625 10.1199 7.56488 9.67484 7.39945 9.26746L13.183 5.79254C13.8284 6.54996 14.7887 7.03125 15.8594 7.03125C17.7979 7.03125 19.375 5.45414 19.375 3.51562C19.375 1.57711 17.7979 0 15.8594 0C13.9209 0 12.3438 1.57711 12.3438 3.51562C12.3438 3.96367 12.4282 4.3923 12.5816 4.78672L6.78359 8.27031C6.13875 7.53523 5.19301 7.07031 4.14062 7.07031C2.20211 7.07031 0.625 8.64742 0.625 10.5859C0.625 12.5245 2.20211 14.1016 4.14062 14.1016C5.31727 14.1016 6.36063 13.5205 6.9991 12.6302L12.5014 15.4421C12.399 15.7716 12.3438 16.1216 12.3438 16.4844C12.3438 18.4229 13.9209 20 15.8594 20C17.7979 20 19.375 18.4229 19.375 16.4844C19.375 14.5459 17.7979 12.9688 15.8594 12.9688ZM15.8594 1.17188C17.1517 1.17188 18.2031 2.22328 18.2031 3.51562C18.2031 4.80797 17.1517 5.85938 15.8594 5.85938C14.567 5.85938 13.5156 4.80797 13.5156 3.51562C13.5156 2.22328 14.567 1.17188 15.8594 1.17188ZM4.14062 12.9297C2.84828 12.9297 1.79688 11.8783 1.79688 10.5859C1.79688 9.29359 2.84828 8.24219 4.14062 8.24219C5.43297 8.24219 6.48438 9.29359 6.48438 10.5859C6.48438 11.8783 5.43297 12.9297 4.14062 12.9297ZM15.8594 18.8281C14.567 18.8281 13.5156 17.7767 13.5156 16.4844C13.5156 15.192 14.567 14.1406 15.8594 14.1406C17.1517 14.1406 18.2031 15.192 18.2031 16.4844C18.2031 17.7767 17.1517 18.8281 15.8594 18.8281Z" fill="white" />
                        </svg>
                    </div>
                </div>
                {ArticleData.title? <h2 className='articlePage__title'>{ArticleData.title}</h2>:null}
                {ArticleData.date?<span className="articles__date">{ArticleData.date}</span>:null}
                {ArticleData.category?<span className="articles__categories">{ArticleData.category}</span>:null}
                <div className="articlePage__content">
                    <div className="articlePage__contentInner">
                    {ArticleData.img?<img className='ArticlePageImg' src={process.env.PUBLIC_URL + ArticleData.img} alt="ArticlePageImg" />:null}
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
                        <CommentariesInput />
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
            </article >
            <SendMessage ModalActive={Modal} setModalActive={setModal}>
                <div className="social__container">
                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_12_231)">
                            <path d="M22.5 45C34.9264 45 45 34.9264 45 22.5C45 10.0736 34.9264 0 22.5 0C10.0736 0 0 10.0736 0 22.5C0 34.9264 10.0736 45 22.5 45Z" fill="#3B5998" />
                            <path d="M28.1565 23.3808H24.1416V38.0893H18.0588V23.3808H15.1658V18.2116H18.0588V14.8666C18.0588 12.4745 19.1951 8.72879 24.1958 8.72879L28.7015 8.74764V13.7652H25.4323C24.8961 13.7652 24.142 14.0331 24.142 15.1742V18.2164H28.6879L28.1565 23.3808Z" fill="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_12_231">
                                <rect width="45" height="45" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_12_250)">
                            <path d="M22.5008 44.9996C34.9271 44.9996 45.0006 34.9261 45.0006 22.4998C45.0006 10.0735 34.9271 0 22.5008 0C10.0745 0 0.000976562 10.0735 0.000976562 22.4998C0.000976562 34.9261 10.0745 44.9996 22.5008 44.9996Z" fill="#55ACEE" />
                            <path d="M36.2822 16.17C35.318 16.5975 34.2808 16.8867 33.193 17.0158C34.3036 16.3504 35.1559 15.2976 35.5582 14.041C34.519 14.6575 33.3675 15.1047 32.143 15.3457C31.162 14.3009 29.7642 13.648 28.2164 13.648C25.2468 13.648 22.8384 16.0565 22.8384 19.026C22.8384 19.4476 22.8861 19.8579 22.9783 20.2518C18.5087 20.0275 14.5456 17.8866 11.8929 14.6318C11.43 15.426 11.1645 16.3504 11.1645 17.3359C11.1645 19.2013 12.1147 20.8482 13.557 21.8124C12.6758 21.7847 11.8459 21.5428 11.1212 21.1389C11.1208 21.1618 11.1208 21.1847 11.1208 21.2071C11.1208 23.8129 12.9754 25.9864 15.4352 26.4801C14.9844 26.6037 14.5083 26.669 14.0186 26.669C13.6713 26.669 13.3348 26.6357 13.0067 26.5732C13.6909 28.7093 15.6767 30.2643 18.0306 30.308C16.1896 31.7507 13.871 32.6102 11.3506 32.6102C10.9174 32.6102 10.4883 32.585 10.0684 32.5348C12.4472 34.0613 15.2748 34.9513 18.3118 34.9513C28.204 34.9513 33.6138 26.7565 33.6138 19.6489C33.6138 19.4159 33.6086 19.1837 33.5981 18.9535C34.6498 18.1954 35.5614 17.2485 36.2822 16.17Z" fill="#F1F2F2" />
                        </g>
                        <defs>
                            <clipPath id="clip0_12_250">
                                <rect width="45" height="45" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_12_270)">
                            <path d="M22.5 45C34.9264 45 45 34.9264 45 22.5C45 10.0736 34.9264 0 22.5 0C10.0736 0 0 10.0736 0 22.5C0 34.9264 10.0736 45 22.5 45Z" fill="#4D76A1" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.6502 32.3683H23.4161C23.4161 32.3683 23.9496 32.3097 24.2219 32.0161C24.4726 31.7466 24.4646 31.2404 24.4646 31.2404C24.4646 31.2404 24.4301 28.8708 25.5298 28.5219C26.614 28.1781 28.0061 30.8121 29.4817 31.8248C30.5975 32.5913 31.4454 32.4232 31.4454 32.4232L35.3909 32.3683C35.3909 32.3683 37.4549 32.2411 36.4762 30.6183C36.396 30.4856 35.9063 29.4179 33.5427 27.224C31.0688 24.9278 31.4001 25.2992 34.3802 21.3272C36.1951 18.9083 36.9206 17.4315 36.694 16.799C36.4778 16.1966 35.143 16.3558 35.143 16.3558L30.7006 16.3835C30.7006 16.3835 30.3713 16.3385 30.1271 16.4845C29.8884 16.6277 29.7348 16.9614 29.7348 16.9614C29.7348 16.9614 29.0317 18.8333 28.094 20.4252C26.1158 23.7843 25.3249 23.9615 25.0016 23.753C24.2496 23.2669 24.4373 21.8001 24.4373 20.7581C24.4373 17.5029 24.931 16.1456 23.4759 15.7943C22.993 15.6776 22.6376 15.6006 21.4027 15.5881C19.8176 15.5717 18.476 15.5929 17.7163 15.9651C17.211 16.2126 16.8211 16.7641 17.0586 16.7958C17.3521 16.8351 18.0171 16.9751 18.3697 17.4552C18.8249 18.0744 18.8089 19.4654 18.8089 19.4654C18.8089 19.4654 19.0704 23.2974 18.198 23.7734C17.5992 24.0999 16.7778 23.4333 15.0142 20.3859C14.1106 18.8249 13.4283 17.0994 13.4283 17.0994C13.4283 17.0994 13.2968 16.7769 13.0622 16.6045C12.7774 16.3955 12.3795 16.3289 12.3795 16.3289L8.1581 16.3566C8.1581 16.3566 7.52439 16.3742 7.29176 16.6498C7.0848 16.8949 7.27532 17.4018 7.27532 17.4018C7.27532 17.4018 10.5802 25.1339 14.3224 29.0304C17.7536 32.6029 21.6502 32.3683 21.6502 32.3683Z" fill="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_12_270">
                                <rect width="45" height="45" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_12_290)">
                            <path d="M0 22.5005C0 34.9279 10.0728 45.0004 22.4996 45C34.9272 45.0004 45 34.9279 45 22.5005C45.0008 10.0731 34.9272 0 22.4996 0C10.0728 0 0 10.0735 0 22.5005Z" fill="#FA6E51" />
                            <path d="M44.9467 23.9755L34.4499 13.4787H34.4498L29.0247 8.05368C28.969 7.99778 28.9022 7.95331 28.8283 7.92237C28.7547 7.89161 28.6751 7.875 28.5937 7.875H17.625C17.2885 7.875 17.0156 8.1479 17.0156 8.48435V11.5312H10.3125C9.97603 11.5312 9.70312 11.8041 9.70312 12.1406V36.5156C9.70312 36.7218 9.81237 36.8953 9.96917 37.0055C10.0099 37.0633 17.2425 44.2959 17.3003 44.3366C17.3194 44.3638 17.3465 44.3824 17.3691 44.4054C19.0178 44.7901 20.7338 45 22.4996 44.9999C34.4312 45.0004 44.1863 35.7144 44.9467 23.9755Z" fill="#E8573F" />
                            <path d="M35.2495 14.3435C35.2186 14.2695 35.174 14.2029 35.1182 14.1471L29.0248 8.05368C28.969 7.99787 28.9024 7.95331 28.8284 7.92237C28.7547 7.89161 28.6751 7.875 28.5937 7.875H17.625C17.2884 7.875 17.0156 8.14781 17.0156 8.48435V11.5313H10.3125C9.97594 11.5313 9.70312 11.8041 9.70312 12.1406V36.5156C9.70312 36.8521 9.97594 37.1249 10.3125 37.1249H27.3749C27.7115 37.1249 27.9843 36.8521 27.9843 36.5156V33.4688H34.6874C35.024 33.4688 35.2968 33.1959 35.2968 32.8594V14.5782C35.2969 14.4968 35.2803 14.4171 35.2495 14.3435ZM29.2032 9.95537L33.2165 13.9687H29.2032V9.95537ZM26.7656 35.9062H10.9219V12.75H20.6719V18.2344C20.6719 18.5709 20.9447 18.8438 21.2812 18.8438H26.7656V35.9062V35.9062ZM25.904 17.625H21.8907V13.6116L25.904 17.625ZM27.9844 32.25V18.2344C27.9844 18.153 27.9678 18.0735 27.937 17.9997C27.9061 17.9257 27.8615 17.8591 27.8057 17.8033L21.7123 11.7099C21.6565 11.6541 21.5899 11.6096 21.5159 11.5786C21.4422 11.5479 21.3626 11.5313 21.2812 11.5313H18.2343V9.09378H27.9844V14.5782C27.9844 14.9147 28.2572 15.1875 28.5937 15.1875H34.0781V32.25H27.9844Z" fill="#F4F6F9" />
                        </g>
                        <defs>
                            <clipPath id="clip0_12_290">
                                <rect width="45" height="45" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>


            </SendMessage>
        </>
    );
}

export default ArticlePage;