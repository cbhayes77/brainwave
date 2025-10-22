export default function Section({
  as: Tag = "section",
  className = "",
  children,
}) {
  return (
    <Tag className={`py-16 sm:py-20 lg:py-24}${className}`}>{children}</Tag>
  );
}
