import Stream from "stream";

declare const html2image: (
  html: string,
  opts?: {
    fullPage?: boolean;
    omitBackground?: boolean;
    viewportWidth?: number;
    viewportHeight?: number;
    imageType?: "png" | "jpeg";
  }
) => Stream;

export default html2image;
