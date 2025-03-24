"use client";

import { Suspense } from "react";
import { Provider } from "react-redux";
import { store, persistor } from './store/store';
import { PersistGate } from "redux-persist/integration/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
            <Suspense>{children}</Suspense>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
