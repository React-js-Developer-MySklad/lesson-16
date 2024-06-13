import { PropsWithChildren, memo } from "react";
import {useLogger} from "../utils/effect.utils";

export const Item = memo(({ children }: PropsWithChildren) => {

  useLogger(`item ${children}`)

  return <li style={{ fontSize: "24px" }}>{children}</li>;
});
