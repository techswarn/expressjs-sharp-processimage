const imageSizes = [
  // Original Size (for WebP & Avif)
  {
    name: "original_webp",
    width: undefined,
    height: undefined,
    formatOptions: {
      format: "webp",
      options: {
        quality: 80,
      },
    },
  },
  {
    name: "original_avif",
    width: undefined,
    height: undefined,
    formatOptions: {
      format: "avif",
      options: {
        quality: 60,
        effort: 1,
        chromaSubsampling: "4:4:4",
        bitdepth: 8,
        lossless: false,
      },
    },
  },
  // Thumbnail Sizes
  {
    name: "thumbnail",
    width: 200,
    height: undefined,
    position: "centre",
  },
  {
    name: "thumbnail_webp",
    width: 200,
    height: undefined,
    position: "centre",
    formatOptions: {
      format: "webp",
      options: {
        quality: 80,
      },
    },
  },
  {
    name: "thumbnail_avif",
    width: 200,
    height: undefined,
    position: "centre",
    formatOptions: {
      format: "avif",
      options: {
        quality: 60,
        effort: 1,
        chromaSubsampling: "4:4:4",
        bitdepth: 8,
        lossless: false,
      },
    },
  },
  // Mobile Sizes
  {
    name: "mobile",
    width: 500,
    height: undefined,
  },
  {
    name: "mobile_webp",
    width: 500,
    height: undefined,
    formatOptions: {
      format: "webp",
      options: {
        quality: 80,
      },
    },
  },
  {
    name: "mobile_avif",
    width: 500,
    height: undefined,
    formatOptions: {
      format: "avif",
      options: {
        quality: 60,
        effort: 1,
        chromaSubsampling: "4:4:4",
        bitdepth: 8,
        lossless: false,
      },
    },
  },
  // Tablet Sizes
  {
    name: "tablet",
    width: 800,
    height: undefined,
  },
  {
    name: "tablet_webp",
    width: 800,
    height: undefined,
    formatOptions: {
      format: "webp",
      options: {
        quality: 80,
      },
    },
  },
  {
    name: "tablet_avif",
    width: 800,
    height: undefined,
    formatOptions: {
      format: "avif",
      options: {
        quality: 60,
        effort: 1,
        chromaSubsampling: "4:4:4",
        bitdepth: 8,
        lossless: false,
      },
    },
  },
  // Desktop Sizes
  {
    name: "desktop",
    width: 1200,
    height: undefined,
  },
  {
    name: "desktop_webp",
    width: 1200,
    height: undefined,
    formatOptions: {
      format: "webp",
      options: {
        quality: 80,
      },
    },
  },
  {
    name: "desktop_avif",
    width: 1200,
    height: undefined,
    formatOptions: {
      format: "avif",
      options: {
        quality: 60,
        effort: 1,
        chromaSubsampling: "4:4:4",
        bitdepth: 8,
        lossless: false,
      },
    },
  },
];

module.exports = imageSizes;
