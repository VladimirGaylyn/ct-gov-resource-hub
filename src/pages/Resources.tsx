
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
      title: "eRegulations System – Office of the Secretary of the State",
      description: "Search regulations that are open for public comment and file comments online.",
      contact: "Online portal (no direct phone/email)",
      link: "https://eregulations.ct.gov/eRegsPortal/",
      icon: <Building className="h-5 w-5" />
    },
    {
      title: "Connecticut Siting Council",
      description: "Track siting applications, meeting agendas, and submit written comments.",
      contact: "10 Franklin Sq., New Britain",
      email: "siting.council@ct.gov",
      phone: "860-827-2935",
      link: "https://portal.ct.gov/csc",
      icon: <Building className="h-5 w-5" />
    },
    {
      title: "DEEP Permits & Licenses",
      description: "Environmental permits, forms, and step-by-step guidance.",
      contact: "DEEP permitting assistance hotline on page",
      link: "https://portal.ct.gov/DEEP/Permits-and-Licenses/Permits-and-Licenses",
      icon: <FileText className="h-5 w-5" />
    },
    {
      title: "CT eLicense Portal",
      description: "Apply for, renew, or verify over 800 state-issued licenses/permits.",
      contact: "Self-service portal (24/7)",
      link: "https://www.elicense.ct.gov/",
      icon: <FileText className="h-5 w-5" />
    }
  ];

  const cityResources = [
    {
      city: "Berlin",
      contacts: [
        {
          department: "Planning & Zoning Commission",
          email: "mgiusti@berlinct.gov",
          phone: "860-828-7060",
          name: "Maureen Giusti",
          description: "Zoning applications, questions on land use"
        }
      ],
      meetings: "Council agendas, minutes, livestream links",
      meetingLink: "https://www.berlinct.gov/meetings/"
    },
    {
      city: "Bridgeport",
      contacts: [
        {
          department: "Office of Planning & Economic Development",
          email: "thomas.gill@bridgeportct.gov",
          phone: "203-576-7221",
          name: "Tom Gill",
          description: "Development reviews, zoning amendments, economic-dev. programs"
        }
      ],
      meetings: "Track ordinances, upcoming hearings, and submit testimony",
      meetingLink: "https://www.bridgeportct.gov/government/boards-and-commissions/city-council/city-council/city-council-meeting-minutes-agendas-and-notices"
    },
    {
      city: "East Haven",
      contacts: [
        {
          department: "PermitLink Portal",
          description: "Apply online for building, zoning, wetlands, and more",
          contact: "Town Hall: 250 Main St. 203-468-3205",
          link: "https://permitlinkusa-online.com/csp/easthavenct/DocumentLink.PublicWelcome.cls"
        }
      ],
      meetings: "View agenda packets and meeting schedules",
      meetingLink: "https://www.easthaven-ct.gov/node/2621/agenda"
    },
    {
      city: "Groton",
      contacts: [
        {
          department: "Citizen Self-Service Portal",
          description: "Submit/track permit applications, inspection requests, fee payments",
          email: "schoquette@groton-ct.gov",
          link: "https://groton-ct.gov/departments/plandev/permits.php"
        }
      ],
      meetings: "Regular meeting calendar for all Groton boards/commissions",
      meetingLink: "https://www.groton-ct.gov/government/schedules.php"
    },
    {
      city: "Hartford",
      contacts: [
        {
          department: "Dept. of Development Services",
          description: "Permits, zoning, planning, housing & code-enforcement services",
          contact: "260 Constitution Plaza",
          phone: "860-757-9200",
          link: "https://www.hartfordct.gov/Government/Departments/DDS"
        },
        {
          department: "City Council – Public Comment Meetings",
          description: "Schedule & sign-up details for speaking at Council",
          email: "Sybelle.Moise@hartford.gov",
          phone: "860-757-9738",
          name: "Clerk contact"
        }
      ],
      meetings: "Schedule & sign-up details for speaking at Council",
      meetingLink: "https://www.hartfordct.gov/Government/Town-and-City-Clerk/Achieved-City-Council-Documents/Council-Meetings/2024-Public-Comments"
    },
    {
      city: "New Haven",
      contacts: [
        {
          department: "Building Inspection & Enforcement",
          description: "Electronic permitting, inspections, code questions",
          name: "Robert Dillon",
          phone: "203-946-8045",
          link: "https://www.newhavenct.gov/government/departments-divisions/office-of-building-inspection-enforcement"
        }
      ],
      meetings: "Comprehensive list of board/commission meetings with links",
      meetingLink: "https://www.newhavenct.gov/city-services/advanced-components/list-detail-pages/calendar-meeting-list",
      permitLink: "https://www.newhavenct.gov/city-services/licenses-permits"
    },
    {
      city: "Stamford",
      contacts: [
        {
          department: "Community Development Office",
          description: "Federal/State grant programs (CDBG, etc.) and neighborhood planning",
          contact: "888 Washington Blvd., 10th Fl.",
          phone: "203-977-4053",
          link: "https://www.stamfordct.gov/government/view-all-city-departments"
        },
        {
          department: "Land Use Bureau / Planning & Zoning",
          description: "Planning Board, Zoning Board, environmental reviews; one-stop email",
          email: "StamfordLandUse@stamfordct.gov",
          phone: "203-977-4711",
          link: "https://www.stamfordct.gov/government/operations/land-use-bureau-planning-zoning-housing-epb"
        }
      ],
      meetings: "Master calendar plus links to all minutes/agendas",
      meetingLink: "https://www.stamfordct.gov/government/boards-commissions/boards-commissions-meeting-calendar"
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
        (contact.email && contact.email.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (contact.name && contact.name.toLowerCase().includes(searchQuery.toLowerCase()))
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
                    {resource.phone && (
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-blue-600" />
                        <a href={`tel:${resource.phone}`} className="text-blue-600 hover:underline">
                          {resource.phone}
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
                  <h3 className="font-semibold text-blue-900">State Public-Meeting Calendar</h3>
                </div>
                <p className="text-blue-700">Master calendar for all state-agency public meetings & hearings</p>
                <a href="https://egov.ct.gov/pmc/" target="_blank" rel="noopener noreferrer">
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
                        {contact.name && (
                          <p className="text-sm text-gray-600 mb-1">Contact: {contact.name}</p>
                        )}
                        {contact.description && (
                          <p className="text-sm text-gray-600 mb-2">{contact.description}</p>
                        )}
                        {contact.contact && (
                          <p className="text-sm text-gray-600 mb-2">{contact.contact}</p>
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
                Last updated: December 2024 | Please verify contact information before submitting applications
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Resources;
