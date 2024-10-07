const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((s) => (
        <Skill
          bgc={s.color}
          key={s.skill}
          skill={s.skill}
          emoji={
            s.level === "beginner"
              ? "😊"
              : s.level === "intermediate"
              ? "👌"
              : "💪🏻"
          }
        />
      ))}
    </div>
  );
}

function Skill({ skill, bgc, emoji }) {
  return (
    <div className="skill" style={{ backgroundColor: bgc }}>
      {skill}
      {emoji}
    </div>
  );
}

export default SkillList;
