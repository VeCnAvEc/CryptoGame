import { useContext } from "react";
import { IPageContext, pageContext } from "../contexts/pageContext";

export default function usePage(): IPageContext {
    const pageControls = useContext(pageContext);
    return pageControls as IPageContext;
}