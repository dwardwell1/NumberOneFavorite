import type { Actions } from './$types';

import { firestore } from "$lib/firebase/firebase.admin";
import { Timestamp } from 'firebase-admin/firestore';
import type { Favorite } from '$lib/data-model';
import type { FavoriteFormData } from '$lib/view-model';


const FavoritesRef = firestore.collection("/favorites");

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