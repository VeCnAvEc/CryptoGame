import React from 'react'
import gameImagePng from '../../assets/game.png';
import gameImagePng2x from '../../assets/game@2x.png';
import gameImageWebp from '../../assets/game.webp';
import Layout from '../../components/elements/Layout';
import PageInfoItem from '../../components/atoms/PageInfoItem';

const InfoPage: React.FC = () => {
  return (
      <Layout page='Infos'>

        <div className="page_info grid">
        <div style={{scrollBehavior: 'smooth'}} className="page_info_items">
            <PageInfoItem id="i1">
            <h2>Crypto Matrix Game</h2>
            <div className="page_info_item_img">
                <picture>
                <source srcSet={gameImageWebp} type="image/webp" />
                <img
                    src={gameImagePng}
                    alt=""
                    srcSet={`${gameImagePng} 1x, ${gameImagePng2x} 2x`}
                />
                </picture>
            </div>
            <p>
                <b>Crypto MatriX Game</b> - игра основаная на СМАРТ-КОНТРАКТЕ ,
                которая позволяет получить ПАСИВНЫЙ ДОХОД в BNB без приглашения
                личных партнёров
                <br />
                ВСЕ СРЕДСТВА ВЛОЖЕННЫЕ В СТОЛЫ МГНОВЕНО РАСПРЕДЕЛЯЮТЬСЯ НА ПРЯМЫЕ
                КОШЕЛЬКИ ДРУГИХ УЧАСТНИКОВ.
            </p>
            <p>
                Каждый уровень представляет отдельную матричную систему хаотичного
                распределения финансов.
            </p>
            <p>
                <b>ПРОЕКТ использует только BNB.</b>
            </p>
            <p>
                <b>ВСЕ НОВЫЕ ИГРОКИ</b> случайным образом размещаются в единой
                большой структуре на каждом уровне, предоставляя всем равные шансы
                заработать награды без необходимости приглашать личных партнеров.
                Каждый уровень может генерировать 2 типа наград
            </p>
            <p>
                <b>НАГРАДА ЗА БАЗОВЫЙ УРОВЕНЬ</b> — 74% от значения уровня с каждого
                цикла.
                <br />
                <b>РЕФЕРАЛЬНЫЙ БОНУС</b> — 26% от партнеров до 3-го поколения всякий
                раз, когда они получают базовое вознаграждение на уровне.
            </p>
            <p>
                <b>НАГРАДЫ в BNB , когда игроки активируют уровни.</b>
                <br />
                100% СУММА АКТИВАЦИИ УРОВНЯ РАЗДЕЛЯЕТСЯ НА 4 ЧАСТИ: 74%, 13%, 8%, 5%
                и сразу одной транзакцией распределяется на кошельки участников
                согласно правилам игры.
                <br />
                (Базовое вознаграждение) 74% достается случайному вышестоящему
                участнику в уровневой структуре
            </p>
            <p>
                <b>DISCLAIMER</b>
                <br />
                Вы берете на себя всю ответственность за свои действия.
                Взаимодействуя со смарт-контрактом, вы соглашаетесь с правилами игры
                и понимаете, что все транзакции в блокчейне безотзывны. Таких как
                децентрализация, прозрачность каждой транзакции, отсутствие
                комиссий, никакого накопления средств.
            </p>
            </PageInfoItem>
            <PageInfoItem id="i2">
            <h2>Новым игрокам</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
                assumenda nobis repellendus, impedit autem rem illo doloremque
                distinctio cupiditate expedita. Quaerat maxime deleniti tempora
                perspiciatis quod officia nemo similique est.
            </p>
            </PageInfoItem>
            <PageInfoItem id="i3">
            <h2>Награды</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
                assumenda nobis repellendus, impedit autem rem illo doloremque
                distinctio cupiditate expedita. Quaerat maxime deleniti tempora
                perspiciatis quod officia nemo similique est.
            </p>
            <p>
                Далеко-далеко за словесными горами в стране, гласных, и согласных
                живут рыбные тексты. Большого имеет, сих рукопись напоивший
                продолжил вопроса переписали, дороге снова бросил раз домах
                семантика текста встретил страна своего безорфографичный до?
            </p>
            </PageInfoItem>
        </div>
        <div className="page_info_nav">
            <div className="nav">
            <li><a href='#i1'>Crypto Matrix Game</a></li>
            <li><a href='#i2'>Новым игрокам</a></li>
            <li><a href='#i3'>Награды</a></li>
            </div>
        </div>
        </div>
      </Layout>
  )
}

export default InfoPage
