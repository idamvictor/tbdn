export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-red-600 mb-4">Our Programs</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive programs designed to save lives, educate
            communities, and build a sustainable blood donation ecosystem across
            Nigeria.
          </p>
        </div>

        {children}
      </main>
    </div>
  );
}
