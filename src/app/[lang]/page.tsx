import { PortfolioPage } from '@/components/PortfolioPage';
import { LangParams } from '@/interfaces/RouteParams.interface';

export default async function PortfolioNormalPage({ params }: { params: LangParams }) {
  return <PortfolioPage lang={params.lang} hideContacts={false} />;
}