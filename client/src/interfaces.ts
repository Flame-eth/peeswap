import { CSSProperties } from "styled-components";

export interface ILink {
    name:string;
    url: string;
}

export interface IConnectData{

    heading: string;
    description: string;
    color: string;
    badgeIcon: string;
    bgImage: string;
    className: string;
    backgroundClassNames?: string;
    bgInlineStyle?: CSSProperties;
}

export interface IDefiData{
    heading: string;
    description: string;
    color: string;
    badgeIcon: string;
    bgImage: string;
    backgroundClassNames?: string|any;
}
