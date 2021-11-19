/**
 * Created by Tuyen Tran on 11/02/2021.
 */

// NOTE: Copied from fontawesome-common-types
// if imported from fontawesome-common-types
// then consumer/peer dependencies must import fontawesome-common-types
// which is unnecessary for consumer/peer only uses WebFont (Not SVG)


export type IconPathData = string | string[];

export interface IconLookup {
    prefix: string;
    // IconName is defined in the code that will be generated at build time and bundled with this file.
    iconName: string;
}

export interface IconDefinition extends IconLookup {
    // Tuple without property names
    icon: [
        number, // width
        number, // height
        string[], // ligatures
        string, // unicode
        IconPathData // svgPathData
    ];
}

export interface IconPack {
    [key: string]: IconDefinition;
}

// ngx-fontawesome type definitions

export interface IconBundles {
    [key: string]: IconPack;
}

export interface SvgSymbol {
    id: string;
    name: string;
    prefix: string;
    width: number;
    height: number;
    cssClass: string;
    path: IconPathData;
}

export interface NgxFAOptions {
    prefix?: string[];
    svgSupport?: boolean;
}

export const DEFAULT_NGX_FA_OPTIONS: NgxFAOptions = {
    prefix: [],
    svgSupport: false
};
