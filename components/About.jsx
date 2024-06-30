import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Herlea Marius",
  },
  {
    icon: <MailIcon size={20} />,
    text: "mariusherlea@gmail.com",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Principala,Vinerea,RO",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+40 722 256 129",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bachelor of Computer Science",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 6 Jan, 1977",
  },
];
const qualificationsData = [
  {
    title: "education",
    data: [
      {
        training: "Skillbrain",
        qualification: "Front-end Developer course",
        year: "2023-2024",
      },
      {
        university: "Alba Iulia University",
        qualification: "Bachelor of Computer Science",
        year: "2017-2020",
      },
      {
        university: "Alba Iulia University",
        qualification: "Bachelor of Economics",
        year: "1997-2003",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Skillbrain-Jogga internship",
        qualification: "Front-end Developer",
        year: "2024",
      },
      {
        company: "schmalzle fleischwaren GmbH",
        qualification: "Worker",
        year: "2022-2023",
      },
    ],
  },
];
const skillData = [
  {
    title: "skills",
    data: [
      { name: "HTML, CSS " },
      { name: "Javascript" },
      { name: "React" },
      { name: "Next.js, OOP" },
    ],
  },
  {
    title: "tools",
    data: [
      { imgPath: "/about/vscode.svg" },
      { imgPath: "/about/figma.svg" },
      { imgPath: "/about/notion.svg" },
      { imgPath: "/about/vscode.svg" },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/*image*/}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="dark:bg-about_shape_dark 
              w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc={"/about/developer.png"}
            />
          </div>
          {/*tabs*/}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="qualifications">Qualifications</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
              </TabsList>
              {/** tabs content*/}
              <div className="text-lg mt-12 xl:mt-8">
                {/** personal info*/}
                <TabsContent value="personal">personal info</TabsContent>
                <TabsContent value="qualifications">
                  qualifications info
                </TabsContent>
                <TabsContent value="skills">skills info</TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
