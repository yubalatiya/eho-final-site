
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-4 md:p-12">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <Image
              src="https://media.licdn.com/dms/image/C5603AQGoXWZJyaSA7w/profile-displayphoto-shrink_800_800/0/1517783299040?e=2147483647&v=beta&t=KHj0usOHYdt93Zh7cDOL4T5OYZcGoIbHDftMC1n1cr4"
              alt="Yuval Atiya LinkedIn Photo"
              width={400}
              height={400}
              className="rounded-full"
            />
          </div>

          <div>
            <h1 className="text-4xl font-bold mb-2">Yuval Atiya</h1>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Licensed General Contractor</h2>
            <p className="mb-4">
              Welcome to EHO Builders — your trusted partner in high-quality residential and commercial construction throughout Los Angeles.
            </p>
            <p className="mb-2">
              Phone: <a href="tel:3104670099" className="text-blue-600 font-medium">310-467-0099</a>
            </p>
            <p className="mb-4">
              Email: <a href="mailto:office@ehobuilders.com" className="text-blue-600 font-medium">office@ehobuilders.com</a>
            </p>
            <Button className="bg-blue-700 text-white">View Project Portfolio</Button>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4">Featured Projects</h3>
          <ul className="space-y-4">
            <li>
              <Card>
                <CardContent className="p-4">
                  <h4 className="text-lg font-semibold">Complete Office Space Remodel - Culver City</h4>
                  <p>8,000 SQF | $750K | 9 months</p>
                  <p>Scope: Interior redesign, custom staircase, glass walls, and more.</p>
                </CardContent>
              </Card>
            </li>
            <li>
              <Card>
                <CardContent className="p-4">
                  <h4 className="text-lg font-semibold">1,000 SQF Custom Built ADU - Santa Monica</h4>
                  <p>$300K | 6 months</p>
                  <p>Scope: Full rebuild, custom cabinetry, exposed ceiling, smooth stucco.</p>
                </CardContent>
              </Card>
            </li>
            <li>
              <Card>
                <CardContent className="p-4">
                  <h4 className="text-lg font-semibold">24 Unit Exterior Facelift - Los Angeles</h4>
                  <p>$275K | 2 months</p>
                  <p>Scope: Roofing, painting, railing, gates, and doors.</p>
                </CardContent>
              </Card>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
// redeploy trigger
