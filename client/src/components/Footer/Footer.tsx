import { ILink } from "@/interfaces";

const appLinks = [
	{
		name: "Swap",
		url: "/",
	},
	{
		name: "Tokens",
		url: "/",
	},
	{
		name: "NTFs",
		url: "/",
	},
	{
		name: "Pool",
		url: "/",
	},
];

const protocolLinks = [
	{
		name: "Governance",
		url: "/",
	},
	{
		name: "Developers",
		url: "/",
	},
];

const companyLinks = [
	{
		name: "Careers",
		url: "/",
	},
	{
		name: "Blog",
		url: "/",
	},
	{
		name: "Brand Assets",
		url: "/",
	},
	{
		name: "Terms & Privacy",
		url: "/",
	},
	{
		name: "Trademark Policy",
		url: "/",
	},
];

const helpLinks = [
	{
		name: "Contact us",
		url: "/",
	},
	{
		name: "Help center",
		url: "/",
	},
];

const Footer = () => {
<<<<<<< HEAD
	return (
		<div className="py-8 md:py-16 w-[90%] mx-auto relative z-10">
			<div className="w-full">
				<div className="flex flex-col md:flex-row gap-8 w-full">
					<div className="flex-1 flex flex-col gap-16">
						<div className="flex flex-col gap-1">
							<p className="text-white montserrat-all font-medium md:text-xl">
								&copy; 2024
							</p>
							<p className="text-white montserrat-all font-medium md:text-xl">
								Peeswap Labs
							</p>
						</div>
						<div className="hidden md:flex flex-row gap-8 items-center">
							<i className="fi fi-brands-github flex text-white text-3xl"></i>
							<i className="fi fi-brands-twitter flex text-white text-3xl"></i>
							<i className="fi fi-brands-discord flex text-white text-3xl"></i>
						</div>
					</div>
					<div className="flex-1 flex flex-col md:flex-row gap-4">
						<div className="flex-1 flex gap-4">
							{/* App links */}
							<div className="flex-1 flex flex-col gap-2">
								<p className="text-white font-medium text-xl">App</p>
								{appLinks.map((link: ILink, id: number) => (
									<a
										key={id}
										href={link.url}
										className="gray-text montserrat-all text-sm inline-block">
										{link.name}
									</a>
								))}
							</div>
							{/* Protocol links */}
							<div className="flex-1 flex flex-col gap-2">
								<p className="text-white font-medium text-xl">Protocol</p>
								{protocolLinks.map((link: ILink, id: number) => (
									<a
										key={id}
										href={link.url}
										className="gray-text montserrat-all text-sm inline-block">
										{link.name}
									</a>
								))}
							</div>
						</div>
						<div className="flex-1 flex gap-4">
							{/* Company links */}
							<div className="flex-1 flex flex-col gap-2">
								<p className="text-white font-medium text-xl">Company</p>
								{companyLinks.map((link: ILink, id: number) => (
									<a
										key={id}
										href={link.url}
										className="gray-text montserrat-all text-sm inline-block">
										{link.name}
									</a>
								))}
							</div>
							{/* Help links */}
							<div className="flex-1 flex flex-col gap-2">
								<p className="text-white font-medium text-xl">Need help?</p>
								{helpLinks.map((link: ILink, id: number) => (
									<a
										key={id}
										href={link.url}
										className="gray-text montserrat-all text-sm inline-block">
										{link.name}
									</a>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
=======
  return (
    <div className="py-8 md:py-16 w-[90%] mx-auto relative z-10">
      <div className="w-full">
        <div className="flex flex-col md:flex-row gap-8 w-full">
          <div className="flex-1 flex flex-col gap-16">
            <div className="flex flex-col gap-1">
              <p className="text-white montserrat-all font-medium md:text-xl">
                &copy; 2024
              </p>
              <p className="text-white montserrat-all font-medium md:text-xl">
                Peeswap
              </p>
            </div>
            <div className="hidden md:flex flex-row gap-8 items-center">
              <i className="fi fi-brands-github flex text-white text-3xl"></i>
              <i className="fi fi-brands-twitter flex text-white text-3xl"></i>
              <i className="fi fi-brands-discord flex text-white text-3xl"></i>
            </div>
          </div>
          <div className="flex-1 flex flex-col md:flex-row gap-4">
            <div className="flex-1 flex gap-4">
              {/* App links */}
              <div className="flex-1 flex flex-col gap-2">
                <p className="text-white font-medium text-xl">App</p>
                {appLinks.map((link) => (
                  <a
                    href={link.url}
                    className="gray-text montserrat-all text-sm inline-block"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              {/* Protocol links */}
              <div className="flex-1 flex flex-col gap-2">
                <p className="text-white font-medium text-xl">Protocol</p>
                {protocolLinks.map((link) => (
                  <a
                    href={link.url}
                    className="gray-text montserrat-all text-sm inline-block"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex-1 flex gap-4">
              {/* Company links */}
              <div className="flex-1 flex flex-col gap-2">
                <p className="text-white font-medium text-xl">Company</p>
                {companyLinks.map((link) => (
                  <a
                    href={link.url}
                    className="gray-text montserrat-all text-sm inline-block"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              {/* Help links */}
              <div className="flex-1 flex flex-col gap-2">
                <p className="text-white font-medium text-xl">Need help?</p>
                {helpLinks.map((link) => (
                  <a
                    href={link.url}
                    className="gray-text montserrat-all text-sm inline-block"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
>>>>>>> befa9caf09eb0babc7d998140c200f8710e67eba
};

export default Footer;
