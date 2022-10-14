import {createRef, useCallback, useEffect, useState} from 'react'

export const useAnalytics = () => {
    const [data, setData] = useState<any>( [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ])
    const YBarRef = createRef<HTMLSpanElement>()

    const calculateWidth = useCallback(() => {
        return window.innerWidth / 2 - 9 - 24*2 - 35 - 2
    }, [window.innerWidth])

    const [state, setState] = useState({
        data: data,
        width: calculateWidth(),
        YBarWidth: 0,
        YMaxValue: 0,
    });

    useEffect(() => {
        window.addEventListener('resize', () => {
            setState((old) => ({
                ...old,
                width: calculateWidth()
            }))
        })

        return () => {
            window.removeEventListener('resize', () => {
                setState((old) => ({
                    ...old,
                    width: calculateWidth()
                }))
            })
        }
    }, []);

    useEffect(() => {
        setState((old) => ({
            ...old,
            data: data,
            width: calculateWidth(),
            YBarWidth: 0,
            YMaxValue: 60,
        }));
    }, [data]);

    useEffect(() => {
        setState((old) => ({
            ...old,
            YBarWidth: YBarRef.current?.scrollWidth || 60,
        }));
    }, [data, YBarRef.current, state.YMaxValue])

    useEffect(() => {
        let max = 60
        data.forEach((item: any, index: number) => {
            Object.values(item).forEach((value: any, index) => {
                if(value > max && typeof value === 'number') max=value
            })
        })
        setState((old) => ({
            ...old,
            YMaxValue: max * 10,
        }));
    }, [data])

    return {...state, YBarRef}
}
