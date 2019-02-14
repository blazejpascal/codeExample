import React from 'react'
import { shallow } from 'enzyme'

import { Donations } from './Donations'

describe('Donations', () => {
    it( 'should render given components', () => {
        //given 
        const donations = [
           { 
               amount:25,
                currencyCode: "GBP",
                donationDate: "/Date(1530907783000+0000)/",
                donorDisplayName: "P. Winfield",
                donorLocalAmount: 25,
                donorLocalCurrencyCode: "GBP",
                estimatedTaxReclaim: 6.25,
                imageUrl: "https://www.justgiving.com/content/images/graphics/icons/avatars/facebook-avatar.gif",
                message: "Our deepest condolences to all the family at this sad time.\nPsalms 34:18\nPam & Ray Winfield"
            }
        ]

        const wrapper = shallow(<Donations donations={donations} />)

        //then
        expect(wrapper.find('.donations').children()).toHaveLength(2)
    })
})