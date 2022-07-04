import { Home, About, EmiCalculator, CompareProperties, Blogs, Contact, Properties } from '../screens'
const RouterKey = [
  {
    routeTo: "/",
    Component: Home,
  },
  {
    routeTo: "/home",
    Component: Home,
  },
  {
    routeTo: "/about-us",
    Component: About,
  },
  {
    routeTo: "/emi-calculator",
    Component: EmiCalculator,
  },
  {
    routeTo: "/compare-properties",
    Component: CompareProperties,
  },
  {
    routeTo: "/blogs",
    Component: Blogs,
  },
  {
    routeTo: "/contact-us",
    Component: Contact,
  },
  {
    routeTo: "/properties/:type",
    Component: Properties,
  },
];
export default RouterKey;
