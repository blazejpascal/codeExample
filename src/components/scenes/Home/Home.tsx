import React, {Component} from 'react'
import axios from 'axios'
import {DonationsList} from './components/DonationsList/DonationsList'
import toastr from 'toastr'
import './Home.scss'

export interface Donation {
    amount: string
    currencyCode: string,
    donationDate: string,
    donorDisplayName: string,
    imageUrl: string,
    message: string
}

interface HomeState {
    fetching: boolean,
    donations: Donation[],
    errors: string
}

export default class Home extends Component<{}, HomeState> {
    state = {
        fetching: false,
        donations: [],
        errors: ''
    }

    async componentDidMount() {
        await this.fetchDonations('https://api.justgiving.com/66651531/v1/charity/183560/donation')
    }

    fetchDonations = async (url: string) => {
        this.setState({
            fetching: true
        })
        try {
            const response = await axios.get(url, {});
            this.setState({
                fetching: !this.state.fetching,
                donations: response.data.donations
            })

        } catch (error) {
            this.setState({errors: error})
            toastr.error(`${error}`);
            
        }
    }

    render() {
        return (
            <div className="home">
                <DonationsList donations={this.state.donations}/>
            </div>
        )
    }
}
