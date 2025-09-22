import CaseList from '../CaseList';

export default function CaseListExample() {
  const handleViewCase = (caseId: string) => {
    console.log('Viewing case:', caseId);
  };

  return (
    <div className="p-6 bg-background">
      <CaseList onViewCase={handleViewCase} />
    </div>
  );
}