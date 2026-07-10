import ProjectList from '@/components/ProjectList';

const projects = [
  {
    title: 'CoinWatch',
    description: 'A cryptocurrency tracking app that fetches live market data and displays price trends for popular coins in a clean, easy-to-read dashboard.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Vite'],
    link: 'https://github.com/derickshanana/coinwatch-wdd330'
  },
  {
    title: 'Sleep Outside',
    description: 'An e-commerce storefront for outdoor camping gear, featuring product listings, a shopping cart, and checkout flow built with vanilla JavaScript.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    link: 'https://github.com/schoolonlyaccount/wdd330-sleep-outside'
  },
  {
    title: 'Temple Directory',
    description: 'A multi-page site that lists and filters temples with dynamic content rendering, form handling, and image galleries.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/derickshanana/wdd131'
  }, 
  {
    title: 'Server-Rendered Web App',
    description: 'A server-side rendered web application built with Node.js and Express, using EJS templates to dynamically generate HTML pages.',
    technologies: ['Node.js', 'Express', 'EJS', 'JavaScript', 'CSS'],
    link: 'https://github.com/derickshanana/cse340-course-repo'
  }
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I'm a full-stack developer learning Next.js and React. Here are some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}