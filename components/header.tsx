'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import UserMenu from './userMenu';
import { SafeUser } from '@/types';

const logo = [
  {
    path: '/icon/logo2.png',
  },
  {
    path: '/icon/upi.png',
  },
];

const Header = ({ currentUser }: { currentUser: SafeUser | null }) => {
  const pathname = usePathname();
  //   if (pathname === '/') return null;
  return (
    <motion.header initial={{ y: -100 }} animate={{ y: 0 }} className="sticky top-0 z-50 font-mono">
      <div className="container mx-auto py-4 flex justify-between items-center px-4">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <UserMenu currentUser={currentUser} />
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="block">
          <ul className="flex items-center gap-4">
            {logo.map((item, index) => (
              <motion.li key={index} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} whileHover={{ y: -2 }} className="relative group">
                <Image src={item.path} alt={`image ${item.path}`} className="" width={40} height={40} />
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
