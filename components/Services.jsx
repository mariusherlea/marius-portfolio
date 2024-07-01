import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Description } from "@radix-ui/react-dialog";

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Web Design",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est voluptatibus repellendus velit tempore dolore, dolores quidem natus quia voluptatem! Tempora magnam rerum quaerat quasi sed ullam deleniti provident quis corrupti.",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Web Development",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est voluptatibus repellendus velit tempore dolore, dolores quidem natus quia voluptatem! Tempora magnam rerum quaerat quasi sed ullam deleniti provident quis corrupti.",
  },
];

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          My Services
        </h2>
        {/** grid items*/}
        <div>grid item</div>
      </div>
    </section>
  );
};

export default Services;
