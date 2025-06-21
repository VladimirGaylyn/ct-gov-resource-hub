
import { ExternalLink, Phone, Mail, Calendar, FileText, Building } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SearchBar } from "@/components/SearchBar";
import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Resources = () => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const urlSearchQuery = searchParams.get('search');
    if (urlSearchQuery) {
      setSearchQuery(urlSearchQuery);
    }
  }, [searchParams]);

  const stateResources = [
    {
      title: "Connecticut Office of Secretary of State",
      description: "This portal can be used for finding and submitting public comments and includes all relevant agencies within the Connecticut state government, with detailed contact information and instructions on comment submission.",
      contact: "Portal for finding and submitting public comments with all relevant state agencies",
      link: "https://portal.ct.gov/SOTS",
      icon: <Building className="h-5 w-5" />
    },
    {
      title: "Connecticut Siting Council",
      description: "State agency for siting applications and public comment submission",
      contact: "Connecticut Siting Council, 10 Franklin Square, New Britain, CT 06051",
      email: "Siting.Council@ct.gov",
      link: "https://portal.ct.gov/CSC",
      icon: <Building className="h-5 w-5" />
    },
    {
      title: "CT Department of Energy & Environmental Protection",
      description: "Access information on Permits and Licenses, including information on the different types of licenses, guidance on navigating the process of applying, and more.",
      contact: "Information on permits, licenses, and application processes",
      link: "https://portal.ct.gov/DEEP/Permits-and-Licenses/Permits-and-Licenses",
      icon: <FileText className="h-5 w-5" />
    },
    {
      title: "Connecticut eLicense Website",
      description: "Use this site to renew, verify, or apply for a license, and to file a complaint.",
      contact: "Online portal for all licensing needs",
      link: "https://www.elicense.ct.gov/",
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
      meetings: "Meeting Portal for the Town Council schedule of meetings and more information",
      meetingLink: "https://www.berlinct.org/town-council"
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
      meetings: "City Council Meeting Minutes, Agendas and Notices",
      meetingLink: "https://www.bridgeportct.gov/content/city-council"
    },
    {
      city: "East Haven",
      contacts: [
        {
          department: "PermitLink Portal",
          description: "Through this link, one can apply for permits related to Zoning and Wetlands, Building Services, and more",
          link: "https://easthavenct.permitlink.com/"
        }
      ],
      meetings: "Council Meeting Agendas",
      meetingLink: "https://www.easthaven-ct.gov/town-council"
    },
    {
      city: "Groton",
      contacts: [
        {
          department: "Citizen Self Service Portal",
          description: "Through this Portal, one can apply for permits, request inspections, search public records, and more",
          link: "https://groton-ct.gov/citizen-self-service/"
        }
      ],
      meetings: "2024 Meeting Schedules",
      meetingLink: "https://groton-ct.gov/meetings/"
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
      meetings: "Schedule of 2024 City Council Public Comment Meetings",
      meetingLink: "https://www.hartford.gov/city-council"
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
      meetings: "Complete list of licenses/permits and City Calendar Meeting List",
      meetingLink: "https://www.newhavenct.gov/gov/depts/lic_insp/",
      permitLink: "https://www.newhavenct.gov/gov/depts/lic_insp/licenses_permits/"
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
      meetings: "Boards and Commissions Meeting Calendar and All Boards & Commissions Minutes/Agendas",
      meetingLink: "https://www.stamfordct.gov/boards-commissions",
      agendaLink: "https://www.stamfordct.gov/boards-commissions/agendas-minutes"
    }
  ];

  const filteredStateResources = useMemo(() => {
    if (!searchQuery) return stateResources;
    return stateResources.filter(resource =>
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.contact.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const filteredCityResources = useMemo(() => {
    if (!searchQuery) return cityResources;
    return cityResources.filter(city =>
      city.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      city.contacts.some(contact =>
        contact.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (contact.description && contact.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (contact.email && contact.email.toLowerCase().includes(searchQuery.toLowerCase()))
      ) ||
      city.meetings.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Resources for Permits/Licenses and Public Comments
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Comprehensive guide to Connecticut state and local resources for permits, licenses, and public comment submission
          </p>
          
          <SearchBar 
            onSearch={setSearchQuery}
            placeholder="Search by city, department, or resource type..."
          />
        </div>

        {/* State-level Resources */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Building className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">State-Level</h2>
            {searchQuery && (
              <span className="text-sm text-gray-500">
                ({filteredStateResources.length} results)
              </span>
            )}
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {filteredStateResources.map((resource, index) => (
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
                  <a href={resource.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="mt-4">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visit Website
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {!searchQuery && (
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  <h3 className="font-semibold text-blue-900">Connecticut State Agency Public Meeting Calendar</h3>
                </div>
                <p className="text-blue-700">Access the complete schedule of state agency public meetings</p>
                <a href="https://portal.ct.gov/OPM/IGPP-MAIN/Publications/Meeting-Calendar" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="mt-3">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Calendar
                  </Button>
                </a>
              </CardContent>
            </Card>
          )}
        </section>

        <Separator className="my-8" />

        {/* City and Town-level Resources */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Building className="h-8 w-8 text-green-600" />
            <h2 className="text-3xl font-bold text-gray-900">City- and Town-level</h2>
            {searchQuery && (
              <span className="text-sm text-gray-500">
                ({filteredCityResources.length} results)
              </span>
            )}
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {filteredCityResources.map((city, index) => (
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
                          {contact.link && (
                            <div className="mt-2">
                              <a href={contact.link} target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" size="sm">
                                  <ExternalLink className="h-4 w-4 mr-2" />
                                  Access Portal
                                </Button>
                              </a>
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
                        <p className="text-sm text-gray-600 mb-2">{city.meetings}</p>
                        <div className="flex gap-2 flex-wrap">
                          {city.meetingLink && (
                            <a href={city.meetingLink} target="_blank" rel="noopener noreferrer">
                              <Button variant="outline" size="sm">
                                <ExternalLink className="h-4 w-4 mr-2" />
                                View Meetings
                              </Button>
                            </a>
                          )}
                          {city.permitLink && (
                            <a href={city.permitLink} target="_blank" rel="noopener noreferrer">
                              <Button variant="outline" size="sm">
                                <ExternalLink className="h-4 w-4 mr-2" />
                                View Permits
                              </Button>
                            </a>
                          )}
                          {city.agendaLink && (
                            <a href={city.agendaLink} target="_blank" rel="noopener noreferrer">
                              <Button variant="outline" size="sm">
                                <ExternalLink className="h-4 w-4 mr-2" />
                                View Agendas
                              </Button>
                            </a>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {searchQuery && filteredStateResources.length === 0 && filteredCityResources.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">No resources found matching "{searchQuery}". Try a different search term.</p>
            </div>
          )}
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
