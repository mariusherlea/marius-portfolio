import Form from "@/components/Form";
import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";
const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/** text & illustration */}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello 👋
            </div>
            <h1 className="h1 max-w-md mb-8">Have a Project in Mind?</h1>
            <p className="subtitle max-w-[500px]">
  Looking for a reliable Full-Stack Developer? Whether you have a new idea,
  need improvements to an existing application, or want to discuss a project,
  I d be happy to hear from you.
</p>
          </div>
          {/** illustration*/}
          <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-top bg-no-repeat "></div>
        </div>
        {/** info text & form */}
        <div className="grid xl:grid-cols-2 gap-20 items-start mb-24 xl:mb-32">
          {/** info text*/}
          <div className="bg-secondary/20 rounded-2xl p-8 flex flex-col gap-y-8 h-fit border border-border mb-12 xl:mb-24 text-base xl:text-lg">
            {/**mail */}      <h2 className="text-2xl font-bold mb-4">
  Contact Information
</h2>
<div className="flex items-center gap-x-8">
  <MailIcon size={22} className="text-primary" />

  <a
    href="mailto:contact@mariusherlea.dev"
    className="hover:text-primary hover:underline transition-colors duration-200"
  >
    contact@mariusherlea.dev
  </a>
</div>
            {/**address */}
            {/* <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <div>Principala,Vinerea,Alba</div>
            </div> */}
            {/**phone */}
            {/* <div className="flex items-center gap-x-8">
              <PhoneCall size={22} className="text-primary" />
              <div>+40 722 256 129</div>
            </div> */}
            <div className="flex items-center gap-3 mt-4">
  <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
  <span>Available for freelance and full-time opportunities</span>
</div>
          </div>
          <div className="xl:pl-12">
            <div className="mb-6">
  <h3 className="text-2xl font-semibold mb-2">
    Send me a message
  </h3>

  <p className="text-muted-foreground">
    I ll get back to you within 24 hours.
  </p>
</div>
            <Form/></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
