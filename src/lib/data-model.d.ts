import type { Timestamp } from 'firebase-admin/firestore';

export type ID = unknown;

export type User = {
    ID: ID;
    favorites: ID[];
};

export type Favorite = Record & {
    ID: ID;
    type: "youtube";
    path: string;
    blurb: string;
};

export type Record = {
    createdDate: Timestamp|Date;
    lastUpdated: Timestamp|Date;
}