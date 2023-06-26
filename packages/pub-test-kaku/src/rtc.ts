import AgoraRTC from "agora-rtc-sdk-ng";

class AgoraRTCReact {
  readonly appType = 1001;

  public constructor() {
    AgoraRTC.setAppType(this.appType);
  }
}

new AgoraRTCReact();

export const VERSION = "0.0.19";
