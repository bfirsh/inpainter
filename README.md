# 🎨 Inpainter

A web GUI for inpainting with [Stable Diffusion](https://replicate.com/stability-ai/stable-diffusion) using the Replicate API.

Try it out at [inpainter.vercel.app](https://inpainter.vercel.app/)

---

https://user-images.githubusercontent.com/2289/188983236-b0b912b7-c005-46d2-b2cd-cfa09ead6163.mp4

## How it works

🐢🚀 This is a Node.js app! It's powered by:

- [Replicate](https://replicate.com/), a platform for running machine learning models in the cloud.
- [Stable Diffusion](https://replicate.com/stability-ai/stable-diffusion), an open-source text-to-image generation model.
- Next.js [server-side API routes](pages/api) for talking to the Replicate API
- Next.js React components for the inpainting GUI
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Lucide](https://lucide.dev/) for Icons

## Development

Make sure you have a recent version of Node.js installed, then:

```sh
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)
