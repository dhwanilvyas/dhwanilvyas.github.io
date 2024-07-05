import React from "react";

const Experience = () => {
  return (
    <div className="mt-4">
      <ol className="relative border-s border-gray-200">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-500 rounded-full mt-1.5 -start-1.5 border "></div>
          <div className="flex flex-row items-center gap-2 mb-2">
            <div className="text-md font-medium text-gray-900">Atlassian</div>
            <div className="inline-block uppercase text-xs rounded-full px-1 py-0 border border-gray-500 text-gray-500">
              present
            </div>
          </div>
          <div className="mb-2 text-sm font-normal text-gray-500">SDE 2</div>
          <div className="mb-4 text-sm font-normal text-gray-500">
            Part of the team which manages a critical business product used by
            Atlassian partners using React, styled-components, GraphQL etc.
          </div>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border "></div>
          <div className="text-md font-medium text-gray-900">Razorpay</div>
          <div className="mb-2 text-sm font-normal text-gray-500">
            Senior frontend engineer
          </div>
          <div className="mb-4 text-sm font-normal text-gray-500">
            Worked there for 3 years, and during my tenure, I led critical
            initiatives in the Platform External Developer Experience team,
            focusing on projects such as migrating the Documentation website to
            SSR for enhanced capabilities and cost savings. I developed a unique
            instant preview solution, saving thousands, and built plugins and UI
            components for migrating to MDX, improving interactivity across
            2,000+ pages. Additionally, I designed an intuitive dashboard for
            the Developer Portal to simplify API debugging. In the Platform
            Growth team, I contributed to enhancing merchant experiences and
            impacting key metrics like MTU growth and CTRs.
          </div>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border "></div>
          <div className="text-md font-medium text-gray-900">Treebo</div>
          <div className="mb-2 text-sm font-normal text-gray-500">
            Frontend engineer
          </div>
          <div className="mb-4 text-sm font-normal text-gray-500">
            During my tenure as part of the core frontend team, I played a key
            role in developing critical features for the flagship Property
            Management System (PMS) at my previous company. This included
            building a POS system and guest registration using React, GraphQL,
            and Apollo from scratch. I also revamped the payment page for the
            mobile site with the highest customer traffic, integrating features
            like Web Check-in using React and Redux. Additionally, I contributed
            to developing an internal design system for consistent UI across all
            frontend applications. I further managed a cross-platform
            consumer-facing mobile app, focusing on enhancing various critical
            pages using React Native and GraphQL technologies.
          </div>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border "></div>
          <div className="text-md font-medium text-gray-900">VeggieFactory</div>
          <div className="mb-2 text-sm font-normal text-gray-500">
            Co-founder / Full stack developer
          </div>
          <div className="mb-4 text-sm font-normal text-gray-500">
            As a co-founder of a startup in the fruits & vegetable supply chain,
            I spearheaded the development of several essential products from
            inception, leveraging technologies such as React, React Native,
            Redux, and Firebase. This included crafting a cross-platform mobile
            app for customers to conveniently purchase products online.
            Additionally, I designed and implemented a POS web app with a
            user-friendly interface, empowering retail workers to effortlessly
            place orders and generate invoices. I also engineered a mobile app
            tailored for workers to streamline inventory input and optimize
            operational efficiency on the go. Furthermore, I orchestrated the
            creation of a comprehensive dashboard for warehouse management,
            featuring functionalities for handling orders, inventory, and user
            management.
          </div>
        </li>
      </ol>
    </div>
  );
};

export default Experience;
