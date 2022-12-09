import React from 'react';
import Img1 from '../images/content1.png';
import Img2 from '../images/contentVideo.png';

function Articles(props) {
    return (
        <main className='articles'>
            <ul className="articles__list">
                <li className="articles__item">
                    <img src={Img1} alt="contetnt" className="articles__picture" />
                    <div className="articles__item-inner">
                        <h2 className="articles__title">Как писать код быстро и безболезненно?</h2>
                        <p className="articles__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.</p>
                        <div className="articles__footer">
                            <div className="articles__footer-Wrapp">
                                <span className="articles__date">21.06.2020</span>
                                <span className="articles__categories">создание сайтов</span>
                            </div>
                            <a href="#" className="articles__link">читать</a>
                        </div>
                    </div>

                </li>
                <li className="articles__item">
                    <img src={Img2} alt="contetnt" className="articles__picture articles__video" />
                    <div className="articles__item-inner">
                        <h2 className="articles__title">Как писать код быстро и безболезненно?</h2>
                        <p className="articles__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.</p>
                        <div className="articles__footer">
                            <div className="articles__footer-Wrapp">
                                <span className="articles__date">21.06.2020</span>
                                <span className="articles__categories">создание сайтов</span>
                            </div>
                            <a href="#" className="articles__link">читать</a>
                        </div>
                    </div>

                </li>

            </ul>
        </main>
    );
}

export default Articles;