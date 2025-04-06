import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/api/webhooks/clerk", // your public route(s)
]);

export default clerkMiddleware((auth, req) => {
  // If it's NOT a public route, Clerk will protect it automatically.
  if (!isPublicRoute(req)) {
    // Nothing more is needed — Clerk handles it internally
    // You could add logging or custom logic here if needed
  }
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
