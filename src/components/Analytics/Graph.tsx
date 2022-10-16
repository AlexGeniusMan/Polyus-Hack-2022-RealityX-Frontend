import React, {FC} from 'react'
import {useAnalytics} from './useAnalytics'
import ResizableBox from '../../utils/ResizableBox'
import styles from './Analytics.module.scss'

import {Bar, CartesianGrid, ComposedChart, ResponsiveContainer, Scatter, Text, Tooltip, XAxis, YAxis} from 'recharts'
import NoData from '../NoData/NoData'

const Graph:FC<any> = ({values, xAxes, yAxes, name, title}) => {
    const { data, width, YBarWidth, YBarRef, YMaxValue} = useAnalytics(values)

    return (
        <div>
            {/*Width of Y axis*/}
            {values && values.length > 0 ?
            <>
                <span className={styles['hidden']} ref={YBarRef}>{YMaxValue}</span>
                <div className={styles['title']}>
                    {title}
                </div>
                <ResizableBox resizable={false} height={350} width={width}>
                    <ResponsiveContainer>
                        <ComposedChart
                            width={width}
                            height={180}
                            barSize={20}
                            data={data}
                            style={{fontSize: 14, background: 'transparent'}}
                            margin={{
                                top: 10,
                                right: 10,
                                bottom: -9,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey={xAxes} />
                            <YAxis width={YBarWidth+10} />
                            <Tooltip />
                            {/*<Line type="monotone" name='color_distance' dataKey="color_distance" stroke="green" activeDot={{ r: 8 }} />*/}
                            <Bar type="monotone" name={name} dataKey={yAxes} fill={'blue'} fillOpacity={0.2} stroke="blue" />
                            {/*<Line type="monotone" dataKey="uv" stroke="#82ca9d" />*/}
                        </ComposedChart>
                    </ResponsiveContainer>
                </ResizableBox>
            </>
                : <NoData />
            }

        </div>
    )
}

export default Graph
