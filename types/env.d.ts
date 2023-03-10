/// <reference types="vite/client" />

export {}

declare module 'vue' {
  export interface ComponentCustomProperties {
    $i18n: LangFunc
  }
}

declare global {
  export interface LangFunc { (key: string): string }
  export interface LangProps { [key: string]: any }
  export interface Template { path: string, href: string, desc: string, date: string, name: string }
}
