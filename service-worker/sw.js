import { cleanupOutdatedCaches, precacheAndRoute } from "workbox-precaching";

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") self.skipWaiting();
});

// self.__WB_MANIFEST is default injection point
precacheAndRoute(self.__WB_MANIFEST);

// clean old assets
cleanupOutdatedCaches();

// to allow work offline
// registerRoute(new NavigationRoute(createHandlerBoundToURL("/")));
