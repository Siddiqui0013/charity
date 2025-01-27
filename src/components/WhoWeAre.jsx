import { ArrowRight, Smartphone, Headset, ArchiveRestore, BookA } from "lucide-react"
import Card from "./ui/Card"

export default function WhoWeAre() {
  return (
    <div className="h-full lg:py-20 py-16 grid lg:grid-cols-2 grid-cols-1 lg:gap-20 gap-6 place-content-center place-items-center lg:px-20 sm:px-12 px-3">
      <div>
        <h2 className="text-primary font-medium">who we are</h2>
        <h1 className="text-3xl my-2 font-semibold">Make a Difference</h1>
        <p>Making a difference often comes from the ability to embrace mistakes and view them as valuable opportunities for growth. It is through these missteps that we learn to shed everything that is not essential, paving the way for true self-improvement. Mistakes serve as a mirror, reflecting areas where we can evolve and inspiring us to strive for better outcomes</p>
        <button className="flex items-center gap-2 text-white bg-primary text-sm px-4 py-2 rounded-md mt-7">
          Read More
          <ArrowRight size={15} />
        </button>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        <div className="flex flex-col gap-4">
          <Card
            icon={<Smartphone size={30} />}
            IconClr="text-primary"
            Title="Popya Mobile App"
            description="A user-friendly platform connecting users with crisis helplines, educational resources, peer support, and tools to report abuse"
            className="bg-primary text-white"
          />
          <Card
            icon={<Headset size={30} />}
            IconClr="text-[#9AC4F8]"
            Title="Media Outreach"
            description="Podcasts and digital content featuring experts and survivor stories."
            className="bg-[#9AC4F8]"
          />
        </div>
        <div className="lg:-translate-y-8 flex flex-col gap-4">
          <Card
            icon={<ArchiveRestore size={30} />}
            IconClr="text-[#3C3F52]"
            Title="Awareness Campaigns"
            description="Physical and virtual events promoting education and prevention of GBV, suicide, and mental health stigma."
            className="bg-[#3C3F52] text-white"
          />
          <Card
            icon={<BookA size={30} />}
            IconClr="text-[#99EDCC]"
            Title="Books"
            description="Publications by Co-Founder Leonard Akathingo addressing key societal challenges and inspiring change."
            className="bg-[#99EDCC]"
          />
        </div>
      </div>
    </div>
  )
}
