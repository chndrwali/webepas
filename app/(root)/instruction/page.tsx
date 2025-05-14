'use client';

import { ButtonNextPrev } from '@/components/button-next-prev';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const instructions = [
  {
    icon: '/icon/button-next.png', // kamu bisa rename sesuai nama file asli kamu
    text: 'Untuk maju ke halaman berikutnya',
  },
  {
    icon: '/icon/button-prev.png',
    text: 'Untuk kembali ke halaman sebelumnya',
  },
  {
    icon: '/icon/home.png',
    text: 'Untuk kembali ke halaman awal menu',
  },
  {
    icon: '/icon/play.png',
    text: 'Untuk memutar suara',
  },
  {
    icon: '/icon/sound-off.png',
    text: 'Untuk memberhentikan suara',
  },
];

const Page = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col items-center justify-center ">
        <div className="flex items-center gap-x-4">
          <Image src="/icon/instruction-icon.png" alt="icon" width={100} height={100} />
          <h1 className="text-3xl text-center font-black text-emerald-700 uppercase">
            Petunjuk <br /> Penggunaan
          </h1>
        </div>
        <div className="flex flex-col space-y-2 p-4 bg-white/50 rounded-xl">
          {instructions.map((item, index) => (
            <div key={index} className="flex items-center gap-x-4">
              <Image src={item.icon} alt={`icon-${index}`} width={44} height={44} />
              <Image src="/icon/arrow-ijo.png" alt="" width={44} height={44} />
              <p className="text-emerald-900 font-semibold">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1.1,
        }}
        className="fixed bottom-0 left-4"
      >
        <Image src="/icon/zizah-instruction.png" alt="" className="hidden md:block" width={200} height={100} />
        <Image src="/icon/zizah-instruction.png" alt="" className="block md:hidden" width={150} height={70} />
      </motion.div>
      <ButtonNextPrev onClick={() => router.back()} isLeft />
    </>
  );
};

export default Page;
