"use client";

import { useTranslations } from "next-intl";
import { motion, Variants } from "framer-motion";
import { Coffee, Store, Wrench, Car, ArrowRight } from "lucide-react";

const products = [
  {
    id: "fnb",
    title: "Food & Beverage (F&B)",
    description: "Sistem operasional lengkap untuk restoran, cafe, dan kedai. Kelola pesanan, meja, dan inventori bahan baku secara real-time.",
    icon: <Coffee className="w-6 h-6 text-orange-400" />,
    features: ["Manajemen Meja & Antrean", "Inventori Resep & Bahan", "Integrasi Pembayaran"],
    color: "from-orange-500/20 to-orange-500/0",
    border: "border-orange-500/30",
    glow: "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]",
    demoLink: "https://www.pjtechumkm.com/",
    status: "Live Demo",
  },
  {
    id: "retail",
    title: "Toko Retail & Grosir",
    description: "Platform manajemen toko cerdas untuk memantau stok barang, scan barcode kasir, dan laporan penjualan harian otomatis.",
    icon: <Store className="w-6 h-6 text-emerald-400" />,
    features: ["Sistem Barcode & Scanner", "Manajemen Multi-Cabang", "Laporan Keuangan Otomatis"],
    color: "from-emerald-500/20 to-emerald-500/0",
    border: "border-emerald-500/30",
    glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
    demoLink: "https://www.pjtechumkm.com/",
    status: "Template Ready",
  },
  {
    id: "services",
    title: "Jasa & Servis",
    description: "Sistem penjadwalan layanan, manajemen teknisi, dan pencatatan komisi untuk bengkel, salon, atau jasa profesional lainnya.",
    icon: <Wrench className="w-6 h-6 text-blue-400" />,
    features: ["Booking & Penjadwalan", "Manajemen Komisi Teknisi", "Notifikasi Pelanggan"],
    color: "from-blue-500/20 to-blue-500/0",
    border: "border-blue-500/30",
    glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
    demoLink: "https://www.pjtechumkm.com/",
    status: "Template Ready",
  },
  {
    id: "rental",
    title: "Rental & Travel",
    description: "Kelola armada, penjadwalan sewa, dan deposit pelanggan dalam satu dashboard terintegrasi untuk bisnis rental dan travel.",
    icon: <Car className="w-6 h-6 text-purple-400" />,
    features: ["Kalender Booking Armada", "Manajemen Deposit", "Tracking Pengembalian"],
    color: "from-purple-500/20 to-purple-500/0",
    border: "border-purple-500/30",
    glow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]",
    demoLink: "https://www.pjtechumkm.com/",
    status: "Template Ready",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Products() {
  const t = useTranslations("Products");

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-slate-950/50" id="products">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-300 text-sm font-medium mb-6"
          >
            {t("badge")}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-white/90 to-slate-400 bg-clip-text text-transparent mb-6 leading-tight"
          >
            {t("title1")} <br className="hidden md:block" />
            {t("title2")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-lg md:text-xl leading-relaxed"
          >
            {t("description")}
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-2xl bg-slate-900/50 border ${product.border} p-8 transition-all duration-300 hover:-translate-y-1 ${product.glow}`}
            >
              <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-3 rounded-xl bg-slate-800 border ${product.border} shadow-lg`}>
                    {product.icon}
                  </div>
                  {product.status === "Live Demo" && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-400 ring-1 ring-inset ring-emerald-500/20">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      {/* @ts-ignore */}
                      {t(`items.${product.id}.status`)}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {/* @ts-ignore */}
                  {t(`items.${product.id}.title`)}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {/* @ts-ignore */}
                  {t(`items.${product.id}.description`)}
                </p>

                <div className="space-y-2 mb-8">
                  {product.features.map((_, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                      <div className="h-1.5 w-1.5 rounded-full bg-slate-600" />
                      {/* @ts-ignore */}
                      {t(`items.${product.id}.features.${idx}`)}
                    </div>
                  ))}
                </div>

                <a
                  href={product.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white group/btn"
                >
                  <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent group-hover/btn:to-white transition-all">
                    {t("view_template")}
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
