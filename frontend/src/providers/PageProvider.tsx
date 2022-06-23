import React, { useState } from 'react'
import { pageContext as PageContext } from '../contexts/pageContext';
import Pages from '../routes/pages';

const PageProvider: React.FC<{children: JSX.Element | JSX.Element[]}> = ({children}) => {
    const [page, setPage] = useState(Pages.INDEX);
  return (
    <PageContext.Provider value={{page, setPage}}>
        {children}
    </PageContext.Provider>
  )
}

export default PageProvider;