import type { Metadata } from "next";
import { CLINICS } from "@/content/clinics";
import {
  DeptPageView,
  deptMetadata,
} from "@/components/shared/DeptPageView";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return CLINICS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return deptMetadata(slug);
}

export default async function ClinicDetailPage({ params }: Props) {
  const { slug } = await params;
  return <DeptPageView slug={slug} />;
}
