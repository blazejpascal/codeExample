import React from 'react'

import './Donation.scss'

interface IDonation {
    amount: string
    currencyCode: string,
    donationDate: any 
    donorDisplayName: string,
    imageUrl: string,
    message: string
}

export function Donation(props: IDonation) {
    const {
        amount,
        currencyCode,
        donationDate, 
        donorDisplayName,
        imageUrl,
        message
    } = props

    return (
        <div className="donation" >
            <div className="donation__amount donation__amount--with-padding">
            {amount}{currencyCode} {donationDate}
            </div>
            <div className="donation__donor-details donation__donor-details--with-padding">
                <img src={imageUrl} alt="donor" />
                <div>{donorDisplayName}</div>
            </div>
            <div className="donor__message donor__message--with-padding">
                {message}
            </div>
        </div>
    )
}
