import RecommendationCards from '../RecommendationCards';

export default function RecommendationCardsExample() {
  const handleAccept = (caseId: string) => {
    console.log('Accepted recommendation for case:', caseId);
  };

  const handleReject = (caseId: string) => {
    console.log('Rejected recommendation for case:', caseId);
  };

  return (
    <div className="p-6 bg-background">
      <RecommendationCards 
        onAcceptRecommendation={handleAccept}
        onRejectRecommendation={handleReject}
      />
    </div>
  );
}