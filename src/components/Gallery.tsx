import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, ImageIcon, Video, Calendar } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { translations } from '@/i18n/translations';
import { galleryData, type GalleryPhoto, type GalleryVideo } from '@/data/gallery';
import { SectionHeading } from './SectionHeading';

type Tab = 'photos' | 'videos';

export function Gallery() {
  const { lang } = useLanguage();
  const t = translations[lang].gallery;
  const [tab, setTab] = useState<Tab>('photos');
  const [lightbox, setLightbox] = useState<GalleryPhoto | null>(null);
  const [videoModal, setVideoModal] = useState<GalleryVideo | null>(null);

  const hasPhotos = galleryData.photos.length > 0;
  const hasVideos = galleryData.videos.length > 0;

  return (
    <section id="gallery" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-apl-white border-y border-apl-line">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          en={t.heading}
          hi={t.heading}
          lang={lang}
          subEn="Captured moments from the tournament"
          subHi="टूर्नामेंट के यादगार क्षण"
        />

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mt-10 mb-12"
        >
          <div className="inline-flex gap-1 bg-apl-surface-2 rounded-xl p-1.5 border border-apl-line">
            <button
              onClick={() => setTab('photos')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-display font-600 text-sm tracking-wide transition-all ${
                tab === 'photos' ? 'gradient-saffron-bright text-apl-white glow-orange' : 'text-apl-muted hover:text-apl-ink'
              }`}
            >
              <ImageIcon className="w-4 h-4" />
              {t.photos}
            </button>
            <button
              onClick={() => setTab('videos')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-display font-600 text-sm tracking-wide transition-all ${
                tab === 'videos' ? 'gradient-saffron-bright text-apl-white glow-orange' : 'text-apl-muted hover:text-apl-ink'
              }`}
            >
              <Video className="w-4 h-4" />
              {t.videos}
            </button>
          </div>
        </motion.div>

        {/* Photos */}
        <AnimatePresence mode="wait">
          {tab === 'photos' && (
            <motion.div
              key="photos"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {hasPhotos ? (
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                  {galleryData.photos.map((photo, i) => (
                    <motion.button
                      key={photo.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      onClick={() => setLightbox(photo)}
                      className="relative block w-full overflow-hidden rounded-2xl group break-inside-avoid shadow-lg"
                    >
                      <img
                        src={photo.src}
                        alt={lang === 'en' ? photo.alt : photo.altHi}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-apl-ink/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-left translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <p className="text-apl-white text-sm font-600">
                          {lang === 'en' ? photo.alt : photo.altHi}
                        </p>
                      </div>
                    </motion.button>
                  ))}
                </div>
              ) : (
                <EmptyState
                  icon={ImageIcon}
                  title={t.emptyPhotos}
                  subtitle={t.emptySub}
                  lang={lang}
                />
              )}
            </motion.div>
          )}

          {tab === 'videos' && (
            <motion.div
              key="videos"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {hasVideos ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                  {galleryData.videos.map((video, i) => (
                    <motion.button
                      key={video.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      onClick={() => setVideoModal(video)}
                      className="relative group overflow-hidden rounded-2xl card-bright card-bright-hover text-left"
                    >
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={video.thumbnail}
                          alt={lang === 'en' ? video.title : video.titleHi}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-apl-ink/30 group-hover:bg-apl-ink/15 transition-colors" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full gradient-saffron-bright flex items-center justify-center glow-orange group-hover:scale-110 transition-transform">
                            <Play className="w-7 h-7 text-apl-white ml-1" fill="white" />
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <p className={`text-apl-ink font-600 text-sm ${lang === 'hi' ? 'font-hindi' : ''}`}>
                          {lang === 'en' ? video.title : video.titleHi}
                        </p>
                      </div>
                    </motion.button>
                  ))}
                </div>
              ) : (
                <EmptyState
                  icon={Video}
                  title={t.emptyVideos}
                  subtitle={t.emptySub}
                  lang={lang}
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Photo Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] bg-apl-ink/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <button className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-apl-white hover:text-apl-saffron transition-colors">
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightbox.src}
              alt={lang === 'en' ? lightbox.alt : lightbox.altHi}
              className="max-w-full max-h-[85vh] rounded-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Modal */}
      <AnimatePresence>
        {videoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setVideoModal(null)}
            className="fixed inset-0 z-[100] bg-apl-ink/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <button className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-apl-white hover:text-apl-saffron transition-colors">
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={videoModal.url}
                className="w-full h-full"
                title={lang === 'en' ? videoModal.title : videoModal.titleHi}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function EmptyState({
  icon: Icon,
  title,
  subtitle,
  lang,
}: {
  icon: typeof ImageIcon;
  title: string;
  subtitle: string;
  lang: 'en' | 'hi';
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="card-bright rounded-3xl p-12 md:p-16 text-center max-w-2xl mx-auto"
    >
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-apl-surface-3 mb-6">
        <Icon className="w-10 h-10 text-apl-saffron" />
      </div>
      <h3 className={`font-display font-700 text-2xl md:text-3xl gradient-text mb-3 ${lang === 'hi' ? 'font-hindi' : ''}`}>
        {title}
      </h3>
      <p className={`text-apl-muted text-base md:text-lg ${lang === 'hi' ? 'font-hindi' : ''}`}>
        {subtitle}
      </p>
      <div className="flex items-center justify-center gap-2 mt-6 text-apl-muted-light">
        <Calendar className="w-4 h-4" />
        <span className="text-sm">APL Season 5</span>
      </div>
    </motion.div>
  );
}
