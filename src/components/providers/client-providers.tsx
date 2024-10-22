// src/components/providers/client-providers.tsx
'use client';

import { GoogleOAuthProvider } from '@react-oauth/google';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
      {children}
    </GoogleOAuthProvider>
  );
}