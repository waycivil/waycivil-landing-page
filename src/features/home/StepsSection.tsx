import SingleStep from "@/features/home/SingleStep";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

const data = [
  {
    title: "Select your track",
    description: "Choose one of our predefined AI agents to review your plan.",
    image: "/step-1.png",
  },
  {
    title: "Upload Plans",
    description: "Attach the PDF plan that you want to review.",
    image: "/step-2.png",
  },
  {
    title: "Add Criteria",
    description:
      "Add any comments, reference docs, client/company standards, or examples. You can also choose a Federal format.",
    image: "/step-3.png",
  },
  {
    title: "Get Comments & Report",
    description:
      "Visualize and manage all the comments directly on the page with details like title, explanation and page.",
    image: "/step-4.png",
  },
];

const StepsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  return (
    <div className="w-full bg-background" ref={containerRef}>
      <div ref={ref} className="relative">
        {data.map((item, index) => (
          <SingleStep
            key={item.title}
            step={index + 1}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}

        {/* Tracking line */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-6 top-0 w-0.5 overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))]
           from-transparent from-0% via-neutral-700 to-transparent to-99% hidden laptop:block  
           gradient(to_bottom,transparent_0%,background_10%,background_90%,transparent_100%)] laptop:left-8"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-0.5 rounded-full bg-linear-to-t from-primary from-0% via-[#C2410C] via-10%
             to-transparent"
          />
        </div>
      </div>
    </div>
  );
};

export default StepsSection;
