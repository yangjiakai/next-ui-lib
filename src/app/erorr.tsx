'use client';

import AuthLayout from '@/components/layout/AuthLayout';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <AuthLayout>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </AuthLayout>
  );
}
