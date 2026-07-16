# Contact form → Google Sheet (newest on top)

Store every consultation-form submission in a Google Sheet, with the newest
entry always at the top. No third-party service, no API keys — it uses your own
Google account via Apps Script.

Total time: about 5 minutes, one time.

---

## Step 1 — Create the sheet

1. Go to https://sheets.google.com and create a **blank spreadsheet**.
2. Name it e.g. **Simmi Immigration — Leads**.
3. Rename the bottom tab from `Sheet1` to **`Leads`** (double-click the tab name).
4. In **row 1**, type these headers, one per cell (A1 to G1):

   | A | B | C | D | E | F | G |
   |---|---|---|---|---|---|---|
   | Date | Name | Email | Phone | Service | Message | Page |

---

## Step 2 — Add the script

1. In the sheet menu, click **Extensions ▸ Apps Script**.
2. Delete whatever code is in the editor.
3. Open the file **`google-apps-script.gs`** from this project, copy everything,
   and paste it into the Apps Script editor.
4. Click the **Save** icon (💾).

---

## Step 3 — Deploy as a Web App

1. Click **Deploy ▸ New deployment**.
2. Click the gear icon next to "Select type" → choose **Web app**.
3. Set:
   - **Description:** `Contact form`
   - **Execute as:** **Me** (your account)
   - **Who has access:** **Anyone**  ← important, so the website can post to it
4. Click **Deploy**.
5. Google will ask you to **authorize** — click through, choose your account,
   and on the "Google hasn't verified this app" screen click **Advanced ▸
   Go to (your project)** ▸ **Allow**. (This is normal for your own scripts.)
6. Copy the **Web app URL**. It looks like:
   `https://script.google.com/macros/s/AKfycb....../exec`

> Tip: paste that URL into a browser. You should see
> "Simmi Immigration form endpoint is running." — that confirms it's live.

---

## Step 4 — Connect it to the website

1. In the project root, copy `.env.local.example` to a new file named
   **`.env.local`**.
2. Paste your Web app URL after the `=`:

   ```
   NEXT_PUBLIC_SHEET_ENDPOINT=https://script.google.com/macros/s/AKfycb....../exec
   ```

3. Restart the dev server (`Ctrl+C`, then `npm run dev`) so it picks up the new
   variable.

That's it. Submit the form — a new row appears at the **top** of your sheet
(row 2), pushing older entries down.

---

## When you deploy the live site

Your host (Vercel, Netlify, etc.) needs the same variable. In your host's
dashboard, add an **Environment Variable**:

- **Key:** `NEXT_PUBLIC_SHEET_ENDPOINT`
- **Value:** your Web app URL

Then redeploy. The form will store submissions from the live site the same way.

---

## Optional: also email the office

The script can email `simmiimmigration@gmail.com` on every submission, in
addition to logging it. In `google-apps-script.gs`, remove the `//` comment
marks around the `MailApp.sendEmail({ ... })` block, save, then **Deploy ▸
Manage deployments ▸ Edit ▸ Deploy** again to update the live version.

---

## Notes

- **Spam:** the form includes a hidden "honeypot" field; bots that fill it are
  silently ignored and never reach the sheet.
- **Changing the script later:** after any edit, you must redeploy
  (**Deploy ▸ Manage deployments ▸ Edit ▸ Version: New ▸ Deploy**) for the change
  to go live. A fresh "New deployment" gives a *new* URL; "Manage deployments"
  keeps the same URL.
- **Privacy:** submissions go straight from the visitor's browser to your Google
  Sheet. Nothing passes through any third party.
- **Volume:** Apps Script free quotas are far higher than a contact form needs.
