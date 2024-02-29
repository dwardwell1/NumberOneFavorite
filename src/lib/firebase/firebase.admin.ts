//Import Firebase Admin Service Account with $env functionality in Svelte
// import { GOOGLE_APPLICATION_CREDENTIALS } from '$env/static/private'

import { getApps, initializeApp, type App, applicationDefault } from "firebase-admin/app";
import { getFirestore, } from "firebase-admin/firestore";

export const adminSDK = createAdminSDK();

export const firestore = getFirestore();

function createAdminSDK(): App {

    const apps = getApps();

    if (apps.length > 0) {
        return apps.at(0)!;
    }

    const app = initializeApp({
        credential: applicationDefault(),
    });
    
    return app;
}
