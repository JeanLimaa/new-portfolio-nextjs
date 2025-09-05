import { PortfolioPage } from "@/components/PortfolioPage";
import { LangParams } from "@/interfaces/RouteParams.interface";

export default async function PortfolioSafeContactsPage({ params }: { params: LangParams }) {
  return <PortfolioPage lang={params.lang} hideContacts={true} />;
}