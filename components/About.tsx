import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="leading-7">
      <p>Hola world 👋 </p>
      <br />
      <p>
        I am Dhwanil, a passionate software engineer based out of Gujarat,
        India.
      </p>
      <br />
      <p>
        I have ~6 years of experience building software for companies at different scales
        mainly using JavaScript ecosystem. I have an expertise building software
        using React, React Native, Node.js, and TypeScript, Firebase. I have
        also worked with other technologies like GraphQL, MongoDB, and
        PostgreSQL.
      </p>
      <p className="mt-4">
        Have a project in mind? Let's talk about it. You can reach out to me
        over any of the social media links shared above or contact me on email{" "}
        <a className="font-bold" href="mailto:dhwanilvyas@outlook.com">
          here
        </a>
        .
      </p>
    </div>
  );
};

export default About;
