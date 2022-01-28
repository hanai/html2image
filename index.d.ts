declare const html2image: (
  html: string,
  opts?: {
    fullPage?: boolean;
    omitBackground?: boolean;
    viewportWidth?: number;
    viewportHeight?: number;
    imageType?: "png" | "jpeg" | "webp";
  }
) => Buffer;

export default html2image;
