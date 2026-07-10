interface SkillCardProps {
    skills: string[];
}

export default function SkillCard({ skills }: SkillCardProps) {
    return (
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm max-w-md">
            <h3 className="text-xl font-bold mb-3">Technical Skills</h3>
            <ul className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <li
                        key={skill}
                        className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
                    >
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    );
}