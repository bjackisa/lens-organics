import { Navigation } from "@/components/navigation"
import { ValueChain } from "@/components/products/value-chain"

export default function ValueChainPage() {
  const galleryImages = [
    "https://res.cloudinary.com/dsijcu1om/image/upload/v1756205647/WhatsApp_Image_2025-08-25_at_3.59.40_PM_v9axnk.jpg",
    "https://res.cloudinary.com/dsijcu1om/image/upload/v1756205647/WhatsApp_Image_2025-08-21_at_5.45.22_AM_1_s66b5e.jpg",
    "https://res.cloudinary.com/dsijcu1om/image/upload/v1756205647/WhatsApp_Image_2025-08-21_at_5.45.22_AM_vygeu0.jpg",
    "https://res.cloudinary.com/dsijcu1om/image/upload/v1756205647/WhatsApp_Image_2025-08-25_at_4.04.27_PM_fyh3a8.jpg",
    "https://res.cloudinary.com/dsijcu1om/image/upload/v1756205647/WhatsApp_Image_2025-08-25_at_4.02.35_PM_cbijpc.jpg",
    "https://res.cloudinary.com/dsijcu1om/image/upload/v1756205647/WhatsApp_Image_2025-08-25_at_4.02.35_PM_cbijpc.jpg",
    "https://res.cloudinary.com/dsijcu1om/image/upload/v1756205647/WhatsApp_Image_2025-08-25_at_4.02.35_PM_cbijpc.jpg",
    "https://res.cloudinary.com/dsijcu1om/image/upload/v1756205647/WhatsApp_Image_2025-08-25_at_4.04.29_PM_maaix6.jpg",
    "https://res.cloudinary.com/dsijcu1om/image/upload/v1756205621/WhatsApp_Image_2025-08-25_at_4.22.19_PM_jvqapp.jpg",
    "https://res.cloudinary.com/dsijcu1om/image/upload/v1756205631/WhatsApp_Image_2025-08-25_at_4.05.26_PM_1_gph0eo.jpg",
    "https://res.cloudinary.com/dsijcu1om/image/upload/v1756205631/WhatsApp_Image_2025-08-25_at_4.05.28_PM_pcbja5.jpg",
    "https://res.cloudinary.com/dsijcu1om/image/upload/v1756205631/WhatsApp_Image_2025-08-25_at_4.05.26_PM_qydlve.jpg",
    "https://res.cloudinary.com/dsijcu1om/image/upload/v1756205630/WhatsApp_Image_2025-08-25_at_4.06.29_PM_nkjvjj.jpg",
    "https://res.cloudinary.com/dsijcu1om/image/upload/v1756205616/WhatsApp_Image_2025-08-25_at_4.21.46_PM_vefv18.jpg",
    "https://res.cloudinary.com/dsijcu1om/image/upload/v1756205616/WhatsApp_Image_2025-08-25_at_4.21.46_PM_vefv18.jpg",
    "https://res.cloudinary.com/dsijcu1om/image/upload/v1756205617/WhatsApp_Image_2025-08-25_at_4.07.51_PM_xd9tmw.jpg",
    "https://res.cloudinary.com/dsijcu1om/image/upload/v1756205616/WhatsApp_Image_2025-08-25_at_4.21.49_PM_cfkipt.jpg",
    "https://res.cloudinary.com/dsijcu1om/image/upload/v1756205615/WhatsApp_Image_2025-08-25_at_4.22.01_PM_lw5lnr.jpg",
    "https://res.cloudinary.com/dsijcu1om/image/upload/v1756205310/WhatsApp_Image_2025-08-25_at_5.23.14_PM_cvbyzc.jpg",
    "https://res.cloudinary.com/dsijcu1om/image/upload/v1756205310/WhatsApp_Image_2025-08-25_at_5.26.13_PM_us3bb9.jpg",
    "https://res.cloudinary.com/dsijcu1om/image/upload/v1756205309/WhatsApp_Image_2025-08-25_at_5.26.38_PM_exhtlk.jpg",
    "https://res.cloudinary.com/dsijcu1om/image/upload/v1756205309/WhatsApp_Image_2025-08-25_at_5.26.38_PM_exhtlk.jpg",
    "https://res.cloudinary.com/dsijcu1om/image/upload/v1756205309/WhatsApp_Image_2025-08-25_at_5.26.23_PM_ur0wxk.jpg",
    "https://res.cloudinary.com/dsijcu1om/image/upload/v1756205307/WhatsApp_Image_2025-08-25_at_5.26.43_PM_aukhae.jpg",
    "https://res.cloudinary.com/dsijcu1om/image/upload/v1756205308/WhatsApp_Image_2025-08-25_at_5.26.40_PM_k9sijn.jpg",
    "https://res.cloudinary.com/dsijcu1om/image/upload/v1756205306/WhatsApp_Image_2025-08-25_at_5.26.47_PM_u61iku.jpg",
  ]

  const galleryVideos = [
    "https://res.cloudinary.com/dsijcu1om/video/upload/v1756205630/WhatsApp_Video_2025-08-25_at_4.06.31_PM_rgheun.mp4",
    "https://res.cloudinary.com/dsijcu1om/video/upload/v1756205617/WhatsApp_Video_2025-08-25_at_4.21.55_PM_ggjume.mp4",
    "https://res.cloudinary.com/dsijcu1om/video/upload/v1756205616/WhatsApp_Video_2025-08-25_at_4.22.05_PM_s54lt0.mp4",
    "https://res.cloudinary.com/dsijcu1om/video/upload/v1756205313/WhatsApp_Video_2025-08-25_at_6.03.34_PM_djc6ug.mp4",
  ]

  return (
    <main>
      <Navigation />
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://res.cloudinary.com/dsijcu1om/image/upload/v1756205616/WhatsApp_Image_2025-08-25_at_4.21.46_PM_vefv18.jpg"
          alt="Lens Organics Value Chain"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <h1 className="relative z-10 text-white text-4xl md:text-6xl font-bold">Value Chain</h1>
      </section>
      <ValueChain />
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-10">Visual Gallery</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {galleryImages.map((url, idx) => (
              <img key={idx} src={url} alt="Gallery image" className="w-full h-64 object-cover rounded-lg" />
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {galleryVideos.map((url, idx) => (
              <video key={idx} controls className="w-full rounded-lg">
                <source src={url} type="video/mp4" />
              </video>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
