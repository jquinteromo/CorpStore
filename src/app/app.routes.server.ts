import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }, { path: 'home', renderMode: RenderMode.Prerender },
  { path: 'products', renderMode: RenderMode.Prerender },
  { path: 'shoppingcart', renderMode: RenderMode.Prerender },
  { path: 'product/:id', renderMode: RenderMode.Server }
];
