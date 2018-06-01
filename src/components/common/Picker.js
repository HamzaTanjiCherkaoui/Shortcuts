import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Picker extends Component {
    
    render() {
        const {  onChange, options } = this.props
        return (
                <select onChange={e => onChange(e.target.value)} >
                    {options.map(option => (
                        <option value={option} key={option}>
                            {option}
                        </option>
                    ))}
                </select>
        )
    }
}

Picker.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onChange: PropTypes.func.isRequired
}