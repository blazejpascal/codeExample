
import React, { Component } from 'react'
import axios from 'axios'

import Donations from './components/Donations/Donations'

interface IHomeState {
    fetching: boolean,
    donations: Array<string>,
    errors: string
}

interface IHomeProps {

}

export default class Home extends Component<IHomeProps, IHomeState> {
    state ={
        fetching: false,
        donations: [],
        errors: ''
    }

    componentDidMount() {
        this.fetchDonations()
    }

    fetchDonations = async () => {
        this.setState({
            fetching: !this.state.fetching
        })
        try {
           const response = await axios.get('https://api.justgiving.com/66651531/v1/charity/183560/donations', {})
                console.log(response.data)
                this.setState({
                    fetching: !this.state.fetching,
                    donations: response.data.donations
                })

        } catch (error) {
            this.setState({errors: error})
        }
    }   

  render() {
    return (
      <div>
        <Donations />
      </div>
    )
  }
}

