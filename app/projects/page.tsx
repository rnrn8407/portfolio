import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    { id: 'project1', title: 'Project 1', desc: 'フロントエンドのサンプルプロジェクトです。' },
    { id: 'project2', title: 'Project 2', desc: 'バックエンドのサンプルプロジェクトです。' },
  ];

  return (
    <main className="container">
      <h1 className="site-title">プロジェクト一覧</h1>
      <p className="site-sub">各プロジェクトをクリックして詳細ページに移動します。</p>

      <div className="gallery">
        {projects.map(p => (
          <Link key={p.id} href={`/projects/${p.id}`} className="card">
            <div className="thumb" aria-hidden />
            <div className="card-body">
              <div className="card-title">{p.title}</div>
              <div className="card-desc">{p.desc}</div>
            </div>
          </Link>
        ))}
      </div>

      <p style={{marginTop: 24}}>
        <Link href="/" className="muted">ホームに戻る</Link>
      </p>
    </main>
  );
}
