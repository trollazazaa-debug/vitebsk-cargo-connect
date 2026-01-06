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
          href="viber://chat?number=%2B375256775849"
          target="_blank"
          rel="noopener noreferrer"
          className={`w-14 h-14 rounded-full bg-[#7360F2] flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl hover:shadow-[#7360F2]/30 transition-all duration-300 ${
            isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: isOpen ? "150ms" : "0ms" }}
          title="Viber"
        >
          <svg className="w-7 h-7 text-background" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.398.002C9.473.028 5.961.344 3.867 2.26 2.139 3.89 1.487 6.358 1.41 9.397c-.077 3.038-.17 8.736 5.34 10.39h.004l-.004 2.382s-.037.962.6 1.158c.77.239 1.222-.496 1.96-1.293.404-.436.96-1.078 1.382-1.57 3.81.322 6.737-.414 7.07-.524.77-.254 5.124-.81 5.832-6.603.731-5.98-.353-9.755-2.306-11.469l-.001-.001c-.611-.553-3.062-2.006-8.039-1.854 0 0-.484-.018-1.25-.002v-.009h-.6zM11.5 1.2c.697-.013 1.143.003 1.143.003 4.438-.135 6.676 1.133 7.208 1.617 1.705 1.497 2.632 4.928 1.972 10.28-.617 5.043-4.334 5.394-4.998 5.613-.276.09-2.905.746-6.26.518 0 0-2.479 2.995-3.254 3.773-.122.123-.267.174-.364.152-.136-.031-.175-.179-.173-.396l.02-4.084s-.001 0 0 0c-4.786-1.44-4.504-6.302-4.436-9.042.069-2.74.632-4.899 2.137-6.336 1.798-1.648 4.84-1.975 6.648-2.093.174-.011.247-.016.356-.005zM12.098 4.178c-.12.002-.23.102-.224.247.006.144.124.252.268.246.947-.038 1.705.252 2.324.86.614.592.948 1.4 1.009 2.407.007.149.12.261.27.255.148-.007.256-.125.248-.273-.068-1.127-.454-2.05-1.17-2.74-.707-.68-1.595-1.026-2.657-.986-.026.001-.05-.018-.068-.016zm.099 1.245c-.124-.003-.239.101-.24.244-.004.145.107.258.25.262.595.018 1.023.212 1.336.556.316.348.498.864.525 1.504.006.144.119.253.261.247.143-.006.248-.127.242-.27-.03-.745-.253-1.368-.658-1.816-.403-.445-.961-.706-1.674-.726l-.042-.001zm-1.48.658c.155-.038.296.001.447.1l.018.013c.232.168.457.384.626.522.177.145.3.294.35.355l.014.019c.18.248.145.516-.039.746l-.012.014c-.155.19-.367.383-.469.554-.003.005-.007.01-.012.016-.096.116-.114.245-.053.387l.004.008c.315.698.708 1.284 1.215 1.798.566.564 1.21 1.013 1.933 1.374.164.082.3.063.423-.042.188-.158.37-.364.557-.52l.01-.009c.238-.193.5-.23.754-.053l.007.004c.48.316.96.647 1.397 1.027.156.134.197.279.165.44-.108.482-.459.888-.885 1.158h-.002l-.004.003c-.147.088-.298.14-.453.153l-.01.002a1.08 1.08 0 01-.401-.033c-.611-.153-1.438-.564-2.588-1.282a10.825 10.825 0 01-1.937-1.51 11.018 11.018 0 01-1.223-1.367 10.785 10.785 0 01-.766-1.147c-.455-.804-.717-1.427-.84-1.919a1.03 1.03 0 01-.02-.403l.003-.01c.017-.152.071-.3.164-.443l.003-.004c.271-.41.698-.758 1.166-.87h.003a.548.548 0 01.159-.022zm1.407.965c-.118-.011-.234.083-.253.209a.247.247 0 00.194.279c.354.066.64.217.861.455.223.24.37.554.42.938.018.142.139.241.28.223.14-.018.234-.144.216-.285a2.224 2.224 0 00-.578-1.283 2.156 2.156 0 00-1.14-.536z"/>
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
          href="https://t.me/vitexpress"
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
