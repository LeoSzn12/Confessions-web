import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

export async function appendSubmission(data: { title: string; story: string; email?: string }) {
    if (!process.env.GOOGLE_SHEETS_CLIENT_EMAIL || !process.env.GOOGLE_SHEETS_PRIVATE_KEY || !process.env.GOOGLE_SHEETS_SPREADSHEET_ID) {
        throw new Error('Missing Google Sheets credentials');
    }

    const serviceAccountAuth = new JWT({
        email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        key: process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, '\n'),
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEETS_SPREADSHEET_ID, serviceAccountAuth);
    await doc.loadInfo();

    // Create or get sheet
    let sheet = doc.sheetsByTitle['Submissions'];
    if (!sheet) {
        sheet = await doc.addSheet({ title: 'Submissions', headerValues: ['Timestamp', 'Title', 'Story', 'Email', 'Status'] });
    }

    await sheet.addRow({
        Timestamp: new Date().toISOString(),
        Title: data.title,
        Story: data.story,
        Email: data.email || '',
        Status: 'PENDING'
    });
}
