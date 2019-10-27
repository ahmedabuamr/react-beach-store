import React from "react";

export default function Header({ hero, children }) {
  return <header className={hero}>{children}</header>;
}
Header.defaultProps = {
  hero: "defaultHero"
};
