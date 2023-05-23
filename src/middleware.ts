import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: ["/Welcome"]
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};