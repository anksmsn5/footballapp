// pages/dashboard.tsx
import React from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Dashboard = () => {
  const router = useRouter();

  // Mock authenticated state (replace with actual authentication logic)
  const isAuthenticated = true; // Replace with real authentication check

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login'); // Redirect to login if not authenticated
    }
  }, [isAuthenticated, router]);

  return (
    <div style={styles.container}>
      <h1>Welcome to the Dashboard</h1>
      <p>You have successfully logged in.</p>
    </div>
  );
};

// Inline styles for the dashboard page
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4',
  },
};

export default Dashboard;
