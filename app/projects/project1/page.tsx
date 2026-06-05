import Link from "next/link";

export default function Project1Page() {
  return (
    <main className="container">
      <div className="card">
        <div className="thumb" />
        <div className="card-body">
          <h1 className="card-title">Project 1</h1>
          <p className="card-desc">このページは Project 1 の詳細です。ここに目的、技術スタック、成果物の説明、デモやソースコードへのリンクを記載します。</p>

          <section style={{marginTop: 12}}>
            <h2 className="font-semibold">技術スタック</h2>
            <ul className="mt-2">
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>React</li>
            </ul>
          </section>

          <p style={{marginTop: 16}}>
            <Link href="/projects" className="muted">プロジェクト一覧に戻る</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
