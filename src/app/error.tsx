"use client";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 text-white p-4">
      <h1 className="text-3xl font-bold text-red-500 mb-4">Production Application Error</h1>
      <p className="text-zinc-400 mb-2">Pesan Error yang disembunyikan oleh browser:</p>
      <pre className="bg-red-950/50 p-4 border border-red-500/50 rounded-lg max-w-2xl overflow-auto text-red-200 text-sm">
        {error.message}
      </pre>
      <button onClick={() => reset()} className="mt-6 px-4 py-2 bg-white text-black rounded-md hover:bg-zinc-200 font-medium">
        Coba Muat Ulang
      </button>
    </div>
  );
}
