
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum ETimeSeriesFunction {
    TIME_SERIES_INTRADAY = "TIME_SERIES_INTRADAY",
    TIME_SERIES_DAILY = "TIME_SERIES_DAILY",
    TIME_SERIES_DAILY_ADJUSTED = "TIME_SERIES_DAILY_ADJUSTED",
    TIME_SERIES_WEEKLY = "TIME_SERIES_WEEKLY"
}

export enum ETimeSeriesInterval {
    ONE_MIN = "ONE_MIN",
    FIVE_MIN = "FIVE_MIN",
    FIFTEEN_MIN = "FIFTEEN_MIN",
    THIRTY_MIN = "THIRTY_MIN",
    SIXTY_MIN = "SIXTY_MIN"
}

export enum EOutputsize {
    compact = "compact",
    full = "full"
}

export enum EDatatype {
    json = "json",
    csv = "csv"
}

export interface PaginationRequest {
    page?: Nullable<number>;
    limit?: Nullable<number>;
}

export interface QueryStringInput {
    select?: Nullable<Nullable<string>[]>;
    where?: Nullable<string>;
    orderBy?: Nullable<Nullable<string>[]>;
    limit?: Nullable<number>;
    before?: Nullable<string>;
    after?: Nullable<string>;
}

export interface LoginInput {
    email: EmailAddress;
    password: string;
}

export interface TimeSeriesInput {
    function: ETimeSeriesFunction;
    symbol: string;
    interval: ETimeSeriesInterval;
    adjusted?: Nullable<boolean>;
    extended_hours?: Nullable<boolean>;
    month?: Nullable<string>;
    outputsize?: Nullable<EOutputsize>;
    datatype?: Nullable<EDatatype>;
}

export interface IMutation {
    login(data: LoginInput): LoginOutput | Promise<LoginOutput>;
}

export interface IQuery {
    getTimeSeriesData(query: TimeSeriesInput): Nullable<TimeSeriesOutput> | Promise<Nullable<TimeSeriesOutput>>;
}

export interface ErrorPayload {
    field?: Nullable<string>;
    message?: Nullable<Nullable<string>[]>;
}

export interface PaginationOutput {
    page?: Nullable<number>;
    limit?: Nullable<number>;
    totalPage?: Nullable<number>;
    total?: Nullable<number>;
}

export interface LoginOutput {
    jwt: string;
}

export interface TimeSeriesOutput {
    meta: MetaOutput;
    data: StockPriceOutput[];
    pagination?: Nullable<PaginationOutput>;
}

export interface MetaOutput {
    information: string;
    symbol: string;
    lastRefreshed: string;
    interval: string;
    outputSize: string;
    timezone: string;
}

export interface StockPriceOutput {
    datetime: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
}

export type DateTime = any;
export type EmailAddress = any;
export type UnsignedInt = any;
export type JSONObject = any;
type Nullable<T> = T | null;
