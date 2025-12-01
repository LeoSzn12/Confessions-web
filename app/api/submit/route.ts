import { NextResponse } from 'next/server';
import { appendSubmission } from '@/lib/sheets';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { title, story, email, consent } = body;

        if (!title || !story || !consent) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        await appendSubmission({ title, story, email });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Submission error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
