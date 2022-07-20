module.exports = {
  reactStrictMode: true,
  images: {
    layoutRaw: true,
    domains: [
      "cdn.bitskistatic.com",
      "www.bitski.com"
    ]
  },
  sassOptions: {

    prependData: `
      $standardMode: ${ process.env.NEXT_PUBLIC_STANDARD_MODE != "" ? process.env.NEXT_PUBLIC_STANDARD_MODE : "no-selected"}; 
      $background_color: ${ process.env.NEXT_PUBLIC_BACKGROUND_COLOR != "" ? process.env.NEXT_PUBLIC_BACKGROUND_COLOR : "no-selected" }; 
      $headlineFontLocal: "${process.env.NEXT_PUBLIC_HEADLINES_FONT_FAMILY}";
      $bodyFontLocal: "${process.env.NEXT_PUBLIC_BODY_FONT_FAMILY}";
      $headlineFontGoogleURL: "${process.env.NEXT_PUBLIC_GOOGLEFONT_HEADLINES_URL}";
      $headlineFontGoogleFont: ${process.env.NEXT_PUBLIC_GOOGLEFONT_HEADLINES_FONT_FAMILY};
      $bodyFontGoogleURL: "${process.env.NEXT_PUBLIC_GOOGLEFONT_BOY_URL}";
      $bodyFontGoogleFont: ${process.env.NEXT_PUBLIC_GOOGLEFONT_BOY_FONT_FAMILY};
      $hola: ${process.env.NEXT_PUBLIC_GOOGLEFONT_BOY_FONT_FAMILY};
      $buttonShape: ${ process.env.NEXT_PUBLIC_BUTTON_STYLE != "" ? process.env.NEXT_PUBLIC_BUTTON_STYLE : "none" };
    `,
  },
    future: {
    webpack5: true, // by default, if you customize webpack config, they switch back to version 4. 
      // Looks like backward compatibility approach.
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    config.resolve.fallback = {
      ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
        // by next.js will be dropped. Doesn't make much sense, but how it is
      fs: false, // the solution
    };

    return config;
  },
}
