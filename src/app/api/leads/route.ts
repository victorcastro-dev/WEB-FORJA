import { NextResponse } from "next/server";

import { processLeadSubmission } from "@/lib/lead";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const result = await processLeadSubmission(payload);

    if (!result.ok) {
      return NextResponse.json(
        {
          ok: false,
          message: result.message,
          errors: result.errors,
          contactUrl: result.contactUrl,
          contactLabel: result.contactLabel,
        },
        { status: result.errors ? 400 : 503 },
      );
    }

    return NextResponse.json({
      ok: true,
      leadId: result.leadId,
      delivery: result.delivery,
      message: result.message,
      contactUrl: result.contactUrl,
      contactLabel: result.contactLabel,
    });
  } catch (error) {
    console.error("[WEBFORJA api/leads]", error);

    return NextResponse.json(
      {
        ok: false,
        message: "Não foi possível processar a solicitação agora.",
      },
      { status: 500 },
    );
  }
}
