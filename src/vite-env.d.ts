/// <reference types="vite/client" />

declare module 'embla-carousel' {
  export interface EmblaOptionsType {
    loop?: boolean;
    align?: string;
    dragFree?: boolean;
    slidesToScroll?: number;
  }
}
