import Link from "next/link";

type Props = {
  children: React.ReactNode;
  href: string;
};

const CustomLink = ({ children, href }: Props) => {
  if (href.startsWith("/") || href === "") {
    return (
      <Link href={href}>
        <a>{children}</a>
      </Link>
    );
  } else {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
};

export default CustomLink;