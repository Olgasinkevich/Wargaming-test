import React from "react";
import Elements from "./Components/Elements";
import './styles/testStyle.css';
import SearchForm from "./Components/SearchForm";
import Burger from "./Components/Burger";
import ElementsSelection from "./Components/ElementsSelection";

function App() {
    return (
        <div className="container">
            <div className="search-wrapper">
                <form className="form">

                    <input type="search" className="search frame"/>

                    <input type="submit" value="GO" className="search-button frame"/>

                </form>
                <form className="form">
                    <input type="search" className="search frame"/>
                    <button className="search-button frame">НАЙТИ</button>
                </form>

            </div>
            <hr className="hr-style"/>
            <Burger/>
            <ul className="list-wrapper">
                <li className="list-items">World Of Tanks</li>
                <li className="list-items">World Of Warplanes</li>
                <li className="list-items">World Of Warships</li>
            </ul>
            <hr className="hr-style"/>
            <h3 className="title-three">Почему не рассматриваются заявки с жалобами на нарушение Правил
                игры?</h3>
            <div className="text-wrapper">

                <p>После введения функционала "Пожаловаться" не рассматриваются заявки, созданные в центре подднржки
                    пользователей о нарущении Правил игры по следующим пунктам:
                </p>
                <ol>
                    <li>"Оскорбления и провокации"
                        <ul>В данный пункт входит:
                            <li>использование ненормативной лексики и оскорбление собеседников.ю пренение
                                унизительных
                                кличек и прозвищ
                                по расовому, национальному, религиозному либо половому признаку, а также
                                провоцирование
                                собеседников к их использованию;
                            </li>
                            <li>клевета, размещение заведомо ложной информации об Игре, Администрации, Модераторах
                                или
                                Пользователях;
                            </li>
                            <li>угрозы реальной расправы в отношении представмтелей Администрации Проектаю Все виды
                                соглашения.
                            </li>
                        </ul>
                    </li>

                    <li>"Неинформативные сообщения"
                        <ul>В данный пункт входит:
                            <li>размещение информации (сообщения, фразы, символов и пр.), направленной на отвлечение
                                Пользователей от темы беседы (флуд);
                            </li>
                            <li>все виды рекламных сообщений, в частности ссылки на интернет-ресурсы.</li>
                        </ul>
                    </li>
                    <p>Также не рассматриваются следующие заявки, созданные в Центр поддержки пользователей о
                        нарушении
                        Правил игры:</p>
                    <li>"Раскрытие позиций союзников"</li>
                    <li>"Выталкивание союзника"</li>
                    <li>"Неспортивное поведение"</li>
                    <li>"Повреждение союзников"</li>
                </ol>
            </div>
            <hr className="hr-style"/>
            <ElementsSelection/>
        </div>
    )
}

export default App;
