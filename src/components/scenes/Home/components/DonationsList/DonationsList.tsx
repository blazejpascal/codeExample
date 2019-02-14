import React from 'react'
import {DonationEntry} from '../Donation/Donation'

import './DonationsList.scss'

interface DonationsList {
    donations: Array<any>
}

export function DonationsList(props: DonationsList) {
    const {donations} = props;
    return (
        <>
        <h1>Last donations:</h1>
        <div className="donations">
            {
                donations.map(donation =>
                    <DonationEntry key={donation.donationDate}
                                   {...donation}
                    />
                )
            }
        </div>
        </>
    )
}
