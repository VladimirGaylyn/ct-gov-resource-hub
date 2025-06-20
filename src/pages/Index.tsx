
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Building, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Connecticut Permits & Licenses Hub
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Your comprehensive resource for navigating Connecticut's permit applications, 
            license renewals, and public comment submission processes.
          </p>
          
          <Link to="/resources">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              <FileText className="mr-2 h-5 w-5" />
              Access Resources
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-6 w-6 text-blue-600" />
                State-Level Resources
              </CardTitle>
              <CardDescription>
                Access Connecticut state agencies for permits, licenses, and public comments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Connecticut Office of Secretary of State</li>
                <li>• Connecticut Siting Council</li>
                <li>• Department of Energy & Environmental Protection</li>
                <li>• Connecticut eLicense Website</li>
              </ul>
              <Link to="/resources">
                <Button variant="outline" className="mt-4">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Details
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-6 w-6 text-green-600" />
                City & Town Resources
              </CardTitle>
              <CardDescription>
                Connect with local planning, zoning, and development offices
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Berlin, Bridgeport, East Haven</li>
                <li>• Groton, Hartford, New Haven</li>
                <li>• Stamford and more municipalities</li>
                <li>• Direct contact information provided</li>
              </ul>
              <Link to="/resources">
                <Button variant="outline" className="mt-4">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Details
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Streamline Your Application Process
              </h3>
              <p className="text-gray-600 mb-6">
                Find the right contacts, understand the requirements, and submit your applications 
                with confidence using our comprehensive resource directory.
              </p>
              <Link to="/resources">
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  Get Started Now
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
