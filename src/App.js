import React from "react";
import Elements from "./Components/Elements";
import './styles/testStyle.css';
import SearchForm from "./Components/SearchForm";

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

            <div className="hamburger-wrapper">

                <span className="hamburger">
                     <span className="hamburger-line"></span>
                </span>

                    <div className="hamburger-list frame">

                        <div className="list-items input visible" name="World" value="Tanks">World Of Tanks</div>

                        <div className="list-items input hidden" name="World" value="Warplanes">World Of Warplanes
                        </div>
                        <div className="list-items input hidden" name="World" value="Warships">World Of Warships</div>

                        <input type="hidden"/>
                    </div>


            </div>

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
            <div className={'elements-wrapper'}>
                <h3 className={'title-three'}>Выбор элементов</h3>
                <h4>На данный момент выбрано:</h4>
                <>
                    <div className={'choice frame'}></div>
                    <div className={'choice frame'}></div>
                    <div className={'choice frame'}></div>
                </>
                <button className={'search-button frame'}>Изменить выбор</button>

                <div className={'navigation-wrapper'}>
                    <SearchForm/>
                    <select className={'filter frame search-button'} >
                        <option selected>Без фильтров</option>
                        <option value={'10'}>Номер >10</option>
                        <option value={'100'}>Номер >100</option>
                        <option value={'200'}>Номер >200</option>
                    </select>



                    <Select
                        value={selectedSort}
                        onChange={sortCards}
                        defaultValue={'Sorting'}
                        options={[
                            {value: 'name', name: 'in name'},
                            {value: 'year', name: 'in year'}

                        ]}/>

                </div>

                <Elements/>

                    <h4>Выбранные элементы на данный момент:</h4>
                    <>
                        <div className={'choice frame'}></div>
                        <div className={'choice frame'}></div>
                        <div className={'choice frame'}></div>
                    </>
                    <div className={'navigation-wrapper'}>
                        <button className={'search-button frame'}>Сохранить</button>
                        <button className={'search-button frame'}>Отмена</button>
                    </div>

            </div>
        </div>
    )
}

export default App;
