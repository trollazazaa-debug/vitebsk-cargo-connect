import { useState, useEffect, forwardRef } from "react";
import { X, MessageCircle, ArrowUp } from "lucide-react";

const FloatingButtons = forwardRef<HTMLDivElement>((_, forwardedRef) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`w-12 h-12 rounded-full bg-muted-foreground/80 hover:bg-muted-foreground flex items-center justify-center shadow-lg transition-all duration-300 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        title="Наверх"
      >
        <ArrowUp className="w-5 h-5 text-background" />
      </button>

      {/* Messenger buttons */}
      <div className={`flex flex-col items-end gap-3 transition-all duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        {/* Viber */}
        <a
          href="viber://add?number=375256775849"
          target="_blank"
          rel="noopener noreferrer"
          className={`w-14 h-14 rounded-full bg-[#7360F2] flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl hover:shadow-[#7360F2]/30 transition-all duration-300 ${
            isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: isOpen ? "150ms" : "0ms" }}
          title="Viber"
        >
          <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z" fill="#7360F2"/>
            <path d="M35.176 12.832C33.984 11.64 30.312 9.248 24.16 9.216C24.16 9.216 16.816 8.776 13.16 12.152C11.128 14.184 10.4 17.128 10.32 20.76C10.24 24.392 10.144 31.248 16.608 33.04H16.616L16.608 35.872C16.608 35.872 16.56 37 17.296 37.232C18.176 37.504 18.68 36.664 19.52 35.76C19.984 35.24 20.616 34.512 21.104 33.944C25.632 34.336 29.12 33.496 29.52 33.368C30.448 33.072 35.512 32.44 36.312 26.04C37.136 19.44 35.928 14.808 35.176 12.832ZM34.104 25.456C33.44 30.72 29.344 31.048 28.552 31.296C28.224 31.4 25.168 32.12 21.352 31.816C21.352 31.816 18.432 35.24 17.48 36.192C17.328 36.344 17.152 36.4 17.04 36.376C16.888 36.344 16.84 36.168 16.848 35.904L16.872 31.4C11.536 29.936 11.864 24.208 11.928 21.192C11.992 18.176 12.608 15.648 14.384 13.896C17.544 11.04 23.904 11.44 23.904 11.44C29.096 11.464 32.336 13.368 33.336 14.368C33.976 16.048 35.016 19.96 34.104 25.456Z" fill="white"/>
            <path d="M27.72 28.264C27.48 28.136 26.784 27.848 26.552 27.744C26.096 27.544 25.768 27.608 25.488 27.944C25.12 28.384 24.744 28.832 24.456 29.08C24.2 29.304 23.88 29.336 23.488 29.16C22.12 28.576 21.016 27.808 20.16 26.784C19.816 26.376 19.512 25.936 19.24 25.472C19.104 25.24 19.128 25.008 19.304 24.8C19.424 24.656 19.568 24.472 19.712 24.296C19.848 24.128 19.944 23.992 20.048 23.816C20.184 23.568 20.128 23.312 20.024 23.104C19.92 22.896 19.136 21.024 18.896 20.496C18.688 20.04 18.408 20.104 18.168 20.096C17.776 20.08 17.408 20.08 17.04 20.096C16.736 20.112 16.328 20.24 15.984 20.6C15.456 21.128 14.472 22.04 14.472 23.92C14.472 25.8 16.016 27.616 16.208 27.88C16.4 28.144 19.04 32.224 23.168 33.864C26.016 34.992 27.352 35.064 28.12 34.936C28.856 34.816 30.12 34.16 30.424 33.368C30.728 32.576 30.728 31.904 30.632 31.744C30.536 31.584 30.28 31.488 29.888 31.296C29.112 30.896 28.064 28.424 27.72 28.264Z" fill="white"/>
            <path d="M24.536 14.944C24.28 14.944 24.072 15.16 24.08 15.416C24.088 15.672 24.296 15.872 24.552 15.864C26.08 15.816 27.4 16.28 28.408 17.24C29.4 18.176 29.936 19.456 29.944 20.96C29.944 21.216 30.144 21.416 30.4 21.416C30.656 21.416 30.856 21.216 30.856 20.96C30.84 19.2 30.208 17.68 29.032 16.544C27.872 15.424 26.352 14.832 24.56 14.944H24.536Z" fill="white"/>
            <path d="M27.768 20.608C27.792 20.872 28.024 21.064 28.288 21.04C28.544 21.016 28.736 20.8 28.712 20.544C28.64 19.584 28.28 18.784 27.664 18.168C27.04 17.544 26.224 17.184 25.264 17.128C25 17.112 24.784 17.312 24.768 17.568C24.752 17.824 24.944 18.048 25.2 18.064C25.936 18.104 26.544 18.376 27.008 18.84C27.464 19.304 27.72 19.896 27.768 20.608Z" fill="white"/>
            <path d="M25.416 19.68C25.152 19.656 24.928 19.856 24.904 20.12C24.88 20.384 25.08 20.608 25.344 20.632C25.664 20.664 25.928 20.784 26.128 20.992C26.328 21.2 26.44 21.472 26.456 21.8C26.472 22.064 26.688 22.264 26.952 22.248C27.216 22.232 27.416 22.016 27.4 21.752C27.368 21.2 27.168 20.728 26.816 20.36C26.464 20 26 19.768 25.448 19.68H25.416Z" fill="white"/>
          </svg>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/375256775849"
          target="_blank"
          rel="noopener noreferrer"
          className={`w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300 ${
            isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: isOpen ? "100ms" : "0ms" }}
          title="WhatsApp"
        >
          <svg className="w-7 h-7 text-background" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>

        {/* Telegram */}
        <a
          href="https://t.me/+375256775849"
          target="_blank"
          rel="noopener noreferrer"
          className={`w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 ${
            isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: isOpen ? "50ms" : "0ms" }}
          title="Telegram"
        >
          <svg className="w-7 h-7 text-background" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
          </svg>
        </a>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 hover:shadow-xl ${
          isOpen
            ? "bg-muted-foreground hover:bg-muted-foreground/90 rotate-0"
            : "bg-primary hover:bg-primary/90 pulse-ring"
        }`}
      >
        <div className="relative w-7 h-7">
          <X
            className={`w-7 h-7 text-background absolute transition-all duration-300 ${
              isOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
            }`}
          />
          <MessageCircle
            className={`w-7 h-7 text-primary-foreground absolute transition-all duration-300 ${
              isOpen ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"
            }`}
          />
        </div>
      </button>
    </div>
  );
});

FloatingButtons.displayName = "FloatingButtons";

export default FloatingButtons;
