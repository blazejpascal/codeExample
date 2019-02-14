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

    const convertedDate = () => {
        const dateString: any = parseInt(donationDate.substring(6,18),10)
        const date = new Date(dateString)
        return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`  
    }
   const dateToDisplay = convertedDate()

    return (
        <div className="donation" >
            <div className="donation__donor-details donation__donor-details--with-padding">
                <img src={imageUrl} alt="donor" />
                <div className="donation__donor-name">{donorDisplayName}</div>
                <div className="donation__date donation__date--with-padding">
                   Date of donation: {dateToDisplay}
                </div>
            </div>
            <div className="donation__amount donation__amount--with-padding">
                Amount of donation: {amount} {currencyCode} 
            </div>
            <div className="donation__message donation__message--with-padding">
                {message}
            </div>
        </div>
    )
}
