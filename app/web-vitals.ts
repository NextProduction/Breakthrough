import { reportWebVitals } from "@/lib/performance"

// The original code was redeclaring reportWebVitals, which is not allowed.
// The import from '@/lib/performance' already provides the function.
// This file should simply re-export it if needed, or remove the duplicate declaration.
// In this case, we assume the intention is to use the imported function, so we remove the redeclaration.

export {}
