const annualPriceCounter = (price) => {
  return Math.floor(price * 12 * 0.9);
};

export default [
  {
    id: 1,
    title: "Bookkeeping & Accounting",
    description:
      "Accurate and organized financial records that give you a clear view of your business performance and ensure compliance with accounting standards.",
    price: 79,
    annualPrice: annualPriceCounter(79),
    bgImage:
      "https://i.pinimg.com/736x/a9/df/54/a9df54675415e371c6ad25522c76fb01.jpg",
    descriptionStyles: "font-normal text-[17px]",
    benefits: [
      {
        benefit: "Accurate Records",
        about: "Every transaction is tracked and categorized correctly.",
      },
      {
        benefit: "Time Savings",
        about: "No more manual tracking or end-of-month stress.",
      },
      {
        benefit: "Financial Clarity",
        about: "Always know your real financial position.",
      },
    ],
  },
  {
    id: 2,
    title: "Tax Reporting & Compliance",
    description:
      "Preparation and submission of tax reports in line with local regulations, helping you meet deadlines and minimize compliance risks.",
    price: 39,
    annualPrice: annualPriceCounter(39),
    bgImage:
      "https://i.pinimg.com/736x/7e/20/70/7e2070a0b04af3aa237b3c40a2d7e056.jpg",
    benefits: [
      {
        benefit: "Regulatory Compliance",
        about: "All reports follow current tax laws and regulations.",
      },
      {
        benefit: "Risk Reduction",
        about: "Minimizes errors, penalties, and audit risks.",
      },
      {
        benefit: "On-Time Submissions",
        about: "Deadlines are met without last-minute pressure.",
      },
    ],
  },
  {
    id: 3,
    title: "Financial Consulting & Planning",
    description:
      "Strategic financial guidance to support informed decision-making, budgeting, and long-term business growth.",
    price: 29,
    annualPrice: annualPriceCounter(29),
    bgImage:
      "https://i.pinimg.com/736x/c1/c4/73/c1c473eb64397deeb44e6f0480ce6e6c.jpg",
    descriptionStyles: "font-normal text-[17px]",
    benefits: [
      {
        benefit: "Strategic Direction",
        about: "Clear financial goals aligned with business growth.",
      },
      {
        benefit: "Smarter Decisions",
        about: "Data-backed insights instead of assumptions.",
      },
      {
        benefit: "Long-Term Stability",
        about: "Plans built for sustainability, not short-term fixes.",
      },
    ],
  },
  {
    id: 4,
    title: "Business Reporting & Analysis",
    description:
      "Clear financial reports and insights that help you track results, identify risks, and optimize business performance.",
    price: 59,
    annualPrice: annualPriceCounter(59),
    bgImage:
      "https://i.pinimg.com/736x/ab/40/40/ab4040649a2b0e939c6118908ff57776.jpg",
    descriptionStyles: "font-normal text-[17px]",
    benefits: [
      {
        benefit: "Actionable Insights",
        about: "Reports that highlight what really matters.",
      },
      {
        benefit: "Performance Tracking",
        about: "Understand trends, KPIs, and profitability.",
      },
      {
        benefit: "Investor-Ready Data",
        about: "Clear, structured reports for stakeholders.",
      },
    ],
  },
];
