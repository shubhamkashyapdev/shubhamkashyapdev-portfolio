import Parragraph from '../typography/Parragraph';

const testimonials = [
  {
    name: 'Daniel and Aviel',
    content:
      "Wow. It's been an absolutely incredible experience working with Shubham. Beyond the fact that he is a top developer and true expert in his field, he is also a great person and extremely easy to work with. Our project required both creative and logical thinking, and has multiple levels of complexity. Throughout all stages of our project, Shubham was able to help us plan, research, and execute our vision at the highest level, with patience, and attention to even the smallest of details. In fact, we haven't stopped working with Shubham, we're continuing straight on to another project with him. Thanks a lot Shubham! Looking forward to what's next!",
  },
  {
    name: 'Daniel',
    content:
      "This was our second project working with Shubham, and just like the first, we had a fantastic experience working with him throughout the entire project! Both Shubham's skills and personality fit in perfectly with our company's culture and vision, and we're excited to continue working together on our new projects. Thanks Shubham!",
  },
  {
    name: 'Tobias',
    content:
      'This is the second time we worked with Shubham. We needed someone to rework and tidy up a sloppily implemented configuration. His excellent communication skills, prompt responses, and attention to detail make working with him a charm. He kept us up-to-date regularly, implemented feedback quickly, and completed the task in an appropriate time. We are looking forward to working with Shubham again.',
  },
  {
    name: 'Utkarsh S.',
    content:
      "The freelancer was very honest and has a good personality and I liked his dedication to his work. Have a good knowledge of Elementor & WordPress and helped me optimize my website's loading time. The Freelancer is very much experienced and I would like to work with him again on bigger project. Highly Recommended!!",
  },
  {
    name: 'Ismail',
    content:
      'Shubham paid attention to details and worked on my startup diligently. I recommend',
  },
];

const TestimonialsSection = () => {
  return (
    <div className="container px-4 md:px-6">
      <h2 className="mb-12 flex w-fit bg-gradient-to-tr from-primary-300/40 via-primary-300/40 to-primary-400/40 text-center text-3xl font-bold tracking-tighter text-primary-300 transition-colors dark:from-primary-300 dark:to-primary-400 dark:bg-clip-text dark:text-transparent sm:text-5xl">
        What my clients say about me
      </h2>
      <Parragraph className="mt-1">{`Hear from the amazing people I've had the pleasure of working with.`}</Parragraph>
      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col rounded-lg  border-2 bg-white p-6 shadow-lg  transition-shadow hover:shadow-xl  dark:border-slate-300 dark:bg-primary-700"
          >
            <blockquote className="mt-4 grow">
              <p className="w-full text-lg text-black dark:text-slate-200">{`${testimonial.content}`}</p>
            </blockquote>
            <div className="mt-4 flex items-center">
              <div className="flex">
                <p className=" font-semibold  text-black dark:text-slate-200">
                  {testimonial.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
