type SectionTitleProps = {
  title: string;
  description?: string;
};

function SectionTitle({
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mb-10 text-center">
      <h2 className="text-3xl font-bold text-yellow-400">
        {title}
      </h2>

      {description && (
        <p className="mt-2 text-gray-400">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;