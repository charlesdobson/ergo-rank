import { css, SerializedStyles } from '@emotion/react';

const useGlobalStyles = (): SerializedStyles => {
  return css`
    :root {
      --font-family: 'Montserrat';

      --white: #ffffff;
      --black: #000000;

      --gray-1: #f9fafb;
      --gray-2: #f3f4f6;
      --gray-3: #e5e7eb;
      --gray-4: #d1d5db;
      --gray-5: #9ca3af;
      --gray-6: #6b7280;
      --gray-7: #4b5563;
      --gray-8: #374151;
      --gray-9: #1f2937;
      --gray-10: #111827;

      --red-1: #fef2f2;
      --red-2: #fee2e2;
      --red-3: #fecaca;
      --red-4: #fca5a5;
      --red-5: #f87171;
      --red-6: #ef4444;
      --red-7: #dc2626;
      --red-8: #b91c1c;
      --red-9: #991b1b;
      --red-10: #7f1d1d;

      --yellow-1: #fffbeb;
      --yellow-2: #fef3c7;
      --yellow-3: #fde68a;
      --yellow-4: #fcd34d;
      --yellow-5: #fbbf24;
      --yellow-6: #f59e0b;
      --yellow-7: #d97706;
      --yellow-8: #b45309;
      --yellow-9: #92400e;
      --yellow-10: #78350f;

      --green-1: #ecfdf5;
      --green-2: #d1fae5;
      --green-3: #a7f3d0;
      --green-4: #6ee7b7;
      --green-5: #34d399;
      --green-6: #10b981;
      --green-7: #059669;
      --green-8: #047857;
      --green-9: #065f46;
      --green-10: #064e3b;

      --blue-1: #eff6ff;
      --blue-2: #dbeafe;
      --blue-3: #bfdbfe;
      --blue-4: #93c5fd;
      --blue-5: #60a5fa;
      --blue-6: #3b82f6;
      --blue-7: #2563eb;
      --blue-8: #1d4ed8;
      --blue-9: #1e40af;
      --blue-10: #1e3a8a;

      --indigo-1: #eef2ff;
      --indigo-2: #e0e7ff;
      --indigo-3: #c7d2fe;
      --indigo-4: #a5b4fc;
      --indigo-5: #818cf8;
      --indigo-6: #6366f1;
      --indigo-7: #4f46e5;
      --indigo-8: #4338ca;
      --indigo-9: #3730a3;
      --indigo-10: #312e81;

      --purple-1: #f5f3ff;
      --purple-2: #ede9fe;
      --purple-3: #ddd6fe;
      --purple-4: #c4b5fd;
      --purple-5: #a78bfa;
      --purple-6: #8b5cf6;
      --purple-7: #7c3aed;
      --purple-8: #6d28d9;
      --purple-9: #5b21b6;
      --purple-10: #4c1d95;

      --pink-1: #fdf2f8;
      --pink-2: #fce7f3;
      --pink-3: #fbcfe8;
      --pink-4: #f9a8d4;
      --pink-5: #f472b6;
      --pink-6: #ec4899;
      --pink-7: #db2777;
      --pink-8: #be185d;
      --pink-9: #9d174d;
      --pink-10: #831843;
    }

    * {
      font-family: var(--font-family);
    }
  `;
};

export default useGlobalStyles;
