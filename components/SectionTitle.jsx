function SectionTitle({ title }) {
  return (
    <div>
      <span className="inline-block font-bold text-base sm:text-xl md:text-2xl lg:text-3xl text-primary">
        {title}
        <hr className="w-7/12 border-4 border-primary mt-2 md:mt-4" />
      </span>
    </div>
  );
}

export default SectionTitle;
