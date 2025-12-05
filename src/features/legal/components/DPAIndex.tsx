interface TableOfContentsItem {
  id: string;
  label: string;
}

const TABLE_OF_CONTENTS: TableOfContentsItem[] = [
  { id: "definitions", label: "Definitions" },
  { id: "scope", label: "Scope and Roles" },
  { id: "obligations", label: "Data Processing Obligations" },
  { id: "security", label: "Security Measures" },
  { id: "subprocessors", label: "Sub-processors" },
  { id: "rights", label: "Data Subject Rights" },
  { id: "breach", label: "Data Breach Notification" },
  { id: "transfer", label: "International Data Transfers" },
  { id: "audit", label: "Audit Rights" },
  { id: "termination", label: "Termination and Data Return" },
];

const DPAIndex = () => {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <aside className="hidden full:sticky full:top-24 full:block full:self-start">
      <nav className="flex flex-col gap-2">
        <h2 className="mb-2 text-sm font-bold uppercase tracking-wider text-primary">
          Table of Contents
        </h2>
        <ul className="flex flex-col gap-2">
          {TABLE_OF_CONTENTS.map((item, index) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className="block text-sm text-subtitle transition-colors hover:text-primary-hover"
              >
                {index + 1}. {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default DPAIndex;
