import { ɵgetOrCreateAngularServerApp } from '@angular/ssr';

export default async function handler(req: Request): Promise<Response> {
  const app = ɵgetOrCreateAngularServerApp();
  
  // Handle the request using the Angular server application
  const response = await app.handle(req);
  
  if (response) {
    return response;
  }
  
  // If no response was generated, return a 404
  return new Response('Not Found', { status: 404 });
}