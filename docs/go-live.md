# Go-live runbook

Moves `https://fresh-pets.co.uk/` from the old Gatsby site on Firebase Hosting to this Next.js app on Vercel, then shuts down Firebase.

**Do not start until the business owner has signed off the new site.** Until then the live domain, its DNS and the Firebase project `fresh-pets-production` stay exactly as they are.

Canonical origin: `https://fresh-pets.co.uk` (apex, no `www`), with trailing slashes on every page (`trailingSlash: true`).

## 1. Instagram setup

This can happen before launch. The token lasts 60 days and is refreshed by the daily cron, which only runs on the **production** deployment (`main` → `fresh-pets.vercel.app`). So either do this close to launch, or make sure `main` is deployed so the cron keeps the token alive.

1. In the Instagram app, check that **@freshpetsgrooming** is a **Business** or **Creator** account (Settings → Account type and tools).
2. At [developers.facebook.com](https://developers.facebook.com/apps), create an app with the use case **"Manage messaging & content on Instagram"**. This adds the **Instagram API with Instagram Login** product.
3. Under **App roles → Roles**, add @freshpetsgrooming as an **Instagram Tester**. Accept the invite in Instagram (Settings → Website permissions → Apps and websites → Tester invites).
4. Under **API setup with Instagram login → Generate access tokens**, add the account and generate a token. It is long-lived (60 days) with `instagram_business_basic`. Your own accounts don't need App Review.
5. In the Vercel project, add `INSTAGRAM_SEED_TOKEN` (Production and Development).
6. Run the first sync:
   ```sh
   curl -H "Authorization: Bearer $CRON_SECRET" https://fresh-pets.vercel.app/api/instagram/sync/
   ```
   The response shows `{ tokenRefreshed, items, added, removed }`. The refreshed token is now stored in Blob (`instagram/token.json`).
7. Remove `INSTAGRAM_SEED_TOKEN` from Vercel. It is only read when no stored token exists.

If the token ever lapses (for example, if the cron hasn't run for 60 days), generate a new one, set `INSTAGRAM_SEED_TOKEN` again, delete `instagram/token.json` from the Blob store (`vercel blob del instagram/token.json`), and re-run step 6.

## 2. Pre-flight

- [ ] Content from the owner is in place and signed off.
- [ ] The upgrade branch is merged and `fresh-pets.vercel.app` has been checked.
- [ ] The Blob store is connected to the project and `CRON_SECRET` is set.
- [ ] The gallery shows images, and **Settings → Cron Jobs** shows `/api/instagram/sync` returning 200.

## 3. Vercel environment (Production)

- [ ] `APP_URL=https://fresh-pets.co.uk` (no trailing slash).
- [ ] Check that all `APP_*` and `NEXT_PUBLIC_*` vars from `.env.local` exist with production values.
- [ ] Remove any leftover `FIREBASE_*` / `NEXT_PUBLIC_FIREBASE_*` vars.
- [ ] Redeploy production so the new `APP_URL` is baked into metadata, the sitemap and the JSON-LD.

## 4. Domains and DNS

- [ ] Vercel project → **Settings → Domains**:
  - add `fresh-pets.co.uk` as the production domain
  - add `www.fresh-pets.co.uk` as a 308 redirect to `fresh-pets.co.uk`
- [ ] **Deployment Protection**: production deployments currently require Vercel login (SSO). Make sure the custom domain is public. Standard protection leaves custom production domains public, but check it.
- [ ] At the domain registrar, replace the Firebase Hosting records (currently `151.101.x.x`) with the records Vercel shows. Wait for the certificate to issue.

## 5. Verify

- [ ] `https://fresh-pets.co.uk/` serves the Next app. View source: there is no `<meta name="generator" content="Gatsby …">`.
- [ ] `https://www.fresh-pets.co.uk/gallery/` → 308 → `https://fresh-pets.co.uk/gallery/`.
- [ ] `/team/` → 308 → `/about/`.
- [ ] The gallery loads images from `/instagram/<id>/`. Page source contains no `cdninstagram` or `fbcdn` URLs.
- [ ] `sitemap.xml` and `robots.txt` list `https://fresh-pets.co.uk/...` URLs.
- [ ] `/opengraph-image` renders, and the JSON-LD `@id` is `https://fresh-pets.co.uk/#organization`.
- [ ] Submit `https://fresh-pets.co.uk/sitemap.xml` in Google Search Console.
- [ ] A few weeks later, check that the gallery still loads and the cron is still returning 200.

## 6. Decommission Firebase and the old Instagram app

Wait a few days after launch. Each step below is irreversible.

- [ ] Delete the old Cloud Functions, whose logs contain the old Instagram token in plain text:
  ```sh
  firebase functions:delete getInstagramPosts refreshInstagramToken --project fresh-pets-production
  ```
- [ ] Disable Firebase Hosting (`firebase hosting:disable --project fresh-pets-production`) and delete the Firestore `tokens` collection.
- [ ] Optionally delete the whole `fresh-pets-production` project in the Firebase console.
- [ ] Delete the old **Instagram Basic Display** Meta app (id `329910591499403`). Its app secret is stored in plain text in the old Gatsby source (`src/data/instagram.http`).
- [ ] Revoke the Firebase service-account key in Google Cloud IAM and delete the local copy (`fresh-pets-production-firebase-adminsdk-*.json` in "Apps Resources/fresh-pets resources").
