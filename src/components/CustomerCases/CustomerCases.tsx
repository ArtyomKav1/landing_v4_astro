import { CustomerCasesItem } from '@components/CustomerCases/CustomerCases_item';
import { motion,  easeOut } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1, 
    },
  },
};


const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: easeOut,
      delay: custom * 0.1, 
    },
  }),
};

export const CustomerCases = () => {
  const cases = [
    {
      img1: '/uploads/CustomerCases/img1_1.svg',
      img2: '/uploads/CustomerCases/img1_2.svg',
      title: 'CRM как система учета рабочего времени в юридическом консалтинге',
    },
    {
      img1: '/uploads/CustomerCases/img2_1.svg',
      img2: '/uploads/CustomerCases/img2_2.svg',
      title: 'Как в 2,5 раза ускорить обработку обращений надзорных органов',
    },
    {
      img1: '/uploads/CustomerCases/img3_1.svg',
      img2: '/uploads/CustomerCases/img3_2.svg',
      title: 'Как контролировать IP-активы',
    },
  ];

  return (
    <section id="case" className="bg-white">
      <div className="mx-auto max-w-[1224px] px-12 py-[88px] max-sm:px-5">
        <h2 className="pb-12 text-center text-[32px] leading-10 text-[#0D0628]">Кейсы клиентов</h2>

        <motion.div
          className="grid grid-cols-1 gap-6 p-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {cases.map((item, index) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              custom={index} 
            >
              <CustomerCasesItem {...item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
