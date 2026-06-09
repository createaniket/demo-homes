import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center container-x">
      <div className="max-w-md text-center">
        <div className="eyebrow mb-4">404</div>
        <h1 className="font-display text-5xl">Page not found</h1>
        <p className="mt-4 text-ink-soft">This page has moved or never existed.</p>
        <Link to="/" className="btn-primary mt-8 inline-flex">Return home</Link>
      </div>
    </div>
  );
}
