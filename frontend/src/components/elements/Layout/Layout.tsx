import React from 'react'
import Breadcrumbs from '../../atoms/Breadcrumbs'
import PageTitle from '../../atoms/PageTitle'
import FloatingMenu from '../FloatingMenu'
import Footer from '../Footer'
import PageBar from '../PageBar'
import './Layout.scss'

const Layout: React.FC<{ page: string; children: JSX.Element }> = function ({
  page,
  children,
}) {
  return (
    <div className="page">
      <div className="bone">
        <div className="page_net grid">
          <div className="desktop_bar">
            <div className="page_bar">
              <PageBar />
            </div>
          </div>
          <div className="page_content">
            <Breadcrumbs />
            <div className="page_top flex__center">
              <PageTitle />
            </div>
            {children}
            <Footer />
          </div>
          <FloatingMenu />
        </div>
      </div>
    </div>
  )
}

export default Layout
