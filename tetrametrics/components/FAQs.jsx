import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  return (
    <div>
      <Accordion type="single" collapsible className="w-full flex flex-col gap-5">
        <AccordionItem
          value="item-1"
          className=" p-3 rounded-lg shadow-xl border border-black"
        >
          <AccordionTrigger className="text-xl ">
            How often will I be speaking with my Account Manager?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            Calls with your Account Manager depend directly on your level of
            services. With Ad Management you’ll speak once a month and receive
            weekly check-in emails.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className=" p-3 rounded-lg shadow-xl border border-black"
        >
          <AccordionTrigger className="text-xl ">
          Can I still execute changes on my account if need be?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            We recommend that you allow your Account Manager (AM) to take action
            within your account on your behalf according to the Teikametrics
            Methodology. This allows your AM to have a more complete
            understanding of your performance. For example, if you were to add
            new keywords in Seller/Vendor Central that did not adhere to the
            keyword thresholds your AM abides by, there could be an unexpected
            drop in performance. If you wish to take action please discuss with
            your AM and they can work with you to determine the best course of
            action.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className=" p-3 rounded-lg shadow-xl border border-black"
        >
          <AccordionTrigger className="text-xl ">
          What type of reporting will I receive?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            With Ad Management you’ll receive standard weekly reports via email
            from your Account Manager. You will also have access to the Flywheel
            platform, which allows you to login and review or export reports
            on-demand.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-4"
          className=" p-3 rounded-lg shadow-xl border border-black"
        >
          <AccordionTrigger className="text-xl ">
          Everybody claims to use data-science for bidding. What makes your
            technology different?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            Built by PhD-level mathematicians and Data Scientists, our algorithm
            for bidding on keywords at Teikametrics works to maximize the
            profitability of the seller. The algorithm manages the cost of
            discovering the correct value and then bids that value for you
            automatically. This starts by predicting what the value of a click
            will be. The fact is, technology is only as powerful as the data
            data that flows through it. At Teikametrics, our technology manages
            over $400 million in ad spend and over $7 billion in GMV. Our data
            pipeline allows us to automatically make decisions on millions of
            keywords, multiple times a day – always ensuring that you are
            competing in the auction with the most recent data and information.
            With our deep statistical rigor and customizations tailored to meet
            your business’ needs, the result is Teikametrics Bidding Technology
            doing the hard work to keep you competitive and building market
            share even in the face of intensifying competition and market
            uncertainty.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-5"
          className=" p-3 rounded-lg shadow-xl border border-black"
        >
          <AccordionTrigger className="text-xl ">
          Why is it important to consider profitability, inventory and product
            lifecycles when it comes to advertising?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            Advertising should not operate in a silo. It’s important to
            understand other key aspects of your business to ensure that your
            advertising strategy is aligned to achieve your business objectives.
            For example, knowing your gross margin allows you to understand at
            which point advertising is profitable. Considering whether your
            product is brand new to market vs. already established allows you to
            determine whether your goal should be to optimize for profitability
            rather than to maximize sales, or anywhere in between. It’s also
            important to understand your inventory levels to ensure you never
            stock out and when it’s important to scale up advertising to drive
            sell-through for excess inventory.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-6"
          className=" p-3 rounded-lg shadow-xl border border-black"
        >
          <AccordionTrigger className="text-xl ">
          When is it appropriate to have Teikametrics manage my advertising
            for me?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            Advertising is complex. It takes a lot of experience to understand
            important context such as your goals, the competitive landscape as
            well as keep up with the ever-changing tools of Amazon and Walmart.
            This must then be translated into an advertising strategy that
            balances both individual product goals as well as business
            objectives. If you want to save time, increase performance and scale
            faster, let our experts do the work.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-7"
          className=" p-3 rounded-lg shadow-xl border border-black"
        >
          <AccordionTrigger className="text-xl ">
          What experience does my analyst have?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            Our Analysts are advertising specialists vs generalists. Our
            Analysts have years of direct experience in advertising, ecommerce
            and marketplaces. They go through a rigorous interview process which
            includes quantitative, analytical and logical reasoning assessments.
            They are required to participate in ongoing education including
            Amazon search/display advertising certification, data science
            training and access to Teika research. They are incentivized on both
            their client performance and retention to ensure they goals are
            aligned with yours.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQs;
