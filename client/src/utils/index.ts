const projects: string[] = [
  'Pixel Playground', 'HomeoClinic Analysis', 'Rust OS Kernel'
]

type projectDetailsProps = {
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

export {
  projectDetails,
  mySkillSet,
}
