# Confessions Web Platform

A cinematic, anonymous confession platform built with Next.js 14, Tailwind CSS, and Google Sheets.

## Features

- **Anonymous Submissions:** Secure form to submit confessions directly to Google Sheets.
- **Cinematic Design:** Dark mode, immersive typography, and smooth animations.
- **Video Showcase:** Grid layout for YouTube Shorts embeds.
- **Responsive:** Optimized for mobile and desktop.

## Media Assets & Content

This repository also contains the media assets and workflow configurations for the "Confessions" content channel.

### Current Assets
- **Audio**: AI-generated voiceovers (ElevenLabs).
- **Video**: Confession video clips and master edits.
- **Images**: Thumbnails and cover art.
- **Subtitles**: Exported subtitle files for video content.

### Workflow
The general workflow involves:
1. Generating voiceovers via ElevenLabs.
2. Composing video clips with overlaying audio and subtitles.
3. Preparing assets for publication.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Forms:** React Hook Form
- **Database:** Google Sheets (via `google-spreadsheet`)

## Setup

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Environment Variables:**
    Create a `.env.local` file with the following credentials (from your Google Service Account):
    ```env
    GOOGLE_SHEETS_SPREADSHEET_ID=your_sheet_id
    GOOGLE_SHEETS_CLIENT_EMAIL=your_service_account_email
    GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n..."
    ```

3.  **Run Development Server:**
    ```bash
    npm run dev
    ```

## Deployment (Vercel)

1.  **Push to GitHub/GitLab/Bitbucket.**
2.  **Import Project in Vercel.**
3.  **Configure Environment Variables:**
    - Add `GOOGLE_SHEETS_SPREADSHEET_ID`
    - Add `GOOGLE_SHEETS_CLIENT_EMAIL`
    - Add `GOOGLE_SHEETS_PRIVATE_KEY` (Copy the full key including newlines)
4.  **Deploy.**

## Google Sheets Setup

Ensure your Google Sheet has a tab named `Submissions` with the following header row:
`Timestamp | Title | Story | Email | Status`

The service account email must have **Editor** access to the sheet.
