import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      <header>
        <h1 className="site-title">ポートフォリオ</h1>
        <p className="site-sub">就職活動用の制作物一覧です。各プロジェクトの詳細やデモへ移動できます。</p>
      </header>

      <nav style={{marginTop: 20}}>
        <Link href="/projects" className="btn-primary">プロジェクト一覧を見る</Link>
      </nav>

      <section style={{marginTop: 28}}>
        <h2 className="text-xl font-semibold">注目プロジェクト</h2>
        <div className="gallery">
          <Link href="/projects/project1" className="card">
            <div className="thumb" aria-hidden />
            <div className="card-body">
              <div className="card-title">Project 1</div>
              <div className="card-desc">サンプルプロジェクト1の概要。フロントエンドのデモ。</div>
            </div>
          </Link>

          <Link href="/projects/project2" className="card">
            <div className="thumb" aria-hidden />
            <div className="card-body">
              <div className="card-title">Project 2</div>
              <div className="card-desc">サンプルプロジェクト2の概要。バックエンドの設計例。</div>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
