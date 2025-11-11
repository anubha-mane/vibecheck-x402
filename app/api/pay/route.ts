import { NextResponse } from "next/server";

export async function POST(req: Request) {
  // 🆕 changed: get checkId from query param instead of JSON body
  const { searchParams } = new URL(req.url);
  const checkId = searchParams.get("checkId");

  if (!checkId) {
    return NextResponse.json({ error: "checkId required" }, { status: 400 });
  }

  // get the shared PAID set from the other file
  // @ts-ignore
  const PAID: Set<string> = globalThis.__WIPECHECK_PAID__ || new Set();
  PAID.add(checkId);
  // @ts-ignore
  globalThis.__WIPECHECK_PAID__ = PAID;

  // here is where real Solana/x402 verification would go later
  return NextResponse.json({ ok: true });
}
