import Tabs from '../tabs';

export function generateStaticParams() {
  return [
    {
      tab: "about",
    },
    {
      tab: "experience",
    },
    {
      tab: "projects",
    },
    {
      tab: "uses",
    },
    {
      tab: "resume",
    },
  ];
}

export default function Page({ params }: { params: { tab: string } }) {
  return <Tabs params={params} />;
}