import Link from "next/link";
import { Button } from "./ui/button";
import {  Send , Linkedin, Github} from "lucide-react";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/** text*/}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            {/* <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Web Developer
            </div> */}
            <h1 className="h1 mb-4">Ion-Marius Herlea</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
             Full-Stack Developer building modern web applications with Next.js, TypeScript, and Strapi.
</p><p>
I develop scalable eCommerce and content platforms with clean UI and real-world functionality.
            </p>
            {/** buttons*/}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-6 mt-6">
              <Link href="/projects">
                <Button className="gap-x-2">
                  Projects <Send size={18} />
                </Button>
              </Link>
              <a href="https://www.linkedin.com/in/mariusherlea/">
                <Button variant="secondary" className="gap-x-2">
                  Linkedin
                  <Linkedin size={18} />
                </Button>
              </a>
              <a href="https://github.com/mariusherlea">
                <Button variant="secondary" className="gap-x-2">
                 GitHub
                  <Github size={18} />
                </Button>
              </a>
            </div>
            {/** socials*/}
            {/* <Socials
              containerStyles={"flex gap-x-6 mx-auto xl:mx-0"}
              iconsStyles={
                "text-foreground text-[22px] hover:text-primary transition-colors duration-200"
              }
            /> */}
          </div>

          {/** image*/}
          <div className="hidden xl:flex relative ">
            {/** badge 1*/}
            {/* <Badge
              containerStyles="absolute top-[24%] -left-[5rem] "
              icon={<RiBriefcase4Fill />}
              endCountNum={1}
              badgeText="Years of experience"
            /> */}
            {/** badge 2*/}
            <Badge
              containerStyles="absolute top-[80%] -left-[1rem] "
              icon={<RiTodoFill />}
              endCountNum={3}
              badgeText="Finished projects"
            />
            {/** badge 3*/}
            {/* <Badge
              containerStyles="absolute top-[55%] -right-8 "
              icon={<RiTeamFill />}
              endCountNum={1}
              badgeText="Happy clients"
            /> */}
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg
              containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
              imgSrc="/hero/developer.png"
            />
          </div>
        </div>
        {/* icon*/}
        <div className="hidden xl:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
