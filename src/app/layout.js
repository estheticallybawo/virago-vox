
import "./globals.css";
import React from "react";


export const metadata = {
  title: "ViragoVOX",
  description: "The Female Impact Archive",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
