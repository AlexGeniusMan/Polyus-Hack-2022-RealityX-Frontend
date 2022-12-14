import React from 'react'
import {CSSProperties} from 'react'

export interface DefaultParams{
    style?: CSSProperties;
    className?: string | string[];
}

export interface ClickableObjectMini {
    /** On click event */
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;

    /** On mouse enter event */
    onMouseEnter?: (event: React.MouseEvent<HTMLElement>) => void;

    /** On mouse leave event */
    onMouseLeave?: (event: React.MouseEvent<HTMLElement>) => void;

    /** On focus event */
    onFocus?: (event: React.MouseEvent<HTMLElement>) => void;

    /** On blur event */
    onBlur?: (event: React.MouseEvent<HTMLElement>) => void;
}

export type TableClassesColumnsType = {
    title: string,
    key: string,
    dataIndex: string,
    render?: (value: any, row: any, index: number) => void
}
export type TableClassesDataType = {
    class: number
    min: number | string
    max: number | string
    result: string
    key: string
}
export type TableLogsDataType = {
    time: string
    min: number
    max: number
    count: number
    delta_max: string
    delta_min: string
    key: number | string
}
export type TableClassesValueType = {
    min: string
    max: string
}
export type LogsDataType = {
    timestamp: string,
    min_oversize: number,
    max_oversize: number,
    amount: number,
    fullness: number,
}

export type AnalyzeFullnessDataType = {
    value: string,
    timestamp: string,
}
