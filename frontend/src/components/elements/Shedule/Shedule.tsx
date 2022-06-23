import React from 'react'
import Dropdown from '../Dropdown';
import Table from '../Table';
import './Shedule.scss';
const Shedule: React.FC = () => {
  return (
    <Dropdown text="Сrypto Matrix Game levels start schedule">
        <div className='home_table'>
          <Table
            headingOptions={[
              {},
              { style: { borderLeft: '1px solid #212121' } },
              { style: { borderLeft: '1px solid #212121' } },
              { style: { borderLeft: '1px solid #212121' } },
            ]}
            heading={['Start date', 'Level', 'Value', 'Time left']}
            tableRows={[
              [
                '29.04.2022 22:00',
                '24',
                '40 BNB',
                <span style={{ color: 'var(--mint)' }}>Available</span>,
              ],
              [
                '29.04.2022 22:00',
                '24',
                '40 BNB',
                <span style={{ color: 'var(--mint)' }}>Available</span>,
              ],
              [
                '29.04.2022 22:00',
                '24',
                '40 BNB',
                <span style={{ color: 'var(--mint)' }}>Available</span>,
              ],
              [
                '29.04.2022 22:00',
                '24',
                '40 BNB',
                <span style={{ color: 'var(--mint)' }}>Available</span>,
              ],

              [
                '29.04.2022 22:00',
                '24',
                '40 BNB',
                <span style={{ color: 'var(--mint)' }}>Available</span>,
              ],
              [
                '29.04.2022 22:00',
                '24',
                '40 BNB',
                <span style={{ color: 'var(--mint)' }}>Available</span>,
              ],
              [
                '29.04.2022 22:00',
                '24',
                '40 BNB',
                <span style={{ color: 'var(--mint)' }}>Available</span>,
              ],
              [
                '29.04.2022 22:00',
                '24',
                '40 BNB',
                <span style={{ color: 'var(--mint)' }}>Available</span>,
              ]
            ]}
          />
        </div>
      </Dropdown>
  )
}

export default Shedule;