import React from 'react';
import Article from './Article';

function Articles() {
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
            title: "Как писать код быстро и безболезненно?",
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
        },
        {
            id: 5,
            img: "",
            video: "",
            title: "",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",
            date: "21.06.2020",
            category: "",
            opened: true
        },
        {
            id: 6,
            img: "/ImagesArticle/content1.png",
            video: "",
            title: "Как писать код быстро и безболезненно?",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",
            date: "22.06.2020",
            category: "продвижение видео",
            opened: true
        },
        {
            id: 7,
            img: "",
            video: "/ImagesArticle/contentVideo.png",
            title: "Купил новый ноутбук за 150 000 руб",
            description: "",
            date: "22.06.2020",
            category: "продвижение видео",
            opened: false
        },
        {
            id: 8,
            img: "/ImagesArticle/content2.png",
            video: "",
            title: "Как я сходил на FrontEnd Conf 2021",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",
            date: "21.06.2020",
            category: "создание сайтов",
            opened: true
        },
        {
            id: 9,
            img: "",
            video: "",
            title: "",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",
            date: "21.06.2020",
            category: "",
            opened: true
        },
        {
            id: 10,
            img: "/ImagesArticle/content1.png",
            video: "",
            title: "Как писать код быстро и безболезненно?",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",
            date: "22.06.2020",
            category: "продвижение видео",
            opened: true
        },
        {
            id: 11,
            img: "",
            video: "/ImagesArticle/contentVideo.png",
            title: "Купил новый ноутбук за 150 000 руб",
            description: "",
            date: "22.06.2020",
            category: "продвижение видео",
            opened: false
        },
        {
            id: 12,
            img: "/ImagesArticle/content2.png",
            video: "",
            title: "Как я сходил на FrontEnd Conf 2021",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",
            date: "21.06.2020",
            category: "создание сайтов",
            opened: true
        },
        {
            id: 13,
            img: "",
            video: "",
            title: "",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",
            date: "21.06.2020",
            category: "",
            opened: true
        },
        {
            id: 14,
            img: "/ImagesArticle/content1.png",
            video: "",
            title: "Как писать код быстро и безболезненно?",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",
            date: "22.06.2020",
            category: "продвижение видео",
            opened: true
        },
        {
            id: 15,
            img: "",
            video: "/ImagesArticle/contentVideo.png",
            title: "Купил новый ноутбук за 150 000 руб",
            description: "",
            date: "22.06.2020",
            category: "продвижение видео",
            opened: false
        },
        {
            id: 16,
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