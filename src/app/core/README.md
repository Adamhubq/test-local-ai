# Core Module

The core module contains singleton services and components that are shared throughout the application.
These are typically services that should only be instantiated once, such as:
- Authentication services
- Global configuration services
- Application-wide utilities
- Base components that are used across multiple features

This module is imported only once in the main application module.