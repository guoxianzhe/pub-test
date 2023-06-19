import "./UserControl.css";

import type { ButtonHTMLAttributes } from "react";

import { SVGMicrophone } from "./icons/SVGMicrophone";
import { SVGMicrophoneMute } from "./icons/SVGMicrophoneMute";

export interface MicControlProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Microphone is on.
   */
  micOn?: boolean;
  /**
   * Callback when microphone is on/off.
   */
  onMicChange?: (micOn: boolean) => void;
  /**
   * Add noise to volume level for a more organic effect.
   */
  noise?: number;
}

/**
 * A button with microphone icon.
 * Display realtime volume level when `audioTrack` is provided.
 */
export function MicControl({ noise, micOn, onMicChange, ...props }: MicControlProps) {
  return (
    <button {...props} className={`arr-user-control`}>
      {micOn ? <SVGMicrophone noise={noise} /> : <SVGMicrophoneMute />}
    </button>
  );
}
