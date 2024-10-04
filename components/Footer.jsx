import CompanyDetailsSlug from "./CompanyDetailsSlug";

function Footer() {
  let pages = [
    "Home V1",
    "Home V2",
    "Home V3",
    "About 1",
    "About 2",
    "Blog 1",
    "Blog 2",
    "Help Center 1",
    "Help Center 2",
    "FAQ V1",
    "FAQ V2",
    "FAQ Details",
    "Contact V1",
    "Contact V2",
    "Checkout",
  ];
  let utilityPages = [
    "Sign In",
    "Sign Up",
    "Forgot Password",
    "Reset Password",
    "Email Confirmation",
    "404 Page",
    "Coming Soon",
    "Style Guide",
  ];

  return (
    <footer className="bg-primary px-5 lg:px-20 py-10 lg:py-[120px] text-white flex justify-between">
      <CompanyDetailsSlug />
      <div className="hidden md:block">
        <ul className="flex flex-row gap-40">
          <li className="columns-2 gap-40">
            <h2 className="font-bold text-lg mb-4">Pages</h2>
            <ul>
              {pages.map((page) => (
                <li key={page} className="mb-4">
                  {page}
                </li>
              ))}
            </ul>
          </li>
          <li>
            <h2 className="font-bold text-lg mb-4">Utility Pages</h2>
            <ul>
              {utilityPages.map((page) => (
                <li key={page} className="mb-4">
                  {page}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
