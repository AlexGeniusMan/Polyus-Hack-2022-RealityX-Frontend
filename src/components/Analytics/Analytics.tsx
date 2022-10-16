import React, {useEffect} from 'react'
import styles from './Analytics.module.scss'
import {useAnalytics} from './useAnalytics'
import ResizableBox from '../../utils/ResizableBox'
import {ComposedChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Scatter, Area, Bar} from 'recharts'
import {useDispatch} from 'react-redux'
import {TypedDispatch} from '../../redux/redux-store'
import {getLogs} from '../../redux/logs-reducer'

const Analytics = () => {
    const dispatch = useDispatch<TypedDispatch>()
    const { data, width, YBarWidth, YBarRef, YMaxValue} = useAnalytics()

    useEffect(() => {
        dispatch(getLogs())
    }, [])
    return (
        <>
            {/*Width of Y axis*/}
            <span className={styles['hidden']} ref={YBarRef}>{YMaxValue}</span>
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
                        <XAxis dataKey="name" />
                        <YAxis width={YBarWidth+10} />
                        <Tooltip />
                        {/*<Line type="monotone" name='color_distance' dataKey="color_distance" stroke="green" activeDot={{ r: 8 }} />*/}
                        <Bar type="monotone" name='Data 1' dataKey="uv" fill={'red'} fillOpacity={0.2} stroke="red" />
                        {/*<Line type="monotone" dataKey="uv" stroke="#82ca9d" />*/}
                        <Scatter name="Data 2" dataKey="pv" fill='green' />
                    </ComposedChart>
                </ResponsiveContainer>
            </ResizableBox>
        </>
    )
}

export default Analytics
