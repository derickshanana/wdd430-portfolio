import SkillCard from '@/components/SkillCard';

export default function About() {
    return (
        <main className="max-w-4xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-gray-700 mb-6">
                This about page shares more information about my background and work.My name is Derick Shanana, and I'm a full-stack web developer with a growing focus on modern JavaScript frameworks like Next.js and React. I got my start building foundational websites with HTML, CSS, and vanilla JavaScript, working through projects like a filterable temple directory and a full e-commerce storefront with cart and checkout functionality. Since then, I've expanded into server-side development, building server-rendered applications with Node.js, Express, and EJS templates, and I've also sharpened my problem-solving skills by implementing core data structures and algorithms in C#. I enjoy the process of turning a concept into a working, responsive application — from structuring clean, semantic markup to wiring up dynamic data and building reusable components. I'm currently deepening my skills in the App Router, TypeScript, and full-stack architecture as I work toward building production-ready, database-driven web applications.
            </p>
            <SkillCard skills={['Next.js', 'React', 'TypeScript', 'Tailwind CSS']} />
        </main>
    );
}