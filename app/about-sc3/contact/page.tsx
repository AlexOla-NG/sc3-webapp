import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, AlertTriangle } from "lucide-react";

export default function ContactSC3() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-blue-900 text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Contact SC3
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-blue-100">
                            Get in touch with Scotland&#39;s cyber security
                            coordination centre
                        </p>
                    </div>
                </div>
            </section>

            {/* Emergency Contact */}
            <section className="py-8 bg-red-50 border-b border-red-200">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center justify-center mb-4">
                            <AlertTriangle className="h-6 w-6 text-red-600 mr-2" />
                            <h2 className="text-xl font-bold text-red-800">
                                Cyber Security Emergency
                            </h2>
                        </div>
                        <p className="text-center text-red-700 mb-4">
                            If you are experiencing an active cyber security
                            incident, please report it immediately:
                        </p>
                        <div className="text-center">
                            <Button
                                asChild
                                size="lg"
                                className="bg-red-600 hover:bg-red-700"
                            >
                                <Link href="/report-incident">
                                    Report Incident Now
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            {/* Contact Details */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                                    Get in Touch
                                </h2>

                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <Phone className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                                        <div>
                                            <h3 className="font-semibold text-gray-900">
                                                Phone
                                            </h3>
                                            <p className="text-gray-600">
                                                +44 (0)131 244 0000
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                Monday to Friday, 9am to 5pm
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <Mail className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                                        <div>
                                            <h3 className="font-semibold text-gray-900">
                                                Email
                                            </h3>
                                            <p className="text-gray-600">
                                                info@sc3.gov.scot
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                We aim to respond within 2
                                                business days
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <MapPin className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                                        <div>
                                            <h3 className="font-semibold text-gray-900">
                                                Address
                                            </h3>
                                            <p className="text-gray-600">
                                                Scottish Cyber Coordination
                                                Centre
                                                <br />
                                                Scottish Government
                                                <br />
                                                St Andrew&#39;s House
                                                <br />
                                                Edinburgh EH1 3DG
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <Clock className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                                        <div>
                                            <h3 className="font-semibold text-gray-900">
                                                Operating Hours
                                            </h3>
                                            <p className="text-gray-600">
                                                Monday to Friday: 9:00 AM - 5:00
                                                PM
                                                <br />
                                                Emergency incidents: 24/7
                                                response
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* The contact form has been removed */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Information */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                            How We Can Help
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">
                                        General Inquiries
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">
                                        Questions about our services,
                                        partnership opportunities, or general
                                        cyber security guidance.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">
                                        Training & Exercises
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">
                                        Information about cyber security
                                        training programs and exercise
                                        opportunities.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">
                                        Media & Press
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">
                                        Media inquiries, press releases, and
                                        interview requests should be directed to
                                        our communications team.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
