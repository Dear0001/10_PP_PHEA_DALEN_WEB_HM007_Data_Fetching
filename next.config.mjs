/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            // {
            //   hostname: "image.tving.com",

            // },

            // {
            //   hostname: 'c4.wallpaperflare.com'
            // }
            // ,{
            //   hostname:"encrypted-tbn0.gstatic.com"
            // },
            {
                hostname: "*",

            },

        ],

    },
};

export default nextConfig;