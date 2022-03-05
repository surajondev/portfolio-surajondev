/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com','blog.logrocket.com','surajondev.files.wordpress.com','bit.ly']
  }
}

module.exports = nextConfig
