import Accordion from "../ui/Accordion";
import Divider from "../ui/Divider";

const FAQ = () => {
  return (
    <div className="w-[1784px] mx-auto mt-[352px]">
      <div className="flex justify-between mb-8">
        {/* Title */}
        <h1 className="w-[806px] text-[80px] text-[#040633] font-medium leading-[106px] font-mona-sans">
          FREQUENTLY ASKED QUESTIONS
        </h1>

        {/* TODO: Logo Goes Here */}
      </div>

      <Accordion
        title="What is a concept, and what does it include?"
        content="Concept is an idea wrapped into a design. Depending on the complexity of the product, it’s either a 3-5 informational blocks (landing page), a 2-5 of screens (mobile app), or a 2-primary screens (dashboard). If, to be recognized the idea requires animation — it can be added free of charge."
        defaultOpen={true}
      />
      <Divider className="my-10" />

      <Accordion
        title="What is a concept, and what does it include?"
        content="Concept is an idea wrapped into a design. Depending on the complexity of the product, it’s either a 3-5 informational blocks (landing page), a 2-5 of screens (mobile app), or a 2-primary screens (dashboard). If, to be recognized the idea requires animation — it can be added free of charge."
      />
      <Divider className="my-10" />

      <Accordion
        title="What is a concept, and what does it include?"
        content="Concept is an idea wrapped into a design. Depending on the complexity of the product, it’s either a 3-5 informational blocks (landing page), a 2-5 of screens (mobile app), or a 2-primary screens (dashboard). If, to be recognized the idea requires animation — it can be added free of charge."
      />
      <Divider className="my-10" />

      <Accordion
        title="What is a concept, and what does it include?"
        content="Concept is an idea wrapped into a design. Depending on the complexity of the product, it’s either a 3-5 informational blocks (landing page), a 2-5 of screens (mobile app), or a 2-primary screens (dashboard). If, to be recognized the idea requires animation — it can be added free of charge."
      />
      <Divider className="my-10" />
    </div>
  );
};

export default FAQ;
