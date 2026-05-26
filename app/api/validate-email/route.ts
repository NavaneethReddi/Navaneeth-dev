import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { email } = await req.json();
  const apiKey = process.env.EMAIL_VERIFICATION_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ valid: false, error: 'API key missing' }, { status: 500 });
  }
  try {
    const res = await fetch(
      `https://api.apilayer.com/email_verification/check?email=${encodeURIComponent(email)}`,
      {
        method: 'GET',
        headers: { apikey: apiKey },
      }
    );
    const result = await res.json();
    const valid = result.format_valid && result.smtp_check && result.score > 0.5;
    return NextResponse.json({ valid });
  } catch (e) {
    return NextResponse.json({ valid: false, error: 'Validation failed' }, { status: 500 });
  }
}
