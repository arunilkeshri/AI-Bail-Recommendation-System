import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export default function DashboardCharts() {
  //todo: remove mock functionality - replace with real chart data
  const casesByMonth = [
    { month: "Jan", cases: 245, approved: 180, denied: 65 },
    { month: "Feb", cases: 289, approved: 210, denied: 79 },
    { month: "Mar", cases: 312, approved: 235, denied: 77 },
    { month: "Apr", cases: 356, approved: 275, denied: 81 },
    { month: "May", cases: 398, approved: 310, denied: 88 },
    { month: "Jun", cases: 445, approved: 342, denied: 103 },
  ];

  const riskDistribution = [
    { risk: "Low", value: 45, color: "hsl(var(--chart-2))" },
    { risk: "Medium", value: 35, color: "hsl(var(--chart-3))" },
    { risk: "High", value: 20, color: "hsl(var(--destructive))" },
  ];

  const processingTime = [
    { day: "Mon", avgTime: 2.3 },
    { day: "Tue", avgTime: 2.1 },
    { day: "Wed", avgTime: 1.8 },
    { day: "Thu", avgTime: 2.4 },
    { day: "Fri", avgTime: 2.6 },
    { day: "Sat", avgTime: 1.9 },
    { day: "Sun", avgTime: 1.5 },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Cases by Month */}
      <Card data-testid="chart-cases-by-month">
        <CardHeader>
          <CardTitle>Cases by Month</CardTitle>
          <CardDescription>Monthly bail case processing statistics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={casesByMonth}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="month" 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "6px",
                  }}
                />
                <Bar dataKey="approved" fill="hsl(var(--chart-2))" name="Approved" />
                <Bar dataKey="denied" fill="hsl(var(--destructive))" name="Denied" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Risk Distribution */}
      <Card data-testid="chart-risk-distribution">
        <CardHeader>
          <CardTitle>Risk Distribution</CardTitle>
          <CardDescription>Current risk assessment breakdown</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={riskDistribution}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ risk, value }) => `${risk}: ${value}%`}
                  labelLine={false}
                >
                  {riskDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "6px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Processing Time Trends */}
      <Card className="lg:col-span-2" data-testid="chart-processing-time">
        <CardHeader>
          <CardTitle>Average Processing Time</CardTitle>
          <CardDescription>Daily average case processing time in hours</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={processingTime}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="day" 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "6px",
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="avgTime" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={2}
                  dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}