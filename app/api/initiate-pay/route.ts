import { NextRequest, NextResponse } from 'next/server';

/**
 * This command is essential for applications that need to facilitate payments directly within the app, enabling seamless transactions for users.
 * At launch, WLD and USDC.e will be supported.
 *
 * @param req
 * @returns
 */
export async function POST(req: NextRequest) {
  const uuid = crypto.randomUUID().replace(/-/g, '');

  // TODO: Store the ID field in your database so you can verify the payment later

  return NextResponse.json({ id: uuid });
}
