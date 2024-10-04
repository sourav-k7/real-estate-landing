function SectionTitle({ title }) {
  return (
    <div className="font-bold text-3xl text-primary">
      <span className="inline-block">
        {title}
        <hr className="w-7/12 border-4 border-primary mt-4" />
      </span>
    </div>
  );
}

export default SectionTitle;
