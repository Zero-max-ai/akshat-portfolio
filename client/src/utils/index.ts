interface projectDetailsProps {
  image: string;
  title: string;
  titleLink: string;
  githubLink: string;
}

const projectDetails: projectDetailsProps[] = [
  { image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3-alpha.figma.com%2Fhub%2Ffile%2F3123346331%2F9d6c4b69-2e31-4264-a8b0-788bc1f67f10-cover.png&f=1&nofb=1&ipt=d4fe155b356295979e61262b3e89439f5828d60f071d7ff82366bf8457ce1a6b', title: 'Pixel Playground', titleLink: 'pixel_playground', githubLink: 'https://github.com/Zero-max-ai/PixelPlayground' },
  { image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3-alpha.figma.com%2Fhub%2Ffile%2F3123346331%2F9d6c4b69-2e31-4264-a8b0-788bc1f67f10-cover.png&f=1&nofb=1&ipt=d4fe155b356295979e61262b3e89439f5828d60f071d7ff82366bf8457ce1a6b', title: 'HomeoClinic Analysis', titleLink: 'homeo_analysis', githubLink: 'https://github.com/Zero-max-ai/HomeoClinicAnalysis' },
  { image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3-alpha.figma.com%2Fhub%2Ffile%2F3123346331%2F9d6c4b69-2e31-4264-a8b0-788bc1f67f10-cover.png&f=1&nofb=1&ipt=d4fe155b356295979e61262b3e89439f5828d60f071d7ff82366bf8457ce1a6b', title: 'Rust OS Kernel', titleLink: 'rust_kernel', githubLink: 'https://github.com/Zero-max-ai/RustOSKernel' },
]

const mySkillSet: string[] = [
  'C++', 'Rust', 'NLP', 'Bash', 'Linux', 'UI/UX', 'Figma', 'Python','Tableau','Power Bi','JavaScript', 'TypeScript'
]

interface pixel_playground_props {
  title: string;
  content: string[];
}

const pixel_playground: pixel_playground_props[] = [
  { title: 'Purpose & Vision', content: ['Main Goal: To provide a free, accessible playground for image manipulation using pixel art and other visuals without needing to download heavy software.', 'User Experience: Focused on simplicity, interactivity, and learning by doing. Users can tweak images, view effects in real time, and explore different design styles.', 'Future Vision: Evolve into a full-featured asset store and creative toolkit powered by AI, offering user-generated assets and machine-generated visuals via models like Ollama or Hugging Face.'] },
  { title: 'Core Feature (MVP)', content: ['Access a library of free images', 'Play with image filters and transformations (in progress)', 'Report system for feedback', 'Responsive and clean UI/UX', 'Admin controls for managing users and reports (planned)', 'Asset marketplace (Phase 2)', 'AI generation tools using models like Ollama/HuggingFace (Phase 3)'] },
  { title: 'Frontend Tech Stack', content: ['React – Core UI framework', 'TypeScript – Static typing for reliability', 'Tailwind CSS v4 – Utility-first CSS framework', 'Framer Motion – Animations and transitions'] },
  { title: 'Backend Tech Stack', content: ['Node.js – Runtime environment', 'TypeScript – Type-safe development', 'Zod – Schema validation', 'JWT – Authentication tokens', 'bcryptjs – Password hashing', 'CORS – Cross-origin resource sharing middleware'] },
]

export {
  projectDetails,
  mySkillSet,
  pixel_playground,
}
