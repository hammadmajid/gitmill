import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
            gitmill
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Let us solve your software development challenges
          </p>
          <div className="flex flex-row gap-3 items-center justify-start">
            <Button size="lg">Talk to us</Button>
            <Button size="lg" variant="outline">
              Our work
            </Button>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Why Work With Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Expertise", "Innovation", "Reliability"].map((item) => (
              <Card key={item}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item}</h3>
                  <p className="text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Web Development",
              "Mobile Apps",
              "Cloud Solutions",
              "AI & Machine Learning",
            ].map((service) => (
              <Card key={service}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service}</h3>
                  <p className="text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Our Portfolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="aspect-square relative overflow-hidden rounded-lg"
              >
                <Image
                  src={`/placeholder.svg?height=300&width=300`}
                  alt={`Portfolio item ${item}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "John Doe", role: "CEO, TechCorp" },
              { name: "Jane Smith", role: "CTO, InnovateCo" },
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">
                    &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.&quot;
                  </p>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["Alice", "Bob", "Charlie", "Diana"].map((name) => (
              <div key={name} className="text-center">
                <div className="aspect-square relative overflow-hidden rounded-full mb-4">
                  <Image
                    src={`/placeholder.svg?height=200&width=200`}
                    alt={name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <p className="font-semibold">{name}</p>
                <p className="text-sm text-muted-foreground">Role</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Contact Us</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input placeholder="Name" />
              <Input type="email" placeholder="Email" />
            </div>
            <Input placeholder="Subject" />
            <Textarea placeholder="Message" />
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
