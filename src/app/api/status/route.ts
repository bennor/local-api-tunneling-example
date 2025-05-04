import { NextResponse } from "next/server";

// Helper function to add CORS headers to the response
function corsHeaders(response: NextResponse) {
  // Allow requests from any origin
  response.headers.set("Access-Control-Allow-Origin", "*");
  // Allow specific methods
  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS",
  );
  // Allow specific headers
  response.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization",
  );

  return response;
}

// Handle OPTIONS requests (preflight requests)
export async function OPTIONS() {
  const response = NextResponse.json({}, { status: 200 });
  return corsHeaders(response);
}

export async function GET() {
  // Get current datetime in ISO format
  const datetime = new Date().toISOString();

  const response = NextResponse.json({
    status: "ok",
    datetime: datetime,
  });

  // Add CORS headers to the response
  return corsHeaders(response);
}
