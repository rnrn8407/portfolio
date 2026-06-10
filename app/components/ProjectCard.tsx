import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
    href: string;
    title: string;
    description: string;
    imageSrc?: string;
    imageAlt?: string;
    imageWidth?: number;
    imageHeight?: number;
}

export default function ProjectCard({
    href,
    title,
    description,
    imageSrc,
    imageAlt = title,
    imageWidth = 800,
    imageHeight = 450,
}: ProjectCardProps) {
    return (
        <Link href={href} className="card">
        <div className="thumb">
            {imageSrc ? (
            <Image
                src={imageSrc}
                alt={imageAlt}
                width={imageWidth}
                height={imageHeight}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
            ) : (
            <div style={{ width: "100%", height: "100%", backgroundColor: "#f0f0f0" }} />
            )}
        </div>
        <div className="card-body">
            <div className="card-title">{title}</div>
            <div className="card-desc">{description}</div>
        </div>
        </Link>
    );
}
