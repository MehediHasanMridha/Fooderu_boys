import Accordion from "../ui/Accordion";

const FAQ = () => {
  return (
    <div>
      <Accordion
        title="What is a concept, and what does it include?"
        content="Concept is an idea wrapped into a design. Depending on the complexity of the product, it’s either a 3-5 informational blocks (landing page), a 2-5 of screens (mobile app), or a 2-primary screens (dashboard). If, to be recognized the idea requires animation — it can be added free of charge."
        defaultOpen={true}
      />

      <Accordion
        title="What is a concept, and what does it include?"
        content="Concept is an idea wrapped into a design. Depending on the complexity of the product, it’s either a 3-5 informational blocks (landing page), a 2-5 of screens (mobile app), or a 2-primary screens (dashboard). If, to be recognized the idea requires animation — it can be added free of charge."
      />

      <Accordion
        title="What is a concept, and what does it include?"
        content="Concept is an idea wrapped into a design. Depending on the complexity of the product, it’s either a 3-5 informational blocks (landing page), a 2-5 of screens (mobile app), or a 2-primary screens (dashboard). If, to be recognized the idea requires animation — it can be added free of charge."
      />

      <Accordion
        title="What is a concept, and what does it include?"
        content="Concept is an idea wrapped into a design. Depending on the complexity of the product, it’s either a 3-5 informational blocks (landing page), a 2-5 of screens (mobile app), or a 2-primary screens (dashboard). If, to be recognized the idea requires animation — it can be added free of charge."
      />
    </div>
  );
};

export default FAQ;
