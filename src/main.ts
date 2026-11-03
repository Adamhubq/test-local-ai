import { bootstrapApplication } from '@angular/platform-browser';
import { AppModule } from './app/app.module';

// Bootstrap the application with the AppModule
bootstrapApplication(AppModule)
  .catch((err) => console.error(err));
