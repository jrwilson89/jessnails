// set-claims.js
import admin from "firebase-admin";

// Initialize Admin SDK with your service account
admin.initializeApp({
  credential: admin.credential.cert("./serviceAccountKey.json")
});

// Function to set custom claims
async function setCustomUserClaims(uid, claims) {
  try {
    await admin.auth().setCustomUserClaims(uid, claims);
    console.log(`Custom claims set for ${uid}:`, claims);
  } catch (error) {
    console.error("Error setting custom claims:", error);
  }
}

// Example usage:
// Give this user staff permissions
setCustomUserClaims("4Jl4cHvtl1VGxb15fBoAaMWzkHG2", { staff: true, admin: true });

// Or admin permissions
// setCustomUserClaims("USER_UID_HERE", { admin: true });

// Or both
// setCustomUserClaims("USER_UID_HERE", { staff: true, admin: true });
