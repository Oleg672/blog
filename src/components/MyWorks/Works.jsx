import React from 'react';
import works1 from '../../images/works1.png';
import works2 from '../../images/works2.png';

function Works(props) {
    return (
        <div className='works'>
            <h2 className="works__titlePage">Мои работы</h2>
            <div className="works__article-wrapper">
                <ul className="works__list">
                    <li className="works__article">
                        <img src={works1} alt="Works" className="works__articleIMG" />
                        <div className="works__description">
                            <h3 className="works__articleTitle">altermono.com</h3>
                            <p className="works__articleDecription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.</p>
                            <div className="works__categories">
                                <ul className="works__categoriesList">
                                    <li className="works__categoriesItem">дизайн</li>
                                    <li className="works__categoriesItem">создание сайта</li>
                                    <li className="works__categoriesItem">SMM</li>
                                </ul>
                            </div>
                            <button className="works__articleButtons">Перейти на сайт</button>

                        </div>
                    </li>
                    <li className="works__article">
                        <img src={works2} alt="Works" className="works__articleIMG" />
                        <div className="works__description">
                            <h3 className="works__articleTitle">codedoco.com</h3>
                            <p className="works__articleDecription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. </p>
                            <div className="works__categories">
                                <ul className="works__categoriesList">
                                    <li className="works__categoriesItem">дизайн</li>
                                    <li className="works__categoriesItem">создание сайта</li>
                                    <li className="works__categoriesItem">SMM</li>
                                </ul>
                            </div>
                            <button className="works__articleButtons">Перейти на сайт</button>

                        </div>
                    </li>
                </ul>
            </div>

        </div>
    );
}

export default Works;