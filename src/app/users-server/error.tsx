'use client';

import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

const ErrorPage: NextPage = () => {
  const [error, setError] = useState(null);

  useEffect(() => {
    if (error) {
      console.error('Error:', error);
    }
  }, [error]);

  return (
    <div>
      <h1>Error</h1>
      <p>Failed to load data.</p>
      {error && <p>Error message: {error.message}</p>}
    </div>
  );
};

export default ErrorPage;