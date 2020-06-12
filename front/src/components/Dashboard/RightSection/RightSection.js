import React from 'react'
import classes from './RightSection.module.css'
import Chart from '../../Chart'
const rightSection = (props) => {
    return (<div className={classes.rightSection}>
        <h3>Data Usage</h3>
            <Chart />
    </div>)
}

export default rightSection