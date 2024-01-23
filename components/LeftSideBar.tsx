"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";


import { sidebarLinks } from "@/constants";

export const LeftSideBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <section className='left-side-bar'>
      <div className='left-side-container'>
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;
          return (
            <Link
              href={link.route}
              key={link.label}
              className={`leftsidebar-link ${isActive && "link-active"}`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              />

              <p className='link-label'>{link.label}</p>
            </Link>
          );
        })}
      </div>
    </section>
  )
}
