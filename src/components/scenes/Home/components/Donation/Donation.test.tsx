import React from 'react'
import { shallow } from 'enzyme'
import {DonationEntry} from './DonationEntry'

const props =  {
        amount: 25,
        currencyCode: "GBP",
        donationDate: "/Date(1530907783000+0000)/",
        donorDisplayName: "P. Winfield",
        imageUrl: "https://www.justgiving.com/content/images/graphics/icons/avatars/facebook-avatar.gif",
        message: "Our deepest condolences to all the family at this sad time.\nPsalms 34:18\nPam & Ray Winfield"
        }


describe('DonationEntry',() => {
    it('should render DonationEntry component', () => {
      //given
      const wrapper = shallow( <DonationEntry {...props} />)
      
      //then
      expect(wrapper.find('.donation-entry').exists()).toBe(true)
    })

    it('should render donor details', () => {
        //given
        const wrapper = shallow( <DonationEntry {...props} />)
        
        //then
        expect(wrapper.find('.donation-entry__donor-details').children()).toHaveLength(3)
      })

      it('should render donor details', () => {
        //given
        const wrapper = shallow( <DonationEntry {...props} />)
        
        //then
        expect(wrapper.find('.donation-entry__donor-details').children()).toHaveLength(3)
      })

      it('should render amount', () => {
        //given
        const wrapper = shallow( <DonationEntry {...props} />)
        
        //then
        expect(wrapper.children().find('.donation-entry__amount').prop("children")).toEqual(["Amount of donation: ", 25, " ", "GBP"])
      })

      it('should render message', () => {
        //given
        const wrapper = shallow( <DonationEntry {...props} />)
        
        //then
        expect(wrapper.children().find('.donation-entry__message').prop("children")).toEqual("Our deepest condolences to all the family at this sad time.\nPsalms 34:18\nPam & Ray Winfield")
      })
})