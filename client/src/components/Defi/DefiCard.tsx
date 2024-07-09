import classNames from "classnames";
import classnames from "classnames";
import { CSSProperties, PropsWithChildren } from "react";
import styled from "styled-components";

interface DefiCardProps extends PropsWithChildren {
  color: string;
  badgeIcon: string;
  // badgeText: string;
  className?: string;
  inlineStyle?: CSSProperties;
  heading: string;
  description: string;
  bgImage: string;
  backgroundClassNames?: string;
  bgInlineStyle?: CSSProperties;
}

const DefiCard = ({
  color,
  badgeIcon,
  children,
  className,
  inlineStyle,
  heading,
  description,
  bgImage,
  backgroundClassNames,
  bgInlineStyle,
}: DefiCardProps) => {
  const bgColorVariant: Record<string, string> = {
    blue: "bg-[#0066ff0a]",
    pink: "bg-[#fc72ff1f]",
    green: "bg-[#00c3a00f]",
    purple: "bg-[#883fff0f]",
    red: "bg-[#ff4d0014]",
    brown: "bg-[#62543229]",
    darkPink: "bg-[#311c31]",
  };

  const colorVariant: Record<string, string> = {
    blue: "text-[#2abdff]",
    pink: "text-[#fc72ff]",
    green: "text-[#00c3a0]",
    purple: "text-[#9e62ff]",
    red: "text-[#ff4d00]",
    brown: "text-[#8e8767]",
    darkPink: "text-[#fc72ff]",
  };

  const colorBgVariant: Record<string, string> = {
    blue: "bg-[#2abdff]",
    pink: "bg-[#fc72ff]",
    green: "bg-[#00c3a0]",
    purple: "bg-[#9e62ff]",
    red: "bg-[#ff4d00]",
    brown: "bg-[#8e8767]",
    darkPink: "bg-[#fc72ff]",
  };

  return (
    // <CardContainer
    //   className={classnames(
    //     "w-full rounded-2xl md:rounded-3xl p-6",
    //     bgColorVariant[color],
    //     className
    //   )}
    //   href="#"
    //   style={inlineStyle}
    // >
    //   <div className="black-bg p-4 py-3 rounded-full badge-el w-max flex items-center gap-2 relative overflow-hidden">
    //     <div className="vanishing-badge-el flex items-center gap-3 duration-200">
    //       <i
    //         className={classnames(
    //           badgeIcon,
    //           "flex w-4 duration-200 opacity-100",
    //           colorVariant[color]
    //         )}
    //       ></i>
    //       <span
    //         className={classnames(
    //           colorVariant[color],
    //           "montserrat-all font-semibold text-base"
    //         )}
    //       >
    //         {badgeText}
    //       </span>
    //     </div>
    //     <div className="badge-arrow-cont w-4 absolute right-0 translate-x-5 duration-200 opacity-0">
    //       <i
    //         className={classnames(
    //           "fi fi-rr-arrow-small-right flex text-2xl",
    //           colorVariant[color]
    //         )}
    //       ></i>
    //     </div>
    //   </div>
    //   {children}
    // </CardContainer>
    <CardContainer
      className={classnames(
        "w-full rounded-sm p-6 card shadow-md relative overflow-hidden",
        className
      )}
      href="#"
      style={inlineStyle}
    >
      {/* Header */}
      <header className="relative z-10">
        <div
          className={classnames(
            colorBgVariant[color],
            "w-12 aspect-square flex justify-center items-center rounded-none md:rounded-sm"
          )}
        >
          <i
            className={classnames(
              badgeIcon,
              "flex w-7 justify-center items-center h-7 text-white text-xl duration-200 opacity-100"
            )}
          ></i>
        </div>
      </header>

      {/* Section */}
      <section className="mt-28 mb-20 flex flex-col gap-2 relative z-10">
        <p className="text-gray-400 text-sm">{heading}</p>
        <p className="text-white max-w-64">{description}</p>
      </section>

      {/* Background */}
      <div
        className={classNames(
          "w-[140%] h-full absolute bottom-0 right-0 z-0 -rotate-45 left-1/4 top-1/3",
          backgroundClassNames
        )}
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          ...bgInlineStyle,
        }}
      ></div>
    </CardContainer>
  );
};

const CardContainer = styled.a`
  &:hover {
    .vanishing-badge-el {
      transform: translateX(-24px);

      i {
        opacity: 0;
      }
    }

    .badge-arrow-cont {
      opacity: 1;
      transform: translateX(-18px);
    }
  }
`;

export default DefiCard;
