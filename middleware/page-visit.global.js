export default defineNuxtRouteMiddleware(() => {
  const pageVistCount = usePageVisitCount();
  pageVistCount.value++;
});