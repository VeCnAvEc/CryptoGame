import React from "react";
import Pages from "../routes/pages";
export interface IPageContext {
    page: Pages;
    setPage: (page: Pages) => void;
}
export const pageContext = React.createContext<IPageContext | null>(null);