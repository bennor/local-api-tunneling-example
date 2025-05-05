import { NextResponse } from 'next/server';

// This middleware runs on all requests
export function middleware() {
  // Get the response
  const response = NextResponse.next();

  // Add CORS headers to all responses
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS'
  );
  response.headers.set(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization'
  );

  return response;
}

// Configure the middleware to run on API routes
export const config = {
  matcher: '/api/:path*'
};
