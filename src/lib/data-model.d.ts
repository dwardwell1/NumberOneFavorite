export type ID = unknown;

export type User = {
    ID: ID;
    favorites: ID[];
};

export type Favorite = {
    ID: ID;
    type: "youtube";
    path: string;
    blurb: string;
    createdDate: string;
    lastUpdated: string;
}