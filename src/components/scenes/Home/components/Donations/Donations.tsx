import React from 'react'
import { Donation } from 'Shared/Donation/Donation'

import './Donations.scss'

interface IDonations {
    donations: Array<any>
}

export function Donations(props: IDonations) {
  const { donations } = props
  return (
    <>
        <h1>Last donations:</h1>  
        <div className="donations"> 
        {
            donations.map(donation =>
                <Donation key={donation.donationDate}
                    {...donation}
                />
            )
        }
        </div>
    </>
  )
}
