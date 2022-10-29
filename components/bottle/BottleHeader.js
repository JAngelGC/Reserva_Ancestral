import BottleSlider from "./BottleSlider";
import BottleInfo from "./BottleInfo";

import classes from "./BottleHeader.module.css";

const BottleHeader = (props) => {
  return (
    <div className={classes["part-both"]}>
      <BottleSlider className={classes["part-left"]} />
      <BottleInfo
        className={classes["part-right"]}
        color={props.color}
        title={props.title}
        description={props.description}
        features={props.features}
        tastings={props.tastings}
      />
    </div>
  );
};

export default BottleHeader;
