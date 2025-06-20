
import { ExternalLink, Phone, Mail, Calendar, FileText, Building } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Resources = () => {
  const stateResources = [
    {
      title: "Connecticut Office of Secretary of State",
      description: "Portal for finding and submitting public comments with all relevant state agencies",
      contact: "Detailed contact information and comment submission instructions available",
      link: "#",
      icon: <Building className="h-5 w-5" />
    },
    {
      title: "Connecticut Siting Council",
      description: "State agency for siting applications and public comment submission",
      contact: "Connecticut Siting Council, 10 Franklin Square, New Britain, CT 06051",
      email: "Siting.Council@ct.gov",
      link: "#",
      icon: <Building className="h-5 w-5" />
    },
    {
      title: "CT Department of Energy & Environmental Protection",
      description: "Permits and Licenses information, application guidance, and different license types",
      contact: "Information on permits, licenses, and application processes",
      link: "#",
      icon: <FileText className="h-5 w-5" />
    },
    {
      title: "Connecticut eLicense Website",
      description: "Renew, verify, or apply for licenses and file complaints online",
      contact: "Online portal for all licensing needs",
      link: "#",
      icon: <FileText className="h-5 w-5" />
    }
  ];

  const cityResources = [
    {
      city: "Berlin",
      contacts: [
        {
          department: "Planning and Zoning Commission",
          email: "mgiusti@berlinct.gov",
          phone: "+1(860) 828-7008"
        }
      ],
      meetings: "Town Council Meeting Portal available for schedules and information"
    },
    {
      city: "Bridgeport",
      contacts: [
        {
          department: "Office of Planning and Economic Development",
          email: "Thomas.Gill@bridgeportct.gov",
          phone: "(203) 576-7221"
        }
      ],
      meetings: "City Council Meeting Minutes, Agendas and Notices available"
    },
    {
      city: "East Haven",
      contacts: [
        {
          department: "PermitLink Portal",
          description: "Apply for permits related to Zoning, Wetlands, Building Services, and more"
        }
      ],
      meetings: "Council Meeting Agendas available online"
    },
    {
      city: "Groton",
      contacts: [
        {
          department: "Citizen Self Service Portal",
          description: "Apply for permits, request inspections, search public records"
        }
      ],
      meetings: "2024 Meeting Schedules available"
    },
    {
      city: "Hartford",
      contacts: [
        {
          department: "Department of Development Services",
          email: "randal.davis@hartford.gov",
          phone: "(860) 757-9200",
          altPhone: "(860) 757-9040",
          role: "Deputy Director"
        },
        {
          department: "Public Comment Meetings",
          email: "Sybelle.Moise@hartford.gov",
          phone: "(860) 757-9738"
        }
      ],
      meetings: "2024 City Council Public Comment Meeting schedules available"
    },
    {
      city: "New Haven",
      contacts: [
        {
          department: "Office of Building Inspection & Enforcement",
          email: "RDillon@newhavenct.gov",
          phone: "(203) 946-8045"
        }
      ],
      meetings: "Complete list of licenses/permits and City Calendar Meeting List available"
    },
    {
      city: "Stamford",
      contacts: [
        {
          department: "Community Development",
          email: "communitydevelopment@stamfordct.gov",
          phone: "(203) 977-5253"
        },
        {
          department: "Planning Board",
          email: "StamfordLandUse@StamfordCT.gov",
          phone: "(203) 977-4076"
        },
        {
          department: "Zoning Board",
          email: "StamfordLandUse@stamfordct.gov",
          phone: "(203) 977-4719"
        }
      ],
      meetings: "Boards and Commissions Meeting Calendar and Minutes/Agendas available"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Resources for Permits/Licenses and Public Comments
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive guide to Connecticut state and local resources for permits, licenses, and public comment submission
          </p>
        </div>

        {/* State-level Resources */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Building className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">State-Level Resources</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {stateResources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {resource.icon}
                    {resource.title}
                  </CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">{resource.contact}</p>
                    {resource.email && (
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-blue-600" />
                        <a href={`mailto:${resource.email}`} className="text-blue-600 hover:underline">
                          {resource.email}
                        </a>
                      </div>
                    )}
                  </div>
                  <Button variant="outline" size="sm" className="mt-4">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit Website
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="h-5 w-5 text-blue-600" />
                <h3 className="font-semibold text-blue-900">Connecticut State Agency Public Meeting Calendar</h3>
              </div>
              <p className="text-blue-700">Access the complete schedule of state agency public meetings</p>
              <Button variant="outline" size="sm" className="mt-3">
                <ExternalLink className="h-4 w-4 mr-2" />
                View Calendar
              </Button>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-8" />

        {/* City and Town-level Resources */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Building className="h-8 w-8 text-green-600" />
            <h2 className="text-3xl font-bold text-gray-900">City and Town-Level Resources</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {cityResources.map((city, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-green-700">{city.city}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {city.contacts.map((contact, contactIndex) => (
                      <div key={contactIndex} className="border-l-4 border-green-200 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-2">{contact.department}</h4>
                        {contact.role && (
                          <p className="text-sm text-gray-600 mb-1">Role: {contact.role}</p>
                        )}
                        {contact.description && (
                          <p className="text-sm text-gray-600 mb-2">{contact.description}</p>
                        )}
                        <div className="space-y-1">
                          {contact.email && (
                            <div className="flex items-center gap-2">
                              <Mail className="h-4 w-4 text-green-600" />
                              <a href={`mailto:${contact.email}`} className="text-green-600 hover:underline text-sm">
                                {contact.email}
                              </a>
                            </div>
                          )}
                          {contact.phone && (
                            <div className="flex items-center gap-2">
                              <Phone className="h-4 w-4 text-green-600" />
                              <a href={`tel:${contact.phone}`} className="text-green-600 hover:underline text-sm">
                                {contact.phone}
                              </a>
                              {contact.altPhone && (
                                <span className="text-gray-500 text-sm">
                                  (Alt: {contact.altPhone})
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                    
                    {city.meetings && (
                      <div className="bg-gray-50 p-3 rounded-lg mt-4">
                        <div className="flex items-center gap-2 mb-1">
                          <Calendar className="h-4 w-4 text-gray-600" />
                          <span className="font-medium text-gray-900">Meeting Information</span>
                        </div>
                        <p className="text-sm text-gray-600">{city.meetings}</p>
                        <Button variant="outline" size="sm" className="mt-2">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Meetings
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Footer */}
        <div className="mt-12 text-center">
          <Card className="bg-gray-50">
            <CardContent className="pt-6">
              <p className="text-gray-600">
                This resource page provides comprehensive contact information and links for permit applications, 
                license renewals, and public comment submissions across Connecticut state and local government agencies.
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Last updated: June 2025 | Please verify contact information before submitting applications
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Resources;
