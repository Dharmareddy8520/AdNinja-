import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { product } from "@/config/product";

export const metadata: Metadata = { title: "Support", description: "AdNinja support topics and release contact status." };
const topics = ["Installation", "Filtering and protection", "Browser permissions", "Website compatibility", "Element picker", "Privacy and security", "Troubleshooting", "Bug reports"];
export default function Support(){return <><PageIntro eyebrow="HELP CENTER" title="Find your next step." description="Browse common support topics while the official contact channel is being verified."/><section className="section"><div className="container"><div className="content-grid">{topics.map(topic=><div className="content-card" key={topic}><h2>{topic}</h2><p>Guidance for {topic.toLowerCase()} will be added after the release build is reviewed.</p></div>)}</div><div className="notice">{product.supportEmail ? <>Need more help? Email <a href={`mailto:${product.supportEmail}`}>{product.supportEmail}</a>.</> : <>A verified support address is required before launch. For now, see the <Link href="/faq">FAQ</Link> and <Link href="/privacy">privacy draft</Link>.</>}</div></div></section></>}
