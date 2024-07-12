import { useRef } from "react";
import styled from "styled-components";
import { navLinks } from "./Navbar";
import classNames from "classnames";
import ConnectButton from "./ConnectBtn";
import { useAccount } from "wagmi";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { Account } from "./Accounts";
import { Link } from "react-router-dom";

interface SideNavProps {
  isOpen: boolean;
  onClose: any;
}

const SideNav = ({ onClose, isOpen }: SideNavProps) => {
  const { isConnected } = useAccount();
  const web3 = useWeb3Modal();
  const connectWallet = () => {
    web3.open();
  };
  return (
    <SideNavContainer
      className={classNames(
        { "left-0": isOpen, "-left-64": !isOpen },
        "flex md:hidden relative flex-col"
      )}
    >
      <Underlay
        className={classNames("underlay", { hidden: !isOpen })}
        onClick={onClose}
      />
      <NavHeader className="">
        <Icon
          style={{
            color: "var(--primary-color)",
            cursor: "pointer",
          }}
          onClick={onClose}
          id="hideIcon"
          className="ml-auto rounded-md w-8 h-8 flex justify-center items-center"
          // bg-[var(--card-bg)]
        >
          <i className="fi fi-rr-arrow-small-left flex text-white text-xl"></i>
        </Icon>
      </NavHeader>
      <NavList>
        {navLinks.map((navItem) => (
          <NavItem
            key={navItem.name.toString()}
            onClick={() => onClose()}
            className="text-xs border-b border-gray-700 border-opacity-20"
          >
            <LinkItem to={navItem.path} title={navItem.name}>
              <span className="navTextCont">
                <span className="navtext text-gray-300">{navItem.name}</span>
              </span>
            </LinkItem>
          </NavItem>
        ))}
      </NavList>
      <div className="mt-auto w-full px-4 mb-8 ">
        {/* <button className="uppercase border border-yellow-500 text-yellow-500 hover:text-white text-xs px-6 py-3 cursor-pointer hover:bg-yellow-500 transition-colors rounded-md w-full">
          Connect wallet
        </button> */}
        {isConnected && (
          <button
            onClick={() => web3.open()}
            className="uppercase border border-yellow-500 text-yellow-300 hover:text-white text-xs px-6 py-2 cursor-pointer ml-6 hover:bg-yellow-500 transition-colors rounded-md"
          >
            <Account />
          </button>
        )}
        {!isConnected && (
          <button
            onClick={() => web3.open()}
            className="uppercase border border-yellow-500 text-yellow-300 hover:text-white text-xs px-6 py-2 cursor-pointer ml-6 hover:bg-yellow-500 transition-colors rounded-md"
          >
            Connect Wallet
          </button>
        )}
      </div>
    </SideNavContainer>
  );
};

const Underlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 250px;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
  opacity: 0;
  animation-name: animateOpacity;
  animation-duration: 0.2s;
  animation-timing-function: ease;
  animation-delay: 0.4s;
  animation-fill-mode: forwards;

  @keyframes animateOpacity {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

const SideNavContainer = styled.nav`
  background-color: var(--black-background);
  width: 100%;
  height: 100%;
  box-shadow: 4px 0px 10px var(--shadow);
  transition: 0.4s ease;

  & > *:not(.underlay) {
    position: relative;
    z-index: 5;
  }

  span.navTextCont,
  #logoTextCont {
    white-space: nowrap;
    display: inline-block;
    transition: 0.4s ease;
  }

  &::-webkit-scrollbar {
    appearance: none;
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    -webkit-appearance: none;
  }

  @media (max-width: 928px) {
    & {
      position: fixed;
      top: 0;
      width: 250px;
      z-index: 100;
    }
  }
`;

const NavHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 1rem;
  height: 50px;
`;

const NavList = styled.ul`
  list-style: none;
  overflow: auto;
  grid-column: 1/ 2;
  grid-row: 2/3;

  &::-webkit-scrollbar {
    appearance: none;
  }

  &::-webkit-scrollbar-thumb {
    -webkit-appearance: none;
  }
`;
const NavItem = styled.li`
  color: var(--primary-color);
  margin-bottom: 0.3rem;
`;

const Icon = styled.span`
  @media (max-width: 928px) {
    & .fa-arrow-left-long {
      display: none;
    }
  }
`;

const NewButton = styled.button`
  border: none;
  outline: none;
  text-decoration: none;
  color: var(--primary-color);
  display: inline-block;
  padding: 0.8rem 1rem;
  width: 100%;
  border-radius: 0.8rem;
  transition: 0.4s ease;
  overflow: hidden;
  white-space: nowrap;
  font-family: inherit;
  cursor: pointer;
  background-color: transparent;
  text-align: left;

  &:hover {
    background-color: var(--primary-color);
    color: var(--white);
  }
`;

const LinkItem = styled(Link)`
  text-decoration: none;
  color: var(--primary-color);
  display: inline-block;
  padding: 0.8rem 1rem;
  width: 100%;
  border-radius: 0.8rem;
  transition: 0.4s ease;
  overflow: hidden;
  white-space: nowrap;

  &:hover {
    background-color: var(--primary-color);
    color: var(--textColor);
  }
`;

export default SideNav;
