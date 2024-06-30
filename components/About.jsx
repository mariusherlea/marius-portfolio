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
    text: "Bachelor of Computer Science, Bachelor of Economics",
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
        university: "Skillbrain",
        qualification: "Front End Developer course",
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
        qualification: "Front End Developer",
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
              imgSrc={"/hero/developer.png"}
            />
          </div>
          {/*tabs*/}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/** tabs content*/}
              <div className="text-lg mt-12 xl:mt-8">
                {/** personal info*/}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Unmatched Service Quality for over 1 years
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      I specialize in crafting intuitive website with
                      cutting-edge techonology, delivering dynamic and engaging
                      user experience.
                    </p>
                    {/** icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mt-12">
                      {infoData.map((item, index) => (
                        <div
                          className="flex items-center gap-x-4 mx-auto xl:mx-0"
                          key={index}
                        >
                          <div className="text-primary">{item.icon}</div>
                          <div>{item.text}</div>
                        </div>
                      ))}
                    </div>
                    {/** languages */}
                    <div className="mt-12 flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border"></div>
                      <div>English</div>
                    </div>
                  </div>
                </TabsContent>
                {/** qualifications*/}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left ">
                      My awesome Journey
                    </h3>
                    {/** experience and education wraper*/}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/** experience*/}
                      <div>
                        <div className="flex items-center gap-x-4 text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationsData, "experience").title}
                          </h4>
                        </div>
                        {/** list*/}
                        <div className="flex flex-col gap-y-8 mt-4">
                          {getData(qualificationsData, "experience").data.map(
                            (item, index) => (
                              <div className="flex gap-x-8 group" key={index}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">
                                    {item.company}
                                  </div>
                                  <div className="text-lg leading-none">
                                    {item.qualification}
                                  </div>
                                  <div className="text-base font-medium">
                                    {item.year}
                                  </div>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                      {/** education*/}
                      <div>
                        <div className="flex items-center gap-x-4 text-[22px] text-primary">
                          <GraduationCap />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationsData, "education").title}
                          </h4>
                        </div>
                        {/** list*/}
                        <div className="flex flex-col gap-y-8 mt-4">
                          {getData(qualificationsData, "education").data.map(
                            (item, index) => (
                              <div className="flex gap-x-8 group" key={index}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">
                                    {item.university}
                                  </div>
                                  <div className="text-lg leading-none">
                                    {item.qualification}
                                  </div>
                                  <div className="text-base font-medium">
                                    {item.year}
                                  </div>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
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
