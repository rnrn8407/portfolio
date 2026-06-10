import Image from "next/image";
import Link from "next/link";
import ParticlesBackground from "./components/ParticlesBackground";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
    <div className="pageWrapper">
      <ParticlesBackground />
      <main className="container pageContent">
        <header>
          <h1 className="site-title">ポートフォリオ</h1>
          <p className="site-sub">就職活動用の制作物一覧です。各プロジェクトの詳細やデモへ移動できます。</p>
        </header>

      <nav style={{marginTop: 20}}>
        <Link href="/projects" className="btn-primary">プロジェクト一覧を見る</Link>
      </nav>

      <section style={{marginTop: 28}}>
        <h2 className="text-xl font-semibold text-black">プロジェクト</h2>
        <div className="gallery">
          <ProjectCard
            href="https://test-auth-teal.vercel.app/"
            title="認証機能デモ"
            description="supabaseを用いた認証機能のデモ実装"
            imageSrc="/photo_project1.png"
            imageAlt="Project 1 サムネイル"
          />

          <ProjectCard
            href="/projects/project2"
            title="Project 2"
            description="サンプルプロジェクト2の概要。バックエンドの設計例。"
          />
        </div>
      </section>
      </main>
    </div>
  );
}
