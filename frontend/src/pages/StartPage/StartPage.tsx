import React from 'react'
import CopyElement from '../../components/atoms/CopyElement'
import IDtag from '../../components/atoms/IDtag'
import Layout from '../../components/elements/Layout'
import Table from '../../components/elements/Table'
import { IColumnProps } from '../../components/elements/Table/Table'
import './StartPage.scss';
const options: IColumnProps[] = [
  {},
  {},
  { align: 'center' },
  { align: 'center' },
  { align: 'center' },
  { align: 'right' },
]
const StartPage: React.FC = () => {
  return (
    <Layout page="Start">
      <div className="page_table_wrapper">
        <div className="table_scroll">
          <Table
            sticky
            headingOptions={options}
            tableRowsOptions={options}
            className='table'
            heading={[
              'Date',
              'Wallet',
              'ID',
              'Partner bonus $',
              'Express levels',
              'Total bouns received',
            ]}
            tableRows={[
              [
                <span className="_silver">09.04.2022 24:02</span>,
                <CopyElement
                  content="0x4c9...d2B"
                  copyText="0x4c9...d2B"
                  link="/"
                />,
                <IDtag>ID 311628</IDtag>,
                '8',
                '1',
                '0.004 BNB',
              ],
              [
                <span className="_silver">09.04.2022 24:02</span>,
                <CopyElement
                  content="0x4c9...d2B"
                  copyText="0x4c9...d2B"
                  link="/"
                />,
                <IDtag>ID 311628</IDtag>,
                '8',
                '1',
                '0.004 BNB',
              ],
              [
                <span className="_silver">09.04.2022 24:02</span>,
                <CopyElement
                  content="0x4c9...d2B"
                  copyText="0x4c9...d2B"
                  link="/"
                />,
                <IDtag>ID 311628</IDtag>,
                '8',
                '1',
                '0.004 BNB',
              ],
              [
                <span className="_silver">09.04.2022 24:02</span>,
                <CopyElement
                  content="0x4c9...d2B"
                  copyText="0x4c9...d2B"
                  link="/"
                />,
                <IDtag>ID 311628</IDtag>,
                '8',
                '1',
                '0.004 BNB',
              ],
              [
                <span className="_silver">09.04.2022 24:02</span>,
                <CopyElement
                  content="0x4c9...d2B"
                  copyText="0x4c9...d2B"
                  link="/"
                />,
                <IDtag>ID 311628</IDtag>,
                '8',
                '1',
                '0.004 BNB',
              ],
              [
                <span className="_silver">09.04.2022 24:02</span>,
                <CopyElement
                  content="0x4c9...d2B"
                  copyText="0x4c9...d2B"
                  link="/"
                />,
                <IDtag>ID 311628</IDtag>,
                '8',
                '1',
                '0.004 BNB',
              ],
              [
                <span className="_silver">09.04.2022 24:02</span>,
                <CopyElement
                  content="0x4c9...d2B"
                  copyText="0x4c9...d2B"
                  link="/"
                />,
                <IDtag>ID 311628</IDtag>,
                '8',
                '1',
                '0.004 BNB',
              ],
              [
                <span className="_silver">09.04.2022 24:02</span>,
                <CopyElement
                  content="0x4c9...d2B"
                  copyText="0x4c9...d2B"
                  link="/"
                />,
                <IDtag>ID 311628</IDtag>,
                '8',
                '1',
                '0.004 BNB',
              ],
              [
                <span className="_silver">09.04.2022 24:02</span>,
                <CopyElement
                  content="0x4c9...d2B"
                  copyText="0x4c9...d2B"
                  link="/"
                />,
                <IDtag>ID 311628</IDtag>,
                '8',
                '1',
                '0.004 BNB',
              ],
            ]}
          />
        </div>
      </div>
    </Layout>
  )
}
export default StartPage
