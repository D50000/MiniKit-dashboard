import { NextRequest, NextResponse } from 'next/server';
import { verifyCloudProof, IVerifyResponse, ISuccessResult } from '@worldcoin/minikit-js';

interface IRequestPayload {
  payload: ISuccessResult;
  action: string;
  signal: string | undefined;
}

/**
 * The verify command lets you use incognito actions inside of your mini app.
 * Incognito actions are a primitive of World ID and allow you to gate functionality behind a unique human check.
 * To use incognito actions, first create one in the Developer Portal.
 *
 * ps:https://docs.world.org/mini-apps/commands/verify
 *
 * @param req
 * @returns
 */
export async function POST(req: NextRequest) {
  const { payload, action, signal } = (await req.json()) as IRequestPayload;
  const app_id = process.env.APP_ID as `app_${string}`;
  const verifyRes = (await verifyCloudProof(payload, app_id, action, signal)) as IVerifyResponse; // Wrapper on this

  if (verifyRes.success) {
    // This is where you should perform backend actions if the verification succeeds
    // Such as, setting a user as "verified" in a database
    return NextResponse.json({ verifyRes, status: 200 });
  } else {
    // This is where you should handle errors from the World ID /verify endpoint.
    // Usually these errors are due to a user having already verified.
    return NextResponse.json({ verifyRes, status: 400 });
  }
}
