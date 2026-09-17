import Sprite from "../Sprite/Sprite";

import styles from "./DirectionalButtons.module.css";

import spriteSheet from "../../assets/sprites/buttons.png";
import { FRAME_INTERVAL } from "../../constants/ui/frame";

const DirectionalButtons = () => {
  return (
    <div className={styles.vertical}>
      <Sprite
        image={spriteSheet}
        columns={7}
        rows={35}
        row={11}
        frameCount={7}
        width={100}
        height={100}
        frameInterval={FRAME_INTERVAL}
        action="click"
        triggerKey="ArrowUp"
      />
      <div className={styles.horizontal}>
        <Sprite
          image={spriteSheet}
          columns={7}
          rows={35}
          row={13}
          frameCount={7}
          width={100}
          height={100}
          frameInterval={FRAME_INTERVAL}
          action="click"
          triggerKey="ArrowLeft"
        />
        <Sprite
          image={spriteSheet}
          columns={7}
          rows={35}
          row={17}
          frameCount={7}
          width={100}
          height={100}
          frameInterval={FRAME_INTERVAL}
          action="click"
          triggerKey="ArrowRight"
        />
      </div>
      <Sprite
        image={spriteSheet}
        columns={7}
        rows={35}
        row={15}
        frameCount={7}
        width={100}
        height={100}
        frameInterval={FRAME_INTERVAL}
        action="click"
        triggerKey="ArrowDown"
      />
    </div>
  );
};

export default DirectionalButtons;
