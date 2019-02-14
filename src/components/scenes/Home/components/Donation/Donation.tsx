import React from 'react'
import {Donation as DonationEntryProps} from '../../Home'

import './Donation.scss'

export function DonationEntry(props: DonationEntryProps) {
    const {
        amount,
        currencyCode,
        donationDate,
        donorDisplayName,
        imageUrl,
        message
    } = props;

    const convertedDate = () => {
        const dateToNumber: number = parseInt(donationDate.substring(6, 18));
        const date = new Date(dateToNumber);
        return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
    }
    const dateToDisplay = convertedDate();

    return (
        <div className="donation-entry">
            <div className="donation-entry__donor-details">
                <img src={imageUrl} alt="donor"/>
                <div className="donation-entry__donor-name">{donorDisplayName}</div>
                <div className="donation-entry__date">
                    Date of donation: {dateToDisplay}
                </div>
            </div>
            <div className="donation-entry__amount">
                Amount of donation: {amount} {currencyCode}
            </div>
            <div className="donation-entry__message">
                {message}
            </div>
        </div>
    )
}
