import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import type { RESUME_DATA } from "@/data/resume-data";
import Image from "next/image";

interface ProjectLinkProps {
  title: string;
  link?: string;
}

function OssLink({ title, link }: ProjectLinkProps) {
  if (!link) {
    return <span>{title}</span>;
  }

  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 hover:underline"
        aria-label={`${title} project (opens in new tab)`}
      >
        {title}
        <span
          className="size-1 rounded-full bg-green-500"
          title="Active project indicator"
          aria-hidden="true"
        />
      </a>
      <div
        className="hidden font-mono text-xs underline print:visible"
        aria-hidden="true"
      >
        {link.replace("https://", "").replace("www.", "").replace("/", "")}
      </div>
    </>
  );
}

interface OssCardProps {
  title: string;
  description: string;
  link?: string;
  coverImg:string;
  type:string
}

function OssCrd({title  ,link , description ,coverImg ,type}:OssCardProps){
    const blue ="#2c289d", yellow="#a2aa15";
    const brColor=type == "pr" ? blue :yellow;

    return (
        <Card  
            className="flex h-full flex-col overflow-hidden border p-3" 
            style={{
                border:`1px solid ${brColor}`,
                borderRadius:"10px",
                boxShadow:` 0 0 2px ${brColor},
                            0 0 4px ${brColor},
                            0 0 8px ${brColor}`,
            }}
        >
            <CardHeader>
                <div className="space-y-1">
                <CardTitle className="text-base">
                    <OssLink title={title} link={link} />
                </CardTitle>

                </div>
            </CardHeader>
            <CardContent className="mt-auto flex">
                {/* <ProjectTags tags={tags} /> */}
                <Image height={180} width={210} alt={"cover image"} src={coverImg}/>
            </CardContent>
            <CardDescription
                className="text-pretty font-mono text-xs print:text-[10px]"
                aria-label="Project description"
            >
                {description}
            </CardDescription>
        </Card>
    )
}

interface OsssProps {
  ossConstributions: (typeof RESUME_DATA)["ossConstributions"];
}

export default function OssContributions({ossConstributions}:OsssProps){
    return(
        <Section className="scroll-mb-16 print:space-y-4">
            <h2 className="text-xl font-bold" id="side-projects">
                Oss Contributions
            </h2>
            <div
                className="-mx-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2"
                role="feed"
                aria-labelledby="side-projects"
            >
            {ossConstributions.map((project:any) => (
                <article
                key={project.title}
                className="h-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm print:hover:translate-y-0 print:hover:shadow-none"
                >
                <OssCrd
                    title={project.title}
                    description={project.description}
                    link={project.link?.href}
                    coverImg={project.coverImg}
                    type={project.type}
                />
                </article>
            ))}
            </div>
        </Section>
    )
}