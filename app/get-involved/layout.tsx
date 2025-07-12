import React from "react";

// Next.js expects the layout to receive a 'children' prop as an object property
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Get Involved</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Join our mission to save lives through blood donation. Whether you
          want to donate, volunteer, or partner with us, there&apos;s a place
          for you in our community.
        </p>
      </div>
      {children}
    </main>
  );
}
