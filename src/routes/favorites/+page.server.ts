import type { Actions, PageServerLoad } from './$types';

import { firestore } from "$lib/firebase/firebase.admin";
import { Timestamp } from 'firebase-admin/firestore';
import type { Favorite } from '$lib/data-model';
import type { FavoriteFormData } from '$lib/view-model';

const FavoritesRef = firestore.collection("/favorites");
export const load: PageServerLoad = async () => {


    const snapshot = await FavoritesRef.get();

    const feed: Favorite[] = Array.from(snapshot.docs).map( doc => {
        const data: Favorite = doc.data() as Favorite;
        console.log(data);
        data.createdDate = (data.createdDate as Timestamp).toDate();
        data.lastUpdated = (data.lastUpdated as Timestamp).toDate();
        return data;
    });
    console.log(feed);

	return {
        feed,
	};
};



const isFavorite = (data: Partial<Favorite>): data is FavoriteFormData => {

    const hasBlurb: boolean = "blurb" in data && (data.blurb?.length ?? 0) > 0;
    const hasPath: boolean = "path" in data && (data.path?.length ?? 0) > 0;
    const hasType: boolean = "type" in data && data.type === "youtube";

    return hasBlurb && hasPath && hasType;
};

export const actions = {

    add: async ({ request, }) => {
        const formData = await request.formData();

        console.log(formData);
    
        const data: Partial<Favorite> = Object.fromEntries(formData.entries());

        if (isFavorite(data)) {

            const doc = FavoritesRef.doc();

            const favorite: Favorite = {
                ...data,
                ID: doc.id,
                createdDate: Timestamp.now(),
                lastUpdated: Timestamp.now(),
            };

            await doc.create(favorite);

            return {
                success: true,
            };
        }
        else {
            // todo: return the form data again or something
            return {
                success: false,
            }
        }
    },
} satisfies Actions;