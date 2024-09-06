// src/components/TestimonialCard.tsx
import React from 'react';

const TestimonialCard: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-between gap-6">
      <section className="flex flex-col justify-between flex-1 basis-[48%] min-w-[300px] p-6 bg-primary-700 rounded-lg shadow-lg border border-primary-300 min-h-[400px]">
        <div className="text-lg md:text-xl font-semibold text-primary-300">
          Frontend / Full Stack Developer for Long Term Work
        </div>
        <blockquote className="mt-4 text-base md:text-lg font-medium text-slate-50 leading-relaxed">
          Wow.{' '}
          <span className="text-primary-600">
            It's been an absolutely incredible experience working with Shubham.
          </span>{' '}
          Beyond the fact that he is a top developer and true expert in his
          field, he is also a great person and extremely easy to work with. Our
          project required both creative and logical thinking, and has multiple
          levels of complexity. Throughout all stages of our project,{' '}
          <span className="text-primary-600">
            Shubham was able to help us plan, research, and execute our vision
            at the highest level, with patience, and attention to even the
            smallest of details
          </span>
          . In fact, we haven't stopped working with Shubham, we're continuing
          straight on to another project with him. Thanks a lot Shubham! Looking
          forward to what's next!
        </blockquote>

        <div className="mt-4 font-semibold text-slate-50">Daniel and Aviel</div>
      </section>

      <section className="flex flex-col justify-between flex-1 basis-[48%] min-w-[300px] p-6 bg-primary-700 rounded-lg shadow-lg border border-primary-300 min-h-[400px]">
        <div className="text-lg md:text-xl font-semibold text-primary-300">
          Full Stack Development
        </div>
        <blockquote className="mt-4 text-base md:text-lg font-medium text-slate-50 leading-relaxed">
          This was our second project working with Shubham, and just like the
          first, we had a fantastic experience working with him throughout the
          entire project!{' '}
          <span className="text-primary-600">
            Both Shubham's skills and personality fit in perfectly with our
            company's culture and vision
          </span>
          , and we're excited to continue working together on our new projects.
          Thanks Shubham!
        </blockquote>

        <div className="mt-4 text-slate-50 font-semibold">Daniel</div>
      </section>

      <section className="flex flex-col justify-between flex-1 basis-[48%] min-w-[300px] p-6 bg-primary-700 rounded-lg shadow-lg border border-primary-300 min-h-[400px]">
        <div className="text-lg md:text-xl font-semibold text-primary-300">
          Fix collection implementation according to spec
        </div>
        <blockquote className="mt-4 text-base md:text-lg font-medium text-slate-50 leading-relaxed">
          This is the second time we worked with Shubham. We needed someone to
          rework and tidy up a sloppily implemented configuration.{' '}
          <span className="text-primary-600">
            His excellent communication skills, prompt responses, and attention
            to detail make working with him a charm.
          </span>{' '}
          He kept us up-to-date regularly, implemented feedback quickly, and
          completed the task in an appropriate time. We are looking forward to
          working with Shubham again.
        </blockquote>

        <div className="mt-4 font-semibold text-slate-50">Daniel and Aviel</div>
      </section>

      <section className="flex flex-col justify-between flex-1 basis-[48%] min-w-[300px] p-6 bg-primary-700 rounded-lg shadow-lg border border-primary-300 min-h-[400px]">
        <div className="text-lg md:text-xl font-semibold text-primary-300">
          Wordpress Developer With Elementor Experince Required{' '}
        </div>
        <blockquote className="mt-4 text-base md:text-lg font-medium text-slate-50 leading-relaxed">
          The freelancer was very honest and has a good personality and I liked
          his dedication to his work. <span className='text-primary-600'>Have a good knowledge of Elementor &
          WordPress and helped me optimize my website's loading time.</span> The
          Freelancer is very much experienced and I would like to work with him
          again on bigger project. Highly Recommended!!{' '}
        </blockquote>

        <div className="mt-4 font-semibold text-slate-50">Arturo </div>
      </section>
    </div>
  );
};

export default TestimonialCard;
