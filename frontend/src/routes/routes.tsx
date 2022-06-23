import Pages from "./pages";
export interface INavOptions {
    path: Pages,
    text: JSX.Element | string,
    iconClassname?: string
}
export interface IPageOptions {
    breadcrumbsTitle: string;
    mainTitle: string;
}
export interface IPage {
    navOptions: INavOptions
    pageOptions: IPageOptions
}

export const pages: IPage[] = [
    {
        navOptions: {
            path: Pages.GAME,
            text: (<>Панель <br/>финансов</>),
            iconClassname: 'icon-coin'
        },
        pageOptions: {
            breadcrumbsTitle: 'СryptoMatrixGame',
            mainTitle: 'СryptoMatrixGame'
        }
    },
    {
        navOptions: {
            path: Pages.PARTNER,
            text: (<>Партнерский <br />бонус</>),
            iconClassname: 'icon-coins'
        },
        pageOptions: {
            breadcrumbsTitle: 'Партнерский бонус',
            mainTitle: 'Партнерский бонус'
        }
    },
    {
        navOptions: {
            path: Pages.INFO,
            text: (<>Информация</>),
            iconClassname: 'icon-info'
        },
        pageOptions: {
            breadcrumbsTitle: 'Информация',
            mainTitle: 'Информация'
        }
    },
    {
        navOptions: {
            path: Pages.BOTS,
            text: (<>Telegram- <br/>боты</>),
            iconClassname: 'icon-tg'
        },
        pageOptions: {
            breadcrumbsTitle: 'Телеграм боты',
            mainTitle: 'Телеграм боты'
        }
    }
];