import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-RM1C340BB1");
};

export const sendPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};
