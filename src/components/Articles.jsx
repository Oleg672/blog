import React, { useContext, useState } from 'react';
import Article from './Article';
import { CategoriesContext } from '../providers/CategoriesProvider';
import ArticlesFooterBtn from './ArticlesFooterBtn';
function Articles() {
    const countArticlePage = 5;
    const { Categories, setCategories } = useContext(CategoriesContext)
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
            category: "Продвижение видео",
            opened: true
        },
        {
            id: 3,
            img: "",
            video: "/ImagesArticle/contentVideo.png",
            title: "Купил новый ноутбук за 150 000 руб",
            description: "",
            date: "22.06.2020",
            category: "Продвижение видео",
            opened: false
        },
        {
            id: 4,
            img: "/ImagesArticle/content2.png",
            video: "",
            title: "Как я сходил на FrontEnd Conf 2021",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",
            date: "21.06.2020",
            category: "Cоздание сайтов",
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
            category: "Продвижение видео",
            opened: true
        },
        {
            id: 7,
            img: "",
            video: "/ImagesArticle/contentVideo.png",
            title: "Купил новый ноутбук за 150 000 руб",
            description: "",
            date: "22.06.2020",
            category: "Продвижение видео",
            opened: false
        },
        {
            id: 8,
            img: "/ImagesArticle/content2.png",
            video: "",
            title: "Как я сходил на FrontEnd Conf 2021",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",
            date: "21.06.2020",
            category: "Cоздание сайтов",
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
            category: "Продвижение видео",
            opened: true
        },
        {
            id: 11,
            img: "",
            video: "/ImagesArticle/contentVideo.png",
            title: "Купил новый ноутбук за 150 000 руб",
            description: "",
            date: "22.06.2020",
            category: "Продвижение видео",
            opened: false
        },
        {
            id: 12,
            img: "/ImagesArticle/content2.png",
            video: "",
            title: "Как я сходил на FrontEnd Conf 2021",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",
            date: "21.06.2020",
            category: "Cоздание сайтов",
            opened: true
        },
        {
            id: 13,
            img: "",
            video: "",
            title: "",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",
            date: "21.06.2020",
            category: "Интернет-маркетинг",
            opened: true
        },
        {
            id: 14,
            img: "/ImagesArticle/content1.png",
            video: "",
            title: "Как писать код быстро и безболезненно?",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",
            date: "22.06.2020",
            category: "Продвижение видео",
            opened: true
        },
        {
            id: 15,
            img: "",
            video: "/ImagesArticle/contentVideo.png",
            title: "Купил новый ноутбук за 150 000 руб",
            description: "",
            date: "22.06.2020",
            category: "Продвижение видео",
            opened: false
        },
        {
            id: 16,
            img: "/ImagesArticle/content2.png",
            video: "",
            title: "Как я сходил на FrontEnd Conf 2021",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",
            date: "21.06.2020",
            category: "Cоздание сайтов",
            opened: true
        }
    ]
    const articlesFilter = [];
    const buttons = [];



    function Filter(articles, articlesFilter, buttons) {
        articlesFilter = Categories ?
            articles.filter(elem => elem.category === Categories)
                .map((obj) => (
                    articlesFilter.push(obj)

                )) : null;
    }
    function countButtons(articlesFilter, articles, buttons) {
        if (articlesFilter.length != 0)
            for (let i = 1; i <= (articlesFilter.length/ countArticlePage)+1; i++) {
                buttons.push(i);
            }
        else {
            for (let i = 1; i <= (articles.length / countArticlePage)+1; i++) {
                buttons.push(i);
            }
        }
    }
    const [PagePagination, setPagePagination] = useState(1)

    const ArticlePagination = (Page) => {
        setPagePagination(Page);
    }
    Filter(articles, articlesFilter)
    countButtons(articlesFilter, articles, buttons)
console.log(articlesFilter);
    return (
        <main className='articles'>
            <ul className="articles__list">
                    {/* ДОДЕЛАТЬ */}
                {Categories ?
                    articlesFilter.map((obj,index) => (
                        (index < PagePagination * countArticlePage && index >= (PagePagination-1) * countArticlePage)
                        ? < Article key={obj.id} obj={obj} /> : null))
                    :
                    articles.map((obj) => (
                        (obj.id <= PagePagination * countArticlePage && obj.id > (PagePagination - 1) * countArticlePage)
                            ? < Article key={obj.id} obj={obj} /> : null))
                }
            </ul>
            {articlesFilter? 
            <ArticlesFooterBtn PagePagination1={PagePagination} ArticlePagination1={ArticlePagination} buttons={buttons} />
            :
            <ArticlesFooterBtn PagePagination1={PagePagination} ArticlePagination1={ArticlePagination} buttons={buttons} />}
        </main>
    );
}

export default Articles;