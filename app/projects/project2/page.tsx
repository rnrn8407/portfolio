import Link from "next/link";

export default function Project2Page() {
  return (
    <main className="container">
      <div className="card">
        <div className="thumb" />
        <div className="card-body">
          <h1 className="card-title">Project 2</h1>
          <p className="card-desc">このページは Project 2 の詳細です。プロジェクトの目的、設計、結果などをここにまとめます。</p>

          <section style={{marginTop: 12}}>
            <h2 className="font-semibold">主な機能</h2>
            <ul className="mt-2">
              <li>REST API</li>
              <li>データベース設計</li>
              <li>認証</li>
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
