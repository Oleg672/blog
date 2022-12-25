import React from 'react';
import Article from './Article';

function Articles(props) {
    const articles = [
        {
            id: 1,
            img: "",
            video: "",
            title: "",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",
            date: "21.06.2020",
            category: "",
            opened: true
        },
        {
            id: 2,
            img: "/ImagesArticle/content1.png",
            video: "",
            title: "Купил новый ноутбук за 150 000 руб",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",
            date: "22.06.2020",
            category: "продвижение видео",
            opened: true
        },
        {
            id: 3,
            img: "",
            video: "/ImagesArticle/contentVideo.png",
            title: "Купил новый ноутбук за 150 000 руб",
            description: "",
            date: "22.06.2020",
            category: "продвижение видео",
            opened: false
        },
        {
            id: 4,
            img: "/ImagesArticle/content2.png",
            video: "",
            title: "Как я сходил на FrontEnd Conf 2021",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",
            date: "21.06.2020",
            category: "создание сайтов",
            opened: true
        }
    ]
    return (
        <main className='articles'>
            <ul className="articles__list">
                {articles.map((obj) => (
                    < Article key={obj.id} obj={obj} />
                    
                ))}
            </ul>
        </main>
    );
}

export default Articles;