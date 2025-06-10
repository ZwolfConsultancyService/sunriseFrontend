import { useParams } from "react-router-dom";

import HangTangString from "../pages/HangTangString";
import CustomSticker from "../pages/CustomSticker";
import FoldableBags from "../pages/FoldableBags";
import TissuePaper from "../pages/TissuePaper";
import MetalBadges from "../pages/MetalBadges";
import CustomCufflinks from "../pages/CustomCufflinks";

const componentMap = {
  "hang-tang-string": HangTangString,
  "custom-sticker": CustomSticker,
  "foldable-bags": FoldableBags,
  "tissue-paper": TissuePaper,
  "metal-badges": MetalBadges,
  "custom-cufflinks": CustomCufflinks,
};

const AccessoryRouter = () => {
  const { slug } = useParams();
  const Component = componentMap[slug];

  if (!Component) {
    return (
      <div className="p-8 text-center text-gray-600">
        <h1 className="text-2xl font-semibold">404 - Not Found</h1>
        <p>Accessory page not found.</p>
      </div>
    );
  }

  return <Component />;
};

export default AccessoryRouter;
