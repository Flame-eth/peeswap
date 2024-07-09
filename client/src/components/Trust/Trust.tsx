import styled from "styled-components";

type Props = {};
export const Trust = ({}: Props) => {
  return (
    <div className="py-8 md:py-16 w-[90%] mx-auto relative z-10">
      <div className="w-full">
        <GridLayout className="hidden md:grid">
          <div className="flex flex-col justify-between col-span-1 row-span-2">
            <h1 className="text-white montserrat-all font-medium text-2xl md:text-3xl">
              Trusted by millions
            </h1>
            <div className="flex flex-col gap-4">
              <p className="text-gray-300 text-sm md:text-base">
                Peeswap products are powered by the Uniswap Protocol. The
                protocol is the largest onchain marketplace, with billions of
                dollars in weekly volume across thousands of tokens on Ethereum
                and 7+ additional chains.
              </p>
              <a
                href="#"
                className="card rounded-full px-6 py-3 text-white max-w-max flex items-center gap-3 "
              >
                Learn more{" "}
                <i className="fi fi-sr-arrow-circle-right flex text-xl"></i>
              </a>
            </div>
          </div>
          <div className="col-start-2 col-span-1 row-span-2 w-full h-full grid grid-cols-4 grid-rows-4 gap-4">
            <TrustCard className="">
              <div className="flex flex-col justify-between p-5 lg:p-8 overflow-hidden w-full h-full max-h-[230px] card inner-div rounded-[20px]">
                <h3 className="gray-text montserrat-all font-medium color text-lg lg:text-2xl">
                  All time volume
                </h3>
                <p className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl min-h-14">
                  $2.0T
                </p>
              </div>
            </TrustCard>
            <TrustCard className="">
              <div className="flex flex-col justify-between p-5 lg:p-8 overflow-hidden w-full h-full max-h-[230px] card inner-div rounded-[20px]">
                <h3 className="gray-text montserrat-all font-medium color text-lg lg:text-2xl">
                  All time swappers
                </h3>
                <p className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl min-h-14">
                  16.6M
                </p>
              </div>
            </TrustCard>
            <TrustCard className="">
              <div className="flex flex-col justify-between p-5 lg:p-8 overflow-hidden w-full h-full max-h-[230px] card inner-div rounded-[20px]">
                <h3 className="gray-text montserrat-all font-medium color text-lg lg:text-2xl">
                  All time LP fees
                </h3>
                <p className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl min-h-14">
                  $3.4B
                </p>
              </div>
            </TrustCard>
            <TrustCard className="">
              <div className="flex flex-col justify-between p-5 lg:p-8 overflow-hidden w-full h-full max-h-[230px] bg-[#2fba610a] inner-div rounded-[20px]">
                <h3 className="montserrat-all font-medium color text-lg lg:text-2xl text-[#40b66b]">
                  24H volume
                </h3>
                <p className="text-[#40b66b] text-2xl md:text-3xl lg:text-4xl xl:text-5xl min-h-14">
                  $770.7M
                </p>
              </div>
            </TrustCard>
          </div>
        </GridLayout>
        <MobileLayout className="flex flex-col gap-8 md:hidden">
          <h1 className="text-white montserrat-all font-medium text-2xl md:text-3xl">
            Trusted by millions
          </h1>
          <div className="w-full grid grid-cols-4 grid-rows-4 gap-3 h-[320px]">
            <TrustCard className="">
              <div className="flex flex-col justify-between p-5 lg:p-8 overflow-hidden w-full h-full max-h-[230px] card inner-div rounded-[20px]">
                <h3 className="gray-text montserrat-all font-medium color text-base">
                  All time volume
                </h3>
                <p className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl min-h-8">
                  $2.0T
                </p>
              </div>
            </TrustCard>
            <TrustCard className="">
              <div className="flex flex-col justify-between p-5 lg:p-8 overflow-hidden w-full h-full max-h-[230px] card inner-div rounded-[20px]">
                <h3 className="gray-text montserrat-all font-medium color text-base">
                  All time swappers
                </h3>
                <p className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl min-h-8">
                  16.6M
                </p>
              </div>
            </TrustCard>
            <TrustCard className="">
              <div className="flex flex-col justify-between p-5 lg:p-8 overflow-hidden w-full h-full max-h-[230px] card inner-div rounded-[20px]">
                <h3 className="gray-text montserrat-all font-medium color text-base">
                  All time LP fees
                </h3>
                <p className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl min-h-8">
                  $3.4B
                </p>
              </div>
            </TrustCard>
            <TrustCard className="">
              <div className="flex flex-col justify-between p-5 lg:p-8 overflow-hidden w-full h-full max-h-[230px] bg-[#2fba610a] inner-div rounded-[20px]">
                <h3 className="montserrat-all font-medium color text-base text-[#40b66b]">
                  24H volume
                </h3>
                <p className="text-[#40b66b] text-2xl md:text-3xl lg:text-4xl xl:text-5xl min-h-8">
                  $770.7M
                </p>
              </div>
            </TrustCard>
          </div>
          <p className="text-white text-base">
            Peeswap products are powered by the Uniswap Protocol. The protocol
            is the largest onchain marketplace, with billions of dollars in
            weekly volume across thousands of tokens on Ethereum and 7+
            additional chains.
          </p>
          <a
            href="#"
            className="card rounded-full px-6 py-3 text-white max-w-max flex items-center gap-3 "
          >
            Learn more{" "}
            <i className="fi fi-sr-arrow-circle-right flex text-xl"></i>
          </a>
        </MobileLayout>
      </div>
    </div>
  );
};

const GridLayout = styled.div`
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 234px);
  gap: 16px;

  @media screen and (max-width: 960px) {
    grid-template-rows: repeat(2, 160px);
    gap: 12px;
  }
  //   @media screen and (max-width: 768px) {
  //     grid-template-rows: repeat(2, 200px);
  //     gap: 12px;
  //   }
`;

const TrustCard = styled.div`
  grid-row: span 2 / span 2;
  grid-column: span 2 / span 2;

  .inner-div {
    background-image: radial-gradient(
      rgba(155, 155, 155, 0.25) 0.5px,
      transparent 0px
    );
    background-size: 12px 12px;
    background-position: -8.5px -8.5px;
  }
`;

const MobileLayout = styled.div``;
