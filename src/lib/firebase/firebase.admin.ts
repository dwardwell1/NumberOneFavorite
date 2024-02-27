//Import Firebase Admin Service Account with $env functionality in Svelte
import {FIREBASE_ADMIN_KEY} from '$env/static/private'
//Import firebase admin SDK
// import admin, { auth } from "firebase-admin"
import * as fs from "fs";
import * as path from "path";

import { getApps, initializeApp, type App, cert } from "firebase-admin/app";
import { getFirestore, } from "firebase-admin/firestore";

export const adminSDK = createAdminSDK();

function createAdminSDK(): App {

    const apps = getApps();

    if (apps.length > 0) {
        return apps.at(0)!;
    }

    if (FIREBASE_ADMIN_KEY.length > 0) {

        const filePath: string = path.join(".../../", FIREBASE_ADMIN_KEY);

        try {
            const file = fs.readFileSync(filePath);

            const certData = JSON.parse(file.toString());
    
            return initializeApp({
                credential: cert(certData)
            });
        }
        catch (ex) {
            console.warn(ex);
            throw new Error(`Unable to read firebase service account file from ${filePath}`);
        }
    }
    else {
        // environments that don't have the key will 
        // use the inherent credentials of the platform
        return initializeApp();
    }
}

export const firestore = getFirestore();


// let firebaseAdmin: admin.app.App;
// let firebaseAdminAuth: admin.auth.Auth;

// /**
// * create firebase admin singleton
// */
// function getFirebaseAdmin(): admin.app.App {
//     if(!firebaseAdmin){
//         if(admin.apps.length == 0){
//             if (FIREBASE_ADMIN_KEY.length > 0) {
//                 firebaseAdmin = admin.initializeApp({
//                     credential: admin.credential.cert(JSON.parse(FIREBASE_ADMIN_KEY))
//                 });
//             }
//             else {
//                 // environments that don't have the key will 
//                 // use the inherent credentials of the platform
//                 firebaseAdmin = admin.initializeApp();
//             }
//         }
//         else{
//             firebaseAdmin = admin.apps[0]!;
//         }
           
//     }

//     return firebaseAdmin;
// }
// /**
// * create firebase admin auth singleton
// */
// function getFirebaseAdminAuth():admin.auth.Auth{
//     const currentAdmin:admin.app.App = getFirebaseAdmin();
//     if(!firebaseAdminAuth){
//         firebaseAdminAuth = currentAdmin.auth()
//     }
//     return firebaseAdminAuth;
// }