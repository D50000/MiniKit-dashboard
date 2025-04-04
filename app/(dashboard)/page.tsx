'use client';

import { useEffect, useState } from 'react';
import { MiniKit, VerifyCommandInput, VerificationLevel, ISuccessResult } from '@worldcoin/minikit-js';

import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export default function LoginPage() {
  const [isVerified, setIsVerified] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [password, setPassword] = useState('');
  const [sdkAvailable, setSdkAvailable] = useState(true);

  useEffect(() => {
    // Check MiniKit SDK instance.
    if (!MiniKit.isInstalled()) {
      setSdkAvailable(false);
    }
  }, []);

  const verifyPayload: VerifyCommandInput = {
    action: 'humanity-verify',
    verification_level: VerificationLevel.Orb
  };

  const handleVerify = async () => {
    setIsVerifying(true);
    try {
      const { finalPayload } = await MiniKit.commandsAsync.verify(verifyPayload);
      if (finalPayload.status === 'error') {
        console.log('Error payload', finalPayload);
        return;
      }

      const verifyResponse = await fetch('/api/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          payload: finalPayload as ISuccessResult,
          action: 'humanity-verify'
        })
      });

      const verifyResponseJson = await verifyResponse.json();
      if (verifyResponseJson.status === 200) {
        console.log('Verification success!');
        setIsVerified(true);
      } else {
        console.log('Backend verification failed');
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsVerifying(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Logging in with:', password);
    // TODO: Handle login logic
  };

  return (
    <div className="min-h-screen flex justify-center items-start md:items-center p-8">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>This demo uses World ID for humanity verification.</CardDescription>
        </CardHeader>

        <CardFooter className="flex flex-col w-full gap-4">
          {/* Verify Button */}
          {!sdkAvailable ? (
            <p className="text-sm text-red-500 text-center">❌ Detect No MiniKit SDK，Please use support device.</p>
          ) : !isVerified ? (
            <Button onClick={handleVerify} disabled={isVerifying} className="w-full">
              {isVerifying ? '驗證中...' : 'Verify with World ID'}
            </Button>
          ) : (
            <p className="text-sm text-green-600 text-center">✅ World ID Verify Pass</p>
          )}

          {/* Show login form when "Verify Pass" */}
          <form onSubmit={handleLogin} className="w-full flex flex-col gap-4">
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={!isVerified}
              required
            />
            <Button type="submit" className="w-full" disabled={!isVerified}>
              Login
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
