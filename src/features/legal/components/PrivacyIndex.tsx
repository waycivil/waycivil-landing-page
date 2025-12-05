interface TableOfContentsItem {
  id: string;
  label: string;
}

const TABLE_OF_CONTENTS: TableOfContentsItem[] = [
  { id: "overview", label: "Overview" },
  { id: "collection", label: "Information We Collect" },
  { id: "usage", label: "How We Use Your Information" },
  { id: "sharing", label: "Data Sharing and Disclosure" },
  { id: "security", label: "Data Security" },
  { id: "retention", label: "Data Retention" },
  { id: "rights", label: "Your Rights" },
  { id: "cookies", label: "Cookies and Tracking" },
  { id: "changes", label: "Changes to This Policy" },
  { id: "contact", label: "Contact Us" },
];

const PrivacyIndex = () => {
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

export default PrivacyIndex;
