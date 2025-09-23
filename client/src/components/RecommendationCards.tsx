import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Shield, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  DollarSign,
  User,
  FileText
} from "lucide-react";

interface Recommendation {
  caseId: string;
  defendant: string;
  recommendation: "Grant" | "Deny" | "Conditional";
  confidence: number;
  riskScore: number;
  bailAmount?: string;
  conditions?: string[];
  reasoning: string[];
  factors: {
    positive: string[];
    negative: string[];
  };
}

interface RecommendationCardsProps {
  onAcceptRecommendation?: (caseId: string) => void;
  onRejectRecommendation?: (caseId: string) => void;
}

export default function RecommendationCards({ onAcceptRecommendation, onRejectRecommendation }: RecommendationCardsProps) {
  //todo: remove mock functionality - replace with real recommendation data
  const mockRecommendations: Recommendation[] = [
    {
      caseId: "CASE-2024-001",
      defendant: "John Smith",
      recommendation: "Grant",
      confidence: 87,
      riskScore: 23,
      bailAmount: "$5,000",
      reasoning: [
        "No prior criminal history",
        "Strong community ties",
        "Employment verification provided"
      ],
      factors: {
        positive: ["Steady employment", "Local resident", "Character references"],
        negative: ["Minor traffic violations"]
      }
    },
    {
      caseId: "CASE-2024-002",
      defendant: "Maria Garcia",
      recommendation: "Conditional",
      confidence: 78,
      riskScore: 45,
      bailAmount: "$10,000",
      conditions: ["Electronic monitoring", "No alcohol consumption", "Weekly check-ins"],
      reasoning: [
        "Previous DUI conviction",
        "Demonstrated rehabilitation efforts",
        "Family support available"
      ],
      factors: {
        positive: ["Rehabilitation program completion", "Family support"],
        negative: ["Prior DUI", "Recent incident"]
      }
    },
    {
      caseId: "CASE-2024-003",
      defendant: "Robert Johnson",
      recommendation: "Deny",
      confidence: 92,
      riskScore: 78,
      reasoning: [
        "Multiple violent offenses",
        "Flight risk assessment: High",
        "Outstanding warrants in other jurisdictions"
      ],
      factors: {
        positive: ["Legal representation secured"],
        negative: ["Violence history", "Flight risk", "Outstanding warrants"]
      }
    }
  ];

  const getRecommendationColor = (recommendation: string) => {
    switch (recommendation) {
      case "Grant": return "bg-chart-2/10 text-chart-2 border-chart-2/20";
      case "Deny": return "bg-destructive/10 text-destructive border-destructive/20";
      case "Conditional": return "bg-chart-3/10 text-chart-3 border-chart-3/20";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  const getRiskColor = (score: number) => {
    if (score < 30) return "text-chart-2";
    if (score < 60) return "text-chart-3";
    return "text-destructive";
  };

  const getRecommendationIcon = (recommendation: string) => {
    switch (recommendation) {
      case "Grant": return <CheckCircle className="h-5 w-5 text-chart-2" />;
      case "Deny": return <AlertTriangle className="h-5 w-5 text-destructive" />;
      case "Conditional": return <Shield className="h-5 w-5 text-chart-3" />;
      default: return <Clock className="h-5 w-5" />;
    }
  };

  const handleAccept = (caseId: string) => {
    console.log('Accept recommendation for:', caseId);
    onAcceptRecommendation?.(caseId);
  };

  const handleReject = (caseId: string) => {
    console.log('Reject recommendation for:', caseId);
    onRejectRecommendation?.(caseId);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {mockRecommendations.map((rec) => (
        <Card key={rec.caseId} className="hover-elevate transition-all duration-200" data-testid={`recommendation-${rec.caseId}`}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {getRecommendationIcon(rec.recommendation)}
                <div>
                  <CardTitle className="text-lg">{rec.defendant}</CardTitle>
                  <CardDescription className="font-mono text-xs">{rec.caseId}</CardDescription>
                </div>
              </div>
              <Badge className={getRecommendationColor(rec.recommendation)} data-testid={`badge-rec-${rec.caseId}`}>
                {rec.recommendation}
              </Badge>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {/* Confidence & Risk */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Confidence</div>
                <div className="font-semibold text-lg">{rec.confidence}%</div>
                <Progress value={rec.confidence} className="h-2 mt-1" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Risk Score</div>
                <div className={`font-semibold text-lg ${getRiskColor(rec.riskScore)}`}>
                  {rec.riskScore}
                </div>
                <Progress value={rec.riskScore} className="h-2 mt-1" />
              </div>
            </div>

            {/* Bail Amount */}
            {rec.bailAmount && (
              <div className="flex items-center space-x-2 p-3 bg-muted/50 rounded-md">
                <DollarSign className="h-4 w-4 text-muted-foreground" />
                <div>
                  <div className="text-sm text-muted-foreground">Recommended Bail</div>
                  <div className="font-semibold">{rec.bailAmount}</div>
                </div>
              </div>
            )}

            {/* Conditions */}
            {rec.conditions && (
              <div className="space-y-2">
                <div className="text-sm font-medium text-muted-foreground">Conditions</div>
                <div className="space-y-1">
                  {rec.conditions.map((condition, index) => (
                    <div key={index} className="text-xs bg-card border border-card-border rounded p-2">
                      {condition}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Reasoning */}
            <div className="space-y-2">
              <div className="text-sm font-medium text-muted-foreground">Key Factors</div>
              <div className="space-y-1">
                {rec.reasoning.slice(0, 2).map((reason, index) => (
                  <div key={index} className="text-xs flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                    <span>{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-2 pt-2">
              <Button 
                size="sm" 
                className="flex-1" 
                onClick={() => handleAccept(rec.caseId)}
                data-testid={`button-accept-${rec.caseId}`}
              >
                <CheckCircle className="h-4 w-4 mr-1" />
                Accept
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="flex-1"
                onClick={() => handleReject(rec.caseId)}
                data-testid={`button-reject-${rec.caseId}`}
              >
                <AlertTriangle className="h-4 w-4 mr-1" />
                Review
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}