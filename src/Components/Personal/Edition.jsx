import React, { Component } from 'react'
import EdiText from 'react-editext'

export default class App extends Component {
  onSave = val => {
    console.log('Edited Value -> ', val)
  }

  render () {
    return (
      <EdiText className='text'
        viewContainerClassName='my-custom-view-wrapper'
        type='textarea'
        inputProps={{
          rows: 5
        }}
        saveButtonContent='A'
        cancelButtonContent={<strong>C</strong>}
        editButtonContent='Edit'
        value="Han leder dig med tydlighet och struktur och är alltid positiv och motiverande"
        onSave={this.onSave}
      />
    )
  }
}