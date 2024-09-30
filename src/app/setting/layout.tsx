// app/about/layout.tsx
export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div>
        <h1>SETTING</h1>
        <div>{children}</div>
      </div>
    );
  }
  