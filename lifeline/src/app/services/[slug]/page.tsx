import type { Metadata } from "next";
import { SERVICES } from "@/content/services";
import {
  DeptPageView,
  deptMetadata,
} from "@/components/shared/DeptPageView";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return deptMetadata(slug);
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  return <DeptPageView slug={slug} />;
}
