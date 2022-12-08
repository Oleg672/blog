import React from 'react';
import Picture1 from '../images/story1.png'
import Picture2 from '../images/story2.png'
import Picture3 from '../images/story3.png'
import Picture4 from '../images/story4.png'

function PictureStoty(props) {
    return (
        <div className="picture__story">
            <ul className="picture__list">
                <li className="picture__item">
                    <a href="#">
                        <h4 className="picture__title">Отдыхаю на природе</h4>
                        <img className='picture__storyImg' src={Picture4} alt="picture-story" />
                        <p className='picture__storyDate'>21.09.2022</p>
                    </a>
                </li>
                <li className="picture__item">
                    <a href="#">
                        <h4 className="picture__title">Заканчиваю
                            сложный проект</h4>
                        <img className='picture__storyImg' src={Picture3} alt="picture-story" />
                        <p className='picture__storyDate'>15.09.2022</p>
                    </a>
                </li>
                <li className="picture__item">
                    <a href="#">
                        <h4 className="picture__title">Переехал в новую
                            квартиру</h4>
                        <img className='picture__storyImg' src={Picture2} alt="picture-story" />
                        <p className='picture__storyDate'>11.09.2022</p>
                    </a>
                </li>
                <li className="picture__item">
                    <a href="#">
                        <h4 className="picture__title">Осень пришла!</h4>
                        <img className='picture__storyImg' src={Picture1} alt="picture-story" />
                        <p className='picture__storyDate'>28.08.2022</p>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default PictureStoty;